declare interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string
    category: string;
    image: string,
    rating: ratingType
}

interface ratingType {
    rate: number;
    count: number
}