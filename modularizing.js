export const productService = async () => {
    const handlePromise = async ({ url, method = "GET", body = null }) => {
    const response = await fetch(`https://fakestoreapi.com/${url}`, {
      method,
      body: body ? JSON.stringify(body) : null,
    });
    return await response.json();
  };
  const getProductById = async (id) => {
    const response = await handlePromise({ url: "products/" + id });
    console.log(response);
    return response;
  };
  const getProducts = async () => {
    const response = await handlePromise({ url: "products" });
    console.log(response);
    return response;
  };
  const addProduct = async () => {
    const product = {
      title: "new product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const response = await handlePromise({
      url: "products",
      method: "POST",
      body: product,
    });
    console.log(response);
  };
  const deleteProduct = () => {};
  return {
    getProductById,
    getProducts,
    addProduct,
  };
const array = ['david', 'esther']
return array;
}


const productHelper = await productService();
productHelper.getProductById(3);

export class ProductService {
  #handlePromise = async ({ url, method = "GET", body = null }) => {
    const response = await fetch(`https://fakestoreapi.com/${url}`, {
      method,
      body: body ? JSON.stringify(body) : null,
    });
    return await response.json();
  };
  getProductById = async (id) => {
    const response = await this.#handlePromise({ url: "products/" + id });
    return response;
  };
  getProducts = async () => {
    const response = await this.#handlePromise({ url: "products" });
    return response;
  };
  addProduct = async () => {
    const product = {
      title: "new product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const response = await this.#handlePromise({
      url: "products",
      method: "POST",
      body: product,
    });
    console.log(response);
  };
  deleteProduct = () => {};
}

export class Product {
  constructor({ id, title, image, price, rating, category, description }) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.category = category;
    this.description = description;
  }

  productService = new ProductService();

  id;
  title;
  image;
  price;
  rating;
  category;
  description;
}

