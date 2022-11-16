export type userInfor = {
    _id: string;
    email: string;
    username : string;
    password: string;
    passwordagain: string;
    sdt: string;
    isAdmin: boolean;
    createdAt:Date;
}
export type User = {
    Token : string;
    userInfor: userInfor;
}