import mongoose from "mongoose";
import { mongoodbconnection, dbname } from "../config/Config";

export const connect = async () => {
    await mongoose.connect(mongoodbconnection+dbname)
    .then(v => {
        console.log("mongodb connected successfully")
    return true})
    .catch(e => {console.log("error: "+e); return false;});
    return false;  
}

