const inputBox = document.getElementById("input");
const list = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("Box is empty!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        list.appendChild(li);
    }
}
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
},false);