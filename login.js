const form=document.querySelector("#loginForm")
const idInput=document.querySelector("#idInput")
const greetingH3=document.querySelector("#greeting")
const HIDDEN_class="hidden"
const USERNAME_key="username"//저장된 이름 


function submitId(event){
    event.preventDefault();
    form.classList.add(HIDDEN_class);
    const username=idInput.value
    localStorage.setItem(USERNAME_key,username);
    greeting(username); //로컬 저장소에 인풋값 저장하기
}

function greeting(username){
    greetingH3.innerText=`안녕하세요 ${username}`;
    greetingH3.classList.remove(HIDDEN_class);
}//인사 문구 출력

const saveName=localStorage.getItem(USERNAME_key); 
//로컬 저장소에서 저장된 이름를 변수에 담음

if(saveName===null){
    form.classList.remove(HIDDEN_class);
    form.addEventListener("submit",submitId); //제출 기다리기
}else{ 
    greeting(saveName)
}






