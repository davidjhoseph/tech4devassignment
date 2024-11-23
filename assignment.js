const users = [
  {
    firstName: "David",
    lastName: "Joseph",
    age: 62,
    productsInCart: [
      { name: "Gucci Bag", price: "500", quantity: 6 },
      { name: "Gucci Slippers", price: 700, quantity: 1 },
      { name: "Laptop", price: 1700, quantity: 3 },
      { name: "Salad", price: "20", quantity: 12 },
      { name: "Banana", price: 5, quantity: 5 },
    ],
  },
  {
    firstName: "Aliyu",
    lastName: "Sunday",
    age: 51,
    productsInCart: [
      { name: "Mirror", price: "50", quantity: 1 },
      { name: "House", price: 71000, quantity: 6 },
      { name: "Book", price: 200, quantity: 1 },
      { name: "Phone", price: "120", quantity: 6 },
      { name: "Pan", price: 15, quantity: 8 },
    ],
  },
  {
    firstName: "Mercy",
    lastName: "Chinwo",
    age: 50,
    productsInCart: [
      { name: "Hair", price: "800", quantity: 2 },
      { name: "Car", price: 2700, quantity: 1 },
      { name: "Laptop", price: 1700, quantity: 2 },
      { name: "Eggs", price: "5", quantity: 2 },
    ],
  },
  {
    firstName: "Lara",
    lastName: "Croft",
    age: 25,
    productsInCart: [
      { name: "Door", price: "250", quantity: 2 },
      { name: "Panda", price: 700, quantity: 2 },
    ],
  },
  {
    firstName: "Derek",
    lastName: "Mane",
    age: 17,
    productsInCart: [
      { name: "Land", price: "900", quantity: 6 },
      { name: "Table", price: 300, quantity: 1 },
      { name: "Chair", price: 700, quantity: 3 },
      { name: "Bed", price: "820", quantity: 12 },
      { name: "Seat", price: 335, quantity: 5 },
    ],
  },
];

// All answers must be retuned in a new array.
// All answers must be done in a function that I can just call and it returns my answer.
// Name your functions properly.
// Use arrow Functions only. // we have learned both ways of defining functions.
// Use users array for all questions.
// Do not use chat gpt, you are allowed to google.

// Questions
//1. I want a new array that returns the current content of the array but adds a total property to each user, all i need in the total property is the total amount of products for that user. Please note that total amount should also account for quantity. 
//2. I want a new array that returns only users whose total is over 3500
//3. I want a new array that returns this same array but with a full name property that adds the first name and the last name;
//4. I want a new array that returns only products who have quantity more  than 2 
