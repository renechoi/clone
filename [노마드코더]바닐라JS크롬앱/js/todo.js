const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList =document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; 

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
   const li= event.target.parentElement;
   li.remove();
   toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id) ); // 우리가 클릭한 li.did와 다른 toDo는 남겨둠 
   saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");     // 변수 이름 자체를 li로 만들어줄 필요는 없음 
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement(("button"));
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);       // li 태그 밑에 span을 넣어줌 = 나중에 버튼을 넣을 것을 고려해서 li에 그냥 문자열이 들어가지 않고 span을 통해 들어가게 함  
    li.appendChild(button);
    toDoList.appendChild(li);
}



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value;         // 변수를 저장해 두고 
    toDoInput.value = "";                   // 지움으로써 저장해둔 변수에는 변함이 없도록 한다 
    const newTodoObj = {
        text : newTodo, 
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos= localStorage.getItem(TODOS_KEY);

if (savedToDos){     // 존재하면 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach( paintToDo);
}