export class Product {
  #handlePromise = async ({ url, method = "GET", body = null }) => {
    const response = await fetch(`https://fakestoreapi.com/${url}`, {
      method,
      body: body ? JSON.stringify(body) : null,
    });
    return await response.json();
  };
  getProduct = async () => {
    const response = await this.#handlePromise({ url: "products/10" });
    console.log(response);
  };
  addProduct = async () => {
    const product = {
      title: "new product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const response = await this.#handlePromise({ url: "products", method: "POST", body: product});
    console.log(response);
  };
  deleteProduct = () => {};
}
