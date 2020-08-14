const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomNumberCustom = random(10, 100)

const textCustom = document.createTextNode(randomNumberCustom)

document
    .querySelector('.random-number--custom')
    .appendChild(textCustom)