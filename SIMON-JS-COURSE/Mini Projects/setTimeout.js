let array = [];

// code to get first name

function getfirstNameInput (){
  const inputElement = document.querySelector('.js-firstName-input');
  const name = inputElement.value;

  array.push(name);
  console.log(array);

  inputElement.value = '';

  displayOutput();
  submitForm();
}

// code to get last name

function getlastNameInput (){
  const inputElement = document.querySelector('.js-lastName-input');
  const name = inputElement.value;

  array.push(name);
  console.log(array);

  inputElement.value = '';

  displayOutput();
  submitForm();
}

// code to popup data

const popup = 'Thanks for your submission';

function displayOutput(){
  const output = document.querySelector('.js-output');

  output.innerHTML = `${popup} ${array}`;

  setTimeout(() =>{
    if (output.innerHTML === 'popup array'){
    output.innerHTML = '';
    array = [];
    } else {
      output.innerHTML =  'popup array';
    }
  }, 2000);
}

// code to change input in submit button

function submitForm(){
  const submit = document.querySelector('.js-submitButton');
  const inputElement = document.querySelector('.js-firstName-input');
  const name = inputElement.value;

if (submit.innerHTML === 'Submit' && name === ''){
  submit.innerHTML = 'Submit';
} else {
  submit.innerHTML = 'Done!';
}

  if(submit.innerHTML === 'Submit'){
   submit.innerHTML = 'Done!';
  } else {
    submit.innerHTML = 'Submit';
  }

  setTimeout(() => {
    if(submit.innerHTML === 'Done!'){
      submit.innerHTML = 'Submit';
    }
  }, 500);
}

// Code for text contents

function textContents(){
  let textArea = [];

  const inputElement = document.querySelector('.js-textContents');
  const textOutput = inputElement.value;
  
  textArea.push(textOutput);
  console.log(textArea);

  inputElement.value = '';
}