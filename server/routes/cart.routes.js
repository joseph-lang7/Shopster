import express from "express";
import {
  addToCart,
  removeAllFromCart,
} from "../controllers/cart.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);

export default router;
