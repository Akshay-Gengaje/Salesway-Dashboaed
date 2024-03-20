import express from "express";
import { getSales, getSalesChannel } from "../controller/sales.controller.js";

const router = express.Router();

router.get("/", getSales);
router.get("/channel", getSalesChannel);

export default router;
