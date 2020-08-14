import random from '../node_modules/lodash-es/random.js'

const randomNumberLodash = random(10, 100)

const textLodash = document.createTextNode(randomNumberLodash)

document
    .querySelector('.random-number--lodash')
    .appendChild(textLodash)