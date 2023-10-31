// DIALOGUE WINDOWS
/* Dialogue windows are prompts created on a web page that is used to interracted with the user, it is usally short and comes with options for the user to select (either OK, or CANCEL). Dialogue windows are not frequently used and really not advisable to be used frequently */

//  TYPES OF DIALOGUE WINDOWS

/* There are three (3) types of dialogue windows:

(1), ALERT
(2), CONFIRM
(3), PROMPT

ALERT: this is usually a short prompt on the screen that comes with just one button for the user to click afterwards. it usually comes in a form of an alert.

 CONFIRM: This dialogue window usually has two buttons, that is two options for the user to pick from. either OK or CANCEL.

PROMPT: This dialogue window gives the user in opportunity to type in an flll in a requirment. it usually also comes with two buttons, (OK and CANCEL).

*/

// EXAMPLES:

// confirm dialogue window
 let pop = window.confirm("Ready to proceed?");
console.log(pop);

// prompt dialogue window
let popi = window.prompt("Please fill in your name");
console.log(popi);

// alert dialogue window

//  EXERCISE: 

let width = prompt("Volume of the box, enter width", 0);
let hieght = prompt("Volume of the box, enter height", 0);
let lenght = prompt("Volume of the box, enter lenght", 0);
let volume = width * hieght * lenght; alert(`Calculate box volume is ${volume}`);

let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "maxjay@twickmail.com"
}, {
  name: "John Smith",
  phone: "(0191) 709 4555",
  email: "johnsm@twickmail.com"
}, {
  name: "James Brown",
  phone: "(0191) 619 2395",
  email: "jamesbrown@twickmail.com"
}];

console.log(contacts.name);

let nt = 2 * 3 ** 3 - 1;
console.log(nt);

let straff = "12";
console.log(straff);

straff = +straff;
console.log(straff);

let notepick = 10;
let meanpick = ++notepick;
console.log(notepick);
console.log(meanpick);

let test = prompt("Hello", "world");
console.log(test);






