import express from "express";
import {
  addToCart,
  removeAllFromCart,
  updateQuantityInCart,
  getCartProducts,
} from "../controllers/cart.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantityInCart);
router.get("/", protectRoute, getCartProducts);

export default router;
