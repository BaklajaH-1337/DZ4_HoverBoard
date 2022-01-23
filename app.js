const board = document.querySelector('#board')
const colors = ['#d32a2f', '#f2602c', '#f4c538', '#3cac64', '#5aacec', '#308ad7', '#8f418a']
const SQUARES_NUMBER = 864

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 30px ${color}`
}

function removeColor(element) {
    element.style.background = '#383c45'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}