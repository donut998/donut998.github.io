const todoList=document.querySelector("#todoList1")
const todoInput=document.querySelector("#todoInput")
const todoform=document.querySelector("#todoForm")
const todoArray=[]; //로컬에 넣을 배열

// function saveTodo(){
//     localStorage.setItem("todos",JSON.stringify(todoArray))
// }


function deleteTodo(event) {
    const li= event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li=document.createElement("li")
    const span=document.createElement("span")
    li.appendChild(span);
    span.innerText=newTodo;
    const xButton=document.createElement("button");
    xButton.innerText="❌"
    xButton.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(xButton);
    todoList.appendChild(li)
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value
    todoInput.value=""; //입력칸 빈칸으로 만들기
    paintTodo(newTodo);
}

todoform.addEventListener("submit",handleTodoSubmit)

