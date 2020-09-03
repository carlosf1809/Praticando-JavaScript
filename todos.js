var lista = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var buton = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){

    lista.innerHTML = '';

    for(todo of todos){
        var li = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var link = document.createElement('a')
        link.setAttribute('href', '#')

        var pos = todos.indexOf(todo);
        link.setAttribute('onclick', 'removeTodo('+ pos +')')

        var linkText = document.createTextNode('  excluir');


        link.appendChild(linkText);

        lista.appendChild(li);
        li.appendChild(todoText);
        li.appendChild(link);
        
       
        
    }
}

renderTodos()


function addTodo(){
    var todoText = input.value;

    todos.push(todoText)
    input.value = "";
    renderTodos();
    saveToStorage();
}

function removeTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}