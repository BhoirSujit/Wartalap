import {genSaltSync, hashSync, compareSync} from 'bcrypt';

const salt = 16

export const genHashPassword = (pass: string) => {
    const hash  = genSaltSync(salt);
    const hashedpass = hashSync(pass, hash);
    return hashedpass;
}

export const verifyPassword = (pass: string, hashedpass: string) => {
    return compareSync(pass, hashedpass);
}