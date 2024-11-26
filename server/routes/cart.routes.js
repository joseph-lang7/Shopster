import express from "express";
import {
  addToCart,
  removeAllFromCart,
  updateQuantityInCart,
} from "../controllers/cart.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantityInCart);

export default router;
