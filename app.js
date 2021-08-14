const container = document.querySelector(".container");

const newGridNumberInput = document.querySelector("#newGridNumberInput");
const setNewGridNumberBtn = document.querySelector("#setNewGridNumberBtn");

const clearBtn = document.querySelector("#clearBtn");
const blueBtn = document.querySelector("#blueBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const fadeBtn = document.querySelector("#fadeBtn");

// init
createGrid(16);


clearBtn.addEventListener("click", clearGrid);
blueBtn.addEventListener("click", () => {
    color("blue")
})
rainbowBtn.addEventListener("click", () => {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
            console.log(e.target.style.backgroundColor)
        })
    })
})
fadeBtn.addEventListener("click", () => {
    let randomR = getRandomInt(255);
    let randomG = getRandomInt(255);
    let randomB = getRandomInt(255);
    let startOpacity = 1;
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgba(${randomR},${randomG},${randomB},${startOpacity})`;
            startOpacity = startOpacity - 0.01;
        })
    })
})

function clearGrid() {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.style.backgroundColor = "white";
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

setNewGridNumberBtn.addEventListener("click", () => {
    removeGrid()
    createGrid(newGridNumberInput.value)
})

function createGrid(num) {
    let containerSize = 

    if(num > 50) {
        alert("Number must be below 50")
        createGrid(16);
        return
    }
    for (let i = 0; i < num*num; i++) {
        const box = document.createElement("div");
        box.classList.add("eachBox");
        box.style.height = `${400/num}px`
        box.style.width = `${400/num}px`
        container.appendChild(box)
    }
    color("DarkSlateGray");
}

function removeGrid() {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        container.removeChild(box)
    })
}

function color(color) {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `${color}`;
        })
    })
}