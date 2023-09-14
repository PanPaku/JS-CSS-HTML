const conventer = document.querySelector('#converter')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')

let fahrenheit
let celsius

// T(℉) = T(℃) * 1.8 + 32
// T(℃) = (T(℉) -32) / 1.8

console.log(one)
console.log(two)

const swap = () => {
    if(one.textContent === '℃') {
        one.textContent = '℉'
        two.textContent = '℃'
        result.textContent = ''
    } else {
        one.textContent = '℃'
        two.textContent = '℉'
        result.textContent = ''
    }
}



const fahrnToCel = () => {
    fahrenheit = conventer.value * 1.8 + 32
    result.textContent = `${conventer.value} ℃ to ${fahrenheit.toFixed(1)}℉`
    conventer.value = ''
}

const celToFar = () => {
    celsius = (conventer.value -32) / 1.8
    result.textContent = `${conventer.value} ℉ to ${celsius.toFixed(1)}℃`
    conventer.value = ''
}

const conversion = () => {
    if(conventer.value !== ''){

       if(one.textContent === '℃'){
            fahrnToCel()
       } else{
            celToFar()
       }

    } else{
        result.textContent = 'Musisz podać jakąś wartość'
    }
}

const reset = () => {
    conventer.value = ''
    result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)