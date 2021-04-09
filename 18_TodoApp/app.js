const form = document.getElementById('getData');
const text = document.getElementById('todoText');
const showItems = document.getElementById('showTodo');
var todos = JSON.parse(localStorage.getItem('todoItems')) || [];

function addTodo(){
    var t = text.value;
    var todo = {
        t
    };
    todos.push(todo);
    localStorage.setItem('todoItems',JSON.stringify(todos));
    renderTodo();
}

function renderTodo(){
    showItems.innerHTML = "";
    todos.forEach(i=>{
        showItems.innerHTML += `
        <li id="todo">
        <p>${i.t}</p>
        <div class = "closeOption">
        <div class="bar first"></div>
        <div class="bar last"></div>
        </div>
        </li>
        `;
    });
    var closebtn = document.getElementsByClassName('closeOption');
    for (let i = 0 ; i < closebtn.length ; i++){
        console.log(i)
        closebtn[i].addEventListener('click',(e)=>{
            deleteTodo(i);
        });
    }
}

function deleteTodo(index){
    todos = JSON.parse(localStorage.getItem('todoItems'));
    todos.splice(index,1);
    localStorage.setItem('todoItems',JSON.stringify(todos));
    renderTodo();
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
    text.value = "";
})
window.addEventListener('load',renderTodo);