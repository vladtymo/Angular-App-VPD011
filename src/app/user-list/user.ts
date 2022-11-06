export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        city: string
    },
    phone: string,
    website: string
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}