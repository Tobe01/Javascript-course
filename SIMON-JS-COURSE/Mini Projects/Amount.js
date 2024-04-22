let arrays = [];

function calculateValues(){
  let calculation = ''; 

  const inputElement = document.querySelector('.js-firstInput');
  let input = inputElement.value;
  let integer_value = parseInt(input);  // Convert string to integer (string to number)

  const secondInputElement = document.querySelector('.js-secondInput');
  let secondInput = secondInputElement.value;

  let secondInteger_value = parseInt(secondInput);  // Convert string to integer (string to number)

  calculation = integer_value + secondInteger_value;
  arrays.push(calculation);

  let score = document.querySelector('.js-score');
  score.innerHTML = `= ${arrays}`;

  setTimeout(() =>{
    if(score.innerHTML === arrays){
     score.innerHTML = `= ${arrays}`;
     arrays = [];
    } else {
      score.innerHTML = '';
      arrays = [];
    }
  }, 2000)

  inputElement.value = '';
  secondInputElement.value = '';
}
