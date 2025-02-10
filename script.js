const countButton = document.querySelector('#counter')
const resetButton = document.querySelector('#reset')

let count = 0

countButton.addEventListener("click", () => {
    count += 1
    if (count < 2) {
        countButton.innerText = `${count} clic !`
    } else {
        countButton.innerText = `${count} clics !`
    }
})

resetButton.addEventListener("click", () => {
    count = 0
    countButton.innerText = `${count} clic !`
})