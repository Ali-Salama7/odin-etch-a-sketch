const board = document.querySelector(".board")
const btnSize = document.querySelector(".button-size")
const clearBtn = document.querySelector(".button-clear")


const createDivs = (size) => {
    board.innerHTML = ""

    const totalSquares = size * size
    const squareSize = 100 / size

    for (let i = 0; i < totalSquares; i++) {
        const divs = document.createElement("div")
        divs.classList.add('squares')

        divs.style.width = `${squareSize}%`
        divs.style.height = `${squareSize}%`

        board.appendChild(divs)
        
        divs.addEventListener("mouseover", () => {
            divs.style.backgroundColor = "#333"
        })
    }
}

const buttonSize = () => {
    let input = prompt("Enter size of board (Max: 100): ")
    
    if(input === null) return

    let size = parseInt(input)

    if(isNaN(size) || size <= 0 || size > 100){
        returalert("Please enter a valid number between 1 and 100!");
        return;
    }

    createDivs(size)
}

const buttonClear = () => {
    const squares = document.querySelectorAll(".squares")
    squares.forEach(square => {
        square.style.backgroundColor = "#eee"
    })
}

btnSize.addEventListener("click", buttonSize)
clearBtn.addEventListener("click", buttonClear)