let starter = 16;
const startBtn = document.querySelector(".btn-table");
const container = document.querySelector(".container");
const tableSize = document.querySelector(".table-size");
tableSize.style.display = "none";
container.style.display = "grid";
startBtn.addEventListener('click',createTable);

function createTable(){
    let newValue = Number(tableSize.value) || starter;
    console.log(newValue);
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
    if(tableSize.style.display == "none"){
        tableSize.style.display = "inline-block";
    }
    tableSize.value = "";
    newbtns.forEach(button=>button.addEventListener('mouseover',(e)=>{
        e.target.style.backgroundColor="red";
    }));

}






