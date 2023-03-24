const password = document.getElementById('password')  
const copy = document.getElementById('copy')
const length = document.getElementById('length')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbersLetters = '0123456789'
const symbolsLetters = '!@#$%^&*()_+-='

const getUpper = () => {
    return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}
const getLower = () => {
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]
}
const getNumbers = () => {
    return numbersLetters[Math.floor(Math.random()*numbersLetters.length)]
}
const getSymbols = () => {
    return symbolsLetters[Math.floor(Math.random()*symbolsLetters.length)]
}
const getPassword = () => {
    const len = length.value
    let s = ''
    for (let i = 0; i < len; i++) {
        const x = generateX()
        // randomly generate 4 different chars, but only add 1 letter?
        s += x
    }
    password.textContent = s
}
const generateX = () => {
    const arr = []
    // for each letter in string, add 4 random chars into array
    if (upper.checked) { arr.push(getUpper()) }
    if (lower.checked) { arr.push(getLower()) }
    if (numbers.checked) { arr.push(getNumbers()) }
    if (symbols.checked) { arr.push(getSymbols()) }
    console.log(arr)
    // randomize the order of array but only return 1 letter?
    return arr[Math.floor(Math.random()*arr.length)]
}
// const check = () => {
//     const arr = []
//     switch (true) {
//         case upper.checked:
//             arr.push(getUpper())
//         case lower.checked:
//             arr.push(getLower())
//         case numbers.checked:
//             arr.push(getNumbers())
//         case symbols.checked:
//             arr.push(getSymbols())
//         default:
//             break
//     }
//     return arr

// }
generate.addEventListener('click', () => getPassword())