export interface ILoginModel {
    email: string,
    password: string
};

export interface ILoginResponse {
    email: string;
    token: string;
}