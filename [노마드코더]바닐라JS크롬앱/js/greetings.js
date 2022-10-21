
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  // String 컨텐츠 담을 때는 대문자로 변수 정한다 
const USERNAME_KEY ="username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username=username);
}



loginForm.addEventListener("submit", onLoginSubmit)


function paintGreetings(username){
    greeting.innerText = `hello ${username}`  ;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


const savedUsername =localStorage.getItem(USERNAME_KEY);

if ( savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);    // html에서 기본 form 도 히든으로 처리했기 때문에 저장이 안되어있는 경우 히든 기능을 제거 = 보이게 함 
} else{
   paintGreetings(username=savedUsername);
}
    
