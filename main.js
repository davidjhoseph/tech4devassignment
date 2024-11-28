'Variables'
'Functions'
'Loops'
'Conditional Statements, Conditional Operators, and other data types'
'Scoping and Hoisting'
'Note: Start with line 15';

'primitive data type String, Number, Boolean'

'primitive data type'; "string"
'number'; 30
'Boolean'; true; false

'*** Start with Array methods'
'String Concatenation'
"Class and OOP"

"Promises and Asynchronous Operations"
"extending a class"

"OOP with functions and modularization"


const array = []
const object = {}
const string = ''




array.map()

map() //
forEach() //
filter() 
findIndex()
find()
splice()
slice()
push(); // adds a new element to the end of an array; 
pop()
unshift()
shift()
flat()
length

const arrayOfStrings = ['string', 'number', 'boolean'];


class Product {
  constructor({title, image, price, rating, category, description, id}) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.category = category;
    this.description = description;
  }

  productService = new Product();

  id;
  title;
  image;
  price;
  rating;
  category;
  description;
}

// const dummyProduct = {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

const product = new Product();