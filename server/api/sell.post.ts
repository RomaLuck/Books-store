import path from "path";
import fs from "fs";
import {readFormData, createError} from "h3";

export default defineEventHandler(async (event) => {
    try {
        const formData = await readFormData(event);

        const image = formData.get("image") as File;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, {recursive: true});
        }
        const fullPath = path.join(uploadDir, image.name as string);
        fs.writeFileSync(fullPath, Buffer.from(await image.arrayBuffer()));
        return {message: "File uploaded successfully", filePath: `/uploads/${image.name}`};
    } catch (error) {
        return createError({statusCode: 500, data: "File upload failed"});
    }
});