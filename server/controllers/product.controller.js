import Product from "../models/product.model.js";
import {redis} from "../lib/redis.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({products})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getFeaturedProducts = async(req, res) => {
    try {
       let featuredProducts =  await redis.get("featured_products");
       if (featuredProducts) {
           res.json(JSON.parse(featuredProducts));
       }

        // if not in redis, fetch from mongodb
        // .lean() returns plain javascript object instead of a mongodb document,          good for performance
        featuredProducts = await Product.find({isFeatured:true}).lean();
       if (!featuredProducts) {
           return res.status(404).json({message: "No featured products found"});
       }

    //  store in redis for quick access
        await redis.set("featured_products", JSON.stringify(featuredProducts));
       res.json(featuredProducts);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message})
    }
}
