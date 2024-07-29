import { Request, Response } from "express";

export const login = (req:Request, res: Response) => {
    console.log(req.body);
}

export const signup = (req:Request, res: Response) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    if (name && email && password) {
        
    }else {
        console.log('not defined')
        res.end();
    }
    res.end();
}