import {faker} from '@faker-js/faker';
import prisma from "~~/lib/prisma";

export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'Seed database'
    },
    async run() {
        try {
            const users = [];
            for (let i = 0; i < 10; i++) {
                users.push({
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                });
            }
            await prisma.user.createMany({
                data: users
            });

            const categories = [];
            for (let i = 0; i < 5; i++) {
                categories.push({
                    name: faker.commerce.department()
                });
            }
            await prisma.category.createMany({
                data: categories
            });

            const books = [];
            for (let i = 0; i < 30; i++) {
                books.push({
                    title: faker.lorem.words(3),
                    author: faker.person.fullName(),
                    description: faker.lorem.sentence(),
                    price: parseFloat(faker.commerce.price()),
                    rating: faker.number.int({min: 1, max: 5}),
                    categoryId: faker.number.int({min: 1, max: 5}),
                    condition: faker.helpers.arrayElement(['new', 'like_new', 'used', 'very_used']),
                    imageUrl: 'images/best-seller-books/cooking-made-easy.png',
                    ownerId: faker.number.int({min: 1, max: 10})
                });
            }
            await prisma.book.createMany({
                data: books
            });

            return {
                result: 'success',
                message: 'Database seeded successfully'
            }
        } catch (err) {
            if (err instanceof Error) {
                return {
                    error: err.message
                };
            } else {
                return {
                    error: 'Unknown error'
                }
            }
        }

    }
})