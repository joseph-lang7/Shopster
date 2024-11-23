import express from "express";
import {
  getAllProducts,
  getFeaturedProducts,
  createProduct,
  getRecommendedProducts,
  deleteProduct,
} from "../controllers/product.controllers.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/recommendations", protectRoute, getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
