export interface IBook {
    id: string;
    title: string;
    author: string;
    description: string;
    price: number;
    rating: number;
    categoryId: number;
    condition: string;
    imageUrl: string;
    ownerId: number;
}