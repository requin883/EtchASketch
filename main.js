let starter = 16;
const startBtn = document.querySelector(".btn-table");
const container = document.querySelector(".container");
container.style.display = "grid";
startBtn.addEventListener('click',createTable);

function createTable(){
    let newValue = prompt("Input a number between 1-100");
    while(!Number(newValue) || (Number(newValue)>100 && Number(newValue)>1)){
        newValue = prompt("Please input a number between 1-100");
    }
    container.innerHTML = "";
    container.style.gridTemplate= `repeat(${newValue},max-content) / repeat(${newValue},max-content)`;
    container.style.gap = 0;
    for (let i=0;i<newValue;i++){
        for(let j=0;j<newValue;j++){
            let newNode = document.createElement("div");
            newNode.classList.add("table");
            container.appendChild(newNode);
            newNode.id = `${i}-${j}`;
        }
        }
    const newbtns = document.querySelectorAll(".table");
    newbtns.forEach(button=>button.addEventListener('mouseover',(e)=>{
        e.target.style.backgroundColor="red";
    }));

}






