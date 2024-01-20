// Javascript source code for Amazone project

let colors = {
  color1: '',
  color2: '',
};

let sizes = {
      medium: '',
      large: '',
      xlarge: '',
    };

let quantity = 0;

let amount = 0;

let buttonElement = document.querySelector('.js-buyAgain');


function medium (){
  sizes.medium = 'M';

  document.querySelector('.js-size').innerHTML = `Size: ${sizes.medium}`;
};

function large (){
  sizes.large = 'L';

  document.querySelector('.js-size').innerHTML = `Size: ${sizes.large}`;
};

function xlarge (){
  sizes.xlarge = 'XL';

  document.querySelector('.js-size').innerHTML = `Size: ${sizes.xlarge}`;
}


function color1 (){
  colors.color1 = 'Red';

  document.querySelector('.js-color').innerHTML = `Color: ${colors.color1}`;
};

function color2 (){
  colors.color2 = 'Black';

  document.querySelector('.js-color').innerHTML = `Color: ${colors.color2}`;
};


document.querySelector('.js-cart').innerHTML = quantity;

document.querySelector('.js-color').innerHTML = `Color: ${colors.color1}`;

document.querySelector('.js-color').innerHTML = `Color: ${colors.color2}`;

document.querySelector('.js-size').innerHTML = `Size: ${sizes.medium}`;

document.querySelector('.js-size').innerHTML = `Size: ${sizes.large}`;

document.querySelector('.js-update').innerHTML = `Quantity: ${quantity}`;

document.querySelector('.js-added').innerHTML = '&#x2705; Added';

document.querySelector('.js-items').innerHTML = `Items(${quantity}):`;

document.querySelector('.js-amount').innerHTML = ` $${amount}`;