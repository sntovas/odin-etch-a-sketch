const color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".btn-size");
const resetBtn = document.querySelector(".btn-reset");
const rainbowBtn = document.querySelector(".btn-rainbow");

let size = 32;
let rainbowFlag = false;

setGrid(size);
drawGrid();

sizeBtn.addEventListener("click", () => {
    size = getSize();
    clearGrid();
    setGrid(size);
    drawGrid();
});


resetBtn.addEventListener("click", () => {
    clearGrid();
    setGrid(size);
    drawGrid();
})

rainbowBtn.addEventListener("click", () => {
    rainbowFlag = !rainbowFlag;
    console.log(rainbowFlag);
    toggleRainbow(rainbowFlag);
})

function boxSize (num) {
    return (100/num) + '%';
}

function setGrid(size) {
    console.log(size);
    for(let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize(size)}`;
        box.style.height = `${boxSize(size)}`;
        container.appendChild(box);
    }
}

function getSize() {
    let numOfBoxes = prompt("Choose a size for your grid: (max. of 100)", "e.g. 16");
    while(!/^[0-9]+$/.test(numOfBoxes)) {
        alert("You did not enter a valid number.");
        numOfBoxes = prompt("Choose a size for your grid: (max. of 100)", "e.g. 16");
    }
    return numOfBoxes;
}

function drawGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((e) => {
        e.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";            
        })
    })
}

function clearGrid() {
    const boxes = document.querySelectorAll(".box").forEach(function(e) {e.remove()});   
}

function toggleRainbow(flag) {
    if(flag === true) {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((e) => {
            e.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = `${color[getRandomColor()]}`;            
            })
        })
    } else {
        drawGrid();
    }
}

function getRandomColor() {
    return Math.floor(Math.random() * color.length);
}