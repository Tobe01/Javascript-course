//this is my variables practical

let city = "florida";
console.log(city);

let state = "California";
console.log(state);

let statement = `${city} and ${state} are located in the united states`;

console.log(statement);

city = "Japan";
console.log(city);

state = "Tokyo";
console.log(state);

statement = `${city} and ${state} are located in Asia`;
console.log(statement);

/*
booleans practicals
starts here
*/

if (16 < 15) {
  console.log("good to go!");
} else if (16 >= 15) {
  console.log("Almost good!");
} else console.log("Not impressive!");


var genotype = "A+";
console.log(genotype);

var carcolor = "red";
console.log(carcolor);

let favourite_color = "blue";
console.log(favourite_color);

let Favouritefood = "rice";
console.log(Favouritefood);

genotype = "0+";
console.log(genotype);

carcolor = "pink";
console.log(carcolor);

favourite_color = "brown";
console.log(favourite_color);

Favouritefood = "Beans";
console.log(Favouritefood);

var food = "yam";
console.log(food);

var desert = "cake";
console.log(desert);

let comment = `he ate ${food} for lunch, and had ${desert} for dinner`;
console.log(comment);

var cloth = "Suit";
console.log(cloth);

var pants = "jeans";
console.log(pants);

var word = `he wore a black ${cloth} and a pair of ${pants}`;
console.log(word);

const fish = "yellow";
console.log(fish);

const time = "5pm";
console.log(time);

const street = "Ajao Estate";
console.log(street);

const yarn = "i live";
console.log(yarn);

const yarns = "in Lagos";
console.log(yarns);

const talk = `i told him ${yarn} ${yarns} Nigeria`;
console.log(talk);

console.log("hello" + "hi");

console.log("i love" + "you");

console.log("money" + "men");

let height = "30"
console.log(typeof 30);  console.log(height);
//boleans practicals ends here.



let year = 1991;
console.log(typeof year);

let list = "John";
console.log(typeof list); 

let Name = "Alice";
console.log(typeof Name);

if (19 > 18) {
 console.log("congrats! you can drive");
} else if (18 <= 19) {
  console.log("almost there!");
} else console.log("sorry, you can not drive");

let sex = "male";
console.log(typeof "sex");

let a = 1 / 0;
let b = -Infinity;
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

let s = "it's definitely not a number";
let n = s * 10;
console.log(n);
console.log(typeof n);

let country = "Nigeria";
let continent = "Africa";
console.log(`${country} is located on the western part of ${continent}`);

/*TYPE CONVERSIONS*/

//Primitive construction

const str = String();
const num = Number();
const bool = Boolean();

console.log(str);
console.log(num);
console.log(bool);

const big1 = BigInt(42);
console.log(big1);

//Conversions

const strFromNum1 = String(num);
console.log(strFromNum1);

const strFromNum2 = String(8);
console.log(strFromNum2);

const strFromBool = String(true);
console.log(strFromBool);

const numFromStr = Number("312");
console.log(numFromStr);

const boolFromNumber = Boolean(0);
console.log(boolFromNumber);

const nameOfStreet = String("Ajasi");
console.log(nameOfStreet);

const ageOfApplicant = Number("35");
console.log(ageOfApplicant);

const moneyInTheBank = Boolean("true");
console.log(moneyInTheBank);

//Conversion to String

let spr = "text";
let strStr = String(spr);
console.log(`${typeof spr} ${spr}`);

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr} ${nr}`);
console.log(`${typeof strNr} ${strNr}`);

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl} ${bl}`);
console.log(`${typeof strBl} ${strBl}`);

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr} ${bnr}`);
console.log(`${typeof strBnr} ${strBnr}`);

let un = undefined;
let strUn = String(un);
console.log(`${typeof un} ${un}`);

let na = null;
let strN = String(na);
console.log(`${typeof na} ${na}`);
console.log(`${typeof strN} ${strN}`);

//Conversion to Number

console.log(Number(42));

console.log(Number("11"));
console.log(Number("0x11"));
console.log(Number(0o11));
console.log(Number(0b11));
console.log(Number("Infinity"));
console.log(Number(12e3));
console.log(Number("text"));

console.log(Number(14n));
console.log(Number(123456789123n));

console.log(Number(true));
console.log(Number(false));

console.log(Number(undefined));
console.log(Number(null));


//Conversion to Boolean

console.log(Boolean(true));
console.log(Boolean(42));
console.log(Boolean(0));
console.log(Boolean(NaN));

console.log(Boolean("text"));
console.log(Boolean(""));

console.log(Boolean(undefined));
console.log(Boolean(null));


//Conversion to BigInt

console.log(BigInt(11));
console.log(BigInt(0x11));
console.log(BigInt(11e2));

console.log(BigInt(true));
console.log(BigInt("11"));
console.log(BigInt("0x11"));

//Implicit Conversions

const str1 = 42 + "1";
console.log(str1);
console.log(`${typeof str1}`);

const str2 = 42 - "1";
console.log(`${typeof str2}`);
console.log(str2);


//SECTION PRACTICE

let b1 = true;
let b2 = Boolean(true);
let n1 = 100;
let n2 = Number(200);
let bi1 = 100n;
let bi2 = BigInt(200);
let s1 = "Hello";
let s2 = String("Hello");
let u1 = undefined;

console.log(`${typeof b1} ${b1}`);
console.log(`${typeof b2} ${b2}`);
console.log(`${typeof n1} ${n1}`);
console.log(`${typeof n2} ${n2}`);
console.log(`${typeof bi1} ${bi1}`);
console.log(`${typeof bi2} ${bi2}`);
console.log(`${typeof s1} ${s1}`);
console.log(`${typeof s2} ${s2}`);
console.log(`${typeof u1} ${u1}`);

/*DATA TYPE AND TYPE CASTING*/











