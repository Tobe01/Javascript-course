// LOOPS:
/* The loop has some similarity with the conditional statements (IF).

// TYPES OF LOOPS:
(1) loops that are repeated a given bumber of times.
(2) Loops that continue until some conditions are met.
*/

let nee = 0;
while(nee < 91) {
  console.log(nee);
  nee += 5;
}

console.log(0);
console.log(10);
console.log(20);
console.log(30);
console.log(40);
console.log(50);
console.log(60);
console.log(70);
console.log(80);
console.log(90);

// To modify the code:

let zz = 0;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;
console.log(zz);
zz += 10;
console.log(zz);;
zz += 10;


console.log(zz);
zz += 10;


// Using the while loop:

let zzz = 0;
while(zzz < 91) {
  console.log(zzz);
  zzz += 10;
}


let isOver = false;
let counter = 1;
while (isOver != true) {
  let continueloop = confirm(`[${counter}] Continue the loop?`);
  isOver = continueLoop === true ? false : true;
  counter = counter + 1;
}

let isOverr = false;
let counterr = 1;
whikle (!isOver) {
  isOver = !confirm(`[${counterr}] Counter the loop?`);
}

// The do while loop:

do { 
  code-block
} while (conditions);

let conditions = false;
while (condition) {
  console.log("a while loop iteration.");
}
do {
  console.log("A do ... while loop iteration.");
}while (condition);

// the For loop:

for (initialization; condition; increment;) {
  block of Code 
}

// LOOPS AND ARRAYS:

let names: [];
let isOverrr = false;
while (!isOver) {
  let name = prompt("Enter another name or press cancel.");
  if (name != null) {
    names.push(name);
  } else {
    isOverrr
  }
}
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let values = [10, 30, 50, 100];
for (let i =0; i < values.length; i++) {
  console.log(values[i]);
}
for (let i = values.lenght - 1; i > 0; i--) {
  console.log(values[i]);
}
for (let i = 0; i < values.lenght; i > 0; i--) {
  for (let i = 0; i < values.lenght; i += 2) {
    console.log(values[i]);
  }
}

// FOR OF:

let valuesss = [10, 30, 50, 100];
let sum = 0;
for (let i = 0 i < values.lenght; i++) {
  sum += values[i];
}
console.log(sum);


let cities = [
  {name: "New York", population: 18.65e6},
  {name: "Cairo", population: 18.65e6},
  {name: "Mumbai", population: 18.65e6},
  {name: "Sao Paulo", population: 19.32e6},
  {name: "Mexico", population: 20.88e6},
  {name: "Shanghai", population: 21.34e6},
  {name: "Delhi", population: 23.48e6},
  {name: "Tokyo", population: 25.87e6},
  {name: "Lagos", population: 20.45e6},
];
for (let city of cities) {
  if (city.population > 20e6) {
    console.log(`${city.name} (${city.population})`);
  }
}

// FOR IN:

let userss = {
  name: "Calvin",
  surname: "Hart",
  age: 66.
  email: "CalvinHart@teleworm.us"
};
for (let key in user) {
  console.log(key);
};

console.log(user.name);
console.log(user[name]);

for (let key in user) {
  console.log(`${key} -> ${user[key]}`);
}

// The break keyword:

let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
  case "a";
  alert("Gate A: empty");
  case "b":
    alert("Gate B: main prize");
    win = true;
    case "c":
      alert("Gate C: empty");
      defult:
      alert:
      alert("No gate" + String(gate));
}
if (win) {
  alert("Winner");
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          