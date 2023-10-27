let user3 = {
  name: "Tobenna",
  age: "60years",
  nationality: "Nigerian",
  occupation: "Engineer",
};

let user4 = {
  name: "Amaka",
  age: "40years old",
  nationality: "British",
  occupation: "Doctor",
};

console.log(user3.name);
console.log(user3.age);
console.log(user3.nationality);
console.log(user3.occupation);

console.log(user4.name);
console.log(user4.age);
console.log(user4.nationality);
console.log(user4.occupation);

user3 = {
  name: "Kelechukwu",
  age: "30 years old",
}

console.log(user3.name);
console.log(user3.age);

console.log(user3.occupation);

let names = ["Amaka", "Tobechi", "Kelechi", "Tomachi", "Obinna",];
console.log(names[0]);
console.log(names[4]);
console.log(names[3]);
console.log(names[2]);

let fruits = ["Banana", "mango", "orange", "pawpaw", "Apple", "pear"];
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[1]);

//OBJECTS SECTION PRACTICE

let ticket = {
  from: "7 & 8 bustop",
  to: "Oshodi",
  price: "200 naira",
};

console.log(ticket.from);
console.log(ticket.to);
console.log(ticket.price);

let person = {}; person.name = "Tobechi";
person.surname = "Duru";
console.log(`${person.name} ${person.surname}`);

//ARRAYS SECTION PRACTICE

let books = [{title: "Speaking Javascript", Author: "Axel Raushmayer", pages: "460"}, {title: "Programming Javascript Application", Author: "Eric Elliot", pages: "254"}, {title: "Understanding ECMASCRIPT 6", Author: "Nicholas C. Zakas", pages: "352"}];


let newBook = { title: "Learning Javascript Design Patterns", author: "addy Osmani", pages: "254"};
books.push(newBook);

console.log(books.lenght);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

console.log(books.lenght);
console.log(books[0].Author);
console.log(books[1].Author);
console.log(books[2].Author);
console.log(books[3].Author);

console.log(books.lenght);
console.log(books[0].pages);
console.log(books[1].pages);
console.log(books[2].pages);
console.log(books[3].pages);

let selectedBooks = books.slice(-2);

books.shift();
console.log(books.lenght);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

let sum = books[0].pages + books[1].pages + books[2].pages;

console.log(`pages: ${sum}`);

// PERSONAL OBJECTS PRACTICE


let client1 = {
  name: "Robert Brown",
  occupation: "Software Engineer",
  location: "United Kingdom",
  age: "30 years old",
};

client1.name = "James Brown";
 console.log(client1.name);
 console.log(`${client1.name}`);
 delete client1.name

 console.log(client1.name);

// PERSONAL ARRAYS PRACTICE

let fruites = ["Apple", "Orange", "Bannana", "Mango"];
console.log(fruites[0]);
console.log(fruites[1]);
console.log(fruites[2]);
console.log(fruites[3]);

delete fruites[0];
console.log(fruites[0]);

fruites = ["Watermelon"];
console.log(fruites[0]);

if (30 > 15) {
  console.log("you can drive!");
}else console.log("sorry you can not drive!");









