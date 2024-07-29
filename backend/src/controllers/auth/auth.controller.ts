import { Request, Response } from "express";
import UserModel from "../../models/User.model";
import { genHashPassword, verifyPassword } from "../../utils/password.util";


export const login = (req:Request, res: Response) => {
    console.log(req.body);
}

export const signup = (req:Request, res: Response) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    //validate
    if (name && email && password) {
        
    }else {
        console.log('not defined')
        res.end();
    }

    //hash the password
    const hashedpass = genHashPassword(password);

    //create user
    UserModel.create({
        name: name,
        email: email,
        password: hashedpass
    })
    

    res.end();
}