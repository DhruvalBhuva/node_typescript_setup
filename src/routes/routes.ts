import express, { Request, Response } from "express";
import { homeDetailes } from "../controllers/user.controller";
const router = express.Router();

router.get("/home", homeDetailes);

export default router;
