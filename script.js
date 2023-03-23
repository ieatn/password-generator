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
    password.textContent = getLower()
}
generate.addEventListener('click', () => getPassword())