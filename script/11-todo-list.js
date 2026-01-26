const todolist = [
  {name:'make dinner',
   dueDate: '2024-06-30' 
  },
  {
    name:'wash dishes',
    dueDate: '2024-07-01'
  }];

Rendertodolist();

function Rendertodolist()
{
    let todolistHTML = '';

  for (let i = 0; i < todolist.length; i++)
  {
    const todo = todolist[i];
    const{name,dueDate} = todo;
    const html = `<div>${name}</div>
                   <div>${dueDate}</div>
                    <button onclick = "
                      todolist.splice(${i},1);
                      Rendertodolist();
                    "  class= 'delete-button'>Delete</button>
  `;
    todolistHTML += html; 
  }

  console.log(todolistHTML); 
  document.querySelector('.js-todo-list').innerHTML = todolistHTML;


}

function addTask(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input');
  const dueDate = dateElement.value
 
  todolist.push(
    {
      name,
      dueDate
    }
  );
  console.log(todolist);

  inputElement.value = '';

  Rendertodolist();

}