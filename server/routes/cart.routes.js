import express from "express";
import { addToCart } from "../controllers/cart.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", protectRoute, addToCart);

export default router;
