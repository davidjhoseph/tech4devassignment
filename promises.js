function getUserFromDB() {
  return new Promise((resolve, reject) => { 
    // fetch(``)
    setTimeout(() => {
      const user = {name: 'David', age: 50} // Code to get a user (API CALL);
      if(!user ) {
        reject("User not found");
      } else {
          resolve(user);
      }
      // The fulfillment value of the promise
    }, 2000);
  });
}

  isFetchingUser = false;
  user = null;
  const fetchUser = () => {
    isFetchingUser = true;
    getUserFromDB().then((data) => {
        isFetching = false;
        user = data;
        console.log(data);
    } ).catch((err) => {
        console.log(err);
    })

  }

  const fetchProductsPromise = (url) => {
    return new Promise((resolve, reject) => {
        const products = fetch(url)
          .then((res) => res.json())
          .then((json) => console.log(json));
          if(products) {
            resolve(products)
          }else {
            reject('Error no product')
          }
    });
  }

  const fetchProducts = () => {
    fetchProductsPromise("https://fakestoreapi.com/products")
      .then((res) => console.log(res))
  }

//   console.log(fetchProducts());
fetchProducts();