import { Router } from "express";
import { login, signup } from "../controllers/auth/auth.controller";

const authRouter = Router();

authRouter.post('/', signup);

export default authRouter;