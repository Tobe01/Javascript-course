// Arithmetic & Logical Operators and Assignments

/* operators in Javascript are just symbols used i assigning a value to a variable or constant */

/* some types of operator imclude:

(1) ASSIGNMENT OPERATORS: used to assign assign values to variables and constants. the basic assignment opertor is the =(equal to) sign.

(2); INCREMENT AND DECREMENT OPERATORS
 e.g (++ and - -).
when any of this operator is used, it increases or decreases the value by 1.

(3); COMPOUND ASSIGNMENT OPERATORS:
e.g:
1, += (addition assignment)
2, -= (subtraction assignment)
3, *= (multiplication assignment)
4, /= (didvion assignment)
5, **= (power assignment)
6, %= (remainder assignment)

(4); LOGICAL OPERATORS:
this type of operators work with boolean type value (true or fales).
examples of logical operators include:
1, && (AND),
2, || (OR),
3, ! (NOT).

(5); ASSIGNMENT OPERATORS:
this type of operators allows for assigning of values to variables and operators. e.g:
(=)

(6); ARITHMETIC OPERATORS:
arithmetic operators are used to perform mathematical calculations on values and constants. examples of arithmetic operators include:
1, + (Plus)
2, - (Minus)
3, * (multiply)
4, / (divide)
5, ** (power)
6, % (remainder).

*/

// (1) ASSIGNMENT OPERATORS:

const details = "Alice";
console.log( details);

let yearss = 2050;
console.log(yearss);
console.log(typeof yearss);

// (2) ARITHMETIC OPERATORS:

console.log(2 + 2 * 2);
console.log(2 + (2 * 2));
console.log((2 + 2) * 2);

const x = 5;
const y = 2;
console.log("addition:", x + y);
console.log("substraction", x - y);
console.log("multiplication", x * y);
console.log("division remainder", x % y);
console.log("division",x / y);
console.log("exponent", x ** y);

let ats = "123";
let m1 = +ats;
let m2 = -ats;
let m3 = -n2;
let m4 = + "abcd";
console.log(`${ats} : ${typeof ats}`);
console.log(`${m1} : ${typeof n1}`);
console.log(`${m2} : ${typeof n2}`);
console.log(`${m3} : ${typeof n3}`);
console.log(`${m4} : ${typeof n4}`);


//  (2) INCREMENT AND DECREMENT:

let n5 = 10;
let n6 = 10;

console.log(n5);
console.log(n5++);
console.log(n5);

console.log(n6);
console.log(++n6);
console.log(n6);

let n7 = 20;
let n8 = 20;
 console.log(n7);
 console.log(n7--);
 console.log(n7);

 console.log(n8);
 console.log(--n8);
 console.log(n8);

// (3) COMPOUND ASSIGNMENT OPERATORS
/*binary arithmetic operators can be combined with the assignment operator, resulting in:
- Addition assignment (+=),
- Subtraction assignment (-=),
- Multiplication assignment (*=),
- Division assignment (/=),
- Remainder assignment (%=),
- Power assignment (*=),
*/

let X = 10;
X += 2;
console.log(X);

X -= 4;
console.log(X);

X *= 3;
console.log(X);

X /= 6;
console.log(X);

X **= 3;
console.log(X);

X %= 10;
console.log(X);


// LOGICAL OPERATORS:
// (1), AND (&&) operator

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && false);

// (2), OR (||) operator

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// (3), NOT (!) operator

console.log(!true);
console.log(!false);

const e = false;
const f = true;
const g = false;
const h = true;
console.log(e && f && g || h);
console.log(e && f && (g || h));

// LOGICAL OPERATORS AND NON-BOOLEAN VALUES

let np = 0;
let period = 1970;
let name = "Alice";
let empty = "";

console.log(!np);
console.log(!year);
console.log(!name);
console.log(!empty);
console.log(!!np);
console.log(!!name);

console.log(true && 1991);
console.log(false && 1991);
console.log(2 && 5);
console.log(0 && 5);
console.log("alice" && "Bob");
console.log("" && "Bob");

console.log(true || 1991);
console.log(false || 1991);
console.log(2 || 5);
console.log(0 || 5);
console.log("alice" || "Bob");
console.log("" || "Bob");

let c = 0;
let d = 0;
console.log(c++ && d++);
console.log(c);
console.log(d);

// COMPOUND ASSOIGNMENT OPERATORS

let v = true;
console.log(v);
a &&= false;
console.log(v);

let u = false;
console.log(u);
u ||= true;
console.log(u);


// EXERCISE:

// Arithmetic operators:
console.log(2 * 3 + 1);
console.log(2 ** 4);
console.log(5 - 1);
console.log(8 ** 2 - 5 ** 2);

// LOGICAL OPERATORS:

console.log(true || false);
console.log(false || false || true);
console.log(true || false || false);
console.log(!false);



let greetings = "happy"
let greetingss = greetings + "Newyear";

console.log(greetingss);















