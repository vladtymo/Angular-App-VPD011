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
