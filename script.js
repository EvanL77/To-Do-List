const inputBox = document.getElementById("input");
const list = document.getElementById("list");
const canvas = document.querySelector('confetti')
let count = 0;

const jsConfetti = new JSConfetti()

function addTask(){
    if(inputBox.value === ''){
        alert("Box is empty!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        count++;
    }
}
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        count--;
        allDone();
    }
},false);

function allDone(){
    if(count===0){
        jsConfetti.addConfetti()
    }
}