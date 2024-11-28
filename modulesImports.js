import { Product, productService, ProductService } from "./modularizing.js";

const productHelper = await productService();
productHelper.getProductById(3);

const userHelper = userService();
