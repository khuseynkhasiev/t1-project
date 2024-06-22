export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
}

export interface IProductsResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}

export interface IFaq {
    id: number;
    question: string;
    answer: string;
}

export interface ICartProduct {
    discountPercentage: number;
    discountedTotal: number;
    id: number;
    price: number;
    quantity: number;
    thumbnail: string;
    title: string;
    total: number;
}

export interface ICart {
    discountedTotal: number;
    id: number;
    products: ICartProduct[];
    total: number;
    totalProducts: number;
    totalQuantity: number;
    userId: number;
    isDeleted?: boolean;
}

export interface IUser {
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    refreshToken: string;
    token: string;
    username: string;
}
