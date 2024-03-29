const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let size = 36


const sizeU = () => {
    if(size >= 35) {
        return
    }
    size += 5
    p.style.fontSize = size + 'px'
}

const sizeD = () => {
    if(size <= 21) {
        return
    }
    size -= 5
    p.style.fontSize = size + 'px'
}



const colorChanger = () => {
    
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    

    p.style.color = `rgb(${r},${g},${b})`
}

sizeUp.addEventListener('click', sizeU)
sizeDown.addEventListener('click', sizeD)
colorBtn.addEventListener('click', colorChanger)