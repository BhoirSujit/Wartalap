import { config } from "dotenv";

config();

export const mongoodbconnection = process.env.MONGO_DB_CON || ''
export const port = process.env.PORT || 3090
export const dbname = process.env.DB_NAME || 'test'