const todoList = ['make dinner', 'wash dishes'];

function todoItems (){

  const inputElement = document.querySelector('.js-input');
  let name = inputElement.value;

  todoList.push(name);

  console.log(todoList);

  inputElement.value = '';

}



