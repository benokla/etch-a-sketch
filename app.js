const container = document.querySelector(".container");

// init
createGrid(4)

const eachBox = document.querySelectorAll(".eachBox");
eachBox.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "blue";
    })
})

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", clearGrid)

function clearGrid() {
    eachBox.forEach((box) => {
        box.style.backgroundColor = "white";
    })
}

const newGridNumberInput = document.querySelector("#newGridNumberInput");
const setNewGridNumberBtn = document.querySelector("#setNewGridNumberBtn");

setNewGridNumberBtn.addEventListener("click", () => {
    removeGrid()
    createGrid(newGridNumberInput.value)
})

function createGrid(num) {

    console.log("a")


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
}

function removeGrid() {
    eachBox.forEach((box) => {
        container.removeChild(box)
    })
}