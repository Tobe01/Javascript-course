// Javascript code for Rock Paper Scissors project

let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

/*
document.querySelector('.js-rockButton') 
 .addEventListener('click', () => {
  gamePlay('Rock');
});

document.querySelector('.js-paperButton')
  .addEventListener('click', () => {
  gamePlay('Paper');
});

document.querySelector('js-scissorsButton')
  .addEventListener('click', () => {
  gamePlay('scissors');
});
*/

updateScore();

function gamePlay (playerMove){
  getMove ();
      
      let result = '';

      if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
          result = 'Tie.'
        } else if (computerMove === 'Paper'){
          result = 'You lose.'
        } else if (computerMove === 'Scissors'){
          result = 'You win.'
        }

      } else if (playerMove === 'Paper'){
          if (computerMove === 'Rock'){
            result = 'You win.';
          } else if (computerMove === 'Paper'){
            result = 'Tie.';
          } else if (computerMove === 'Scissors'){
            result = 'You lose.';
          }

      } else if (playerMove === 'Scissors'){
          if (computerMove === 'Rock'){
            result = 'You lose.';
          } else if (computerMove === 'Paper'){
            result = 'You win.';
          } else if (computerMove === 'Scissors'){
            result = 'Tie.';
          }

      }

      if (result === 'You win.'){
        score.Wins += 1;
      } else if (result === 'You lose.'){
        score.Losses += 1;
      } else if (result === 'Tie.'){
        score.Ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));
      
      updateScore();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = 
      `You 
    <img style="width: 40px;" src="images/${playerMove}-emoji.png">
    <img style="width: 40px;" src="images/${computerMove}-emoji.png">
    Computer`;
      
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
}

function getMove (){

          randomMove = Math.random();
            
          computerMove = '';

          if (randomMove >= 0 && randomMove < 1/3){
            computerMove = 'Rock';
          } else if (randomMove >= 1/3 && randomMove < 2/3){
            computerMove = 'Paper';
          } else if (randomMove >= 2/3 && randomMove < 1){
            computerMove = 'Scissors';
          }
        
          return computerMove;
}

  // Functions parameter practice 
