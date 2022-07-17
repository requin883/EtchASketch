const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
createTable();
const newbtns = document.querySelectorAll(".table");
function createTable(){
    container.style.display = "grid";
    container.style.gridTemplateColumns= "repeat(16,1fr)";
    container.style.gridTemplateRows = "repeat(16,1fr)";
    container.style.gap = 0;
for (let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        let newNode = document.createElement("div");
        newNode.classList.add("table");
        container.appendChild(newNode);
        newNode.id = `${i}-${j}`;
    }
    }
}

newbtns.forEach(button=>button.addEventListener('mouseover',(e)=>{
    e.target.style.background="lightblue";
}));


