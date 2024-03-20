import express from "express";
import { loginUser, signupUser } from "../controller/user.controller.js";

const router = express.Router();

// login routes
router.post("/login", loginUser);
//signup routes
router.post("/signup", signupUser);

export default router;
