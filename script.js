const  mainTitle  = document.querySelector('#title');
const  btnreset = document.querySelector('#reset');
const  btndecrease = document.querySelector('#decrease')
const  btnIncrease = document.querySelector('#Increase');

let curValue = 10;
btnIncrease.addEventListener('click',() =>{
    curValue++;
    mainTitle.textContent = curValue;
})
btnreset.addEventListener('click',() =>{
    curValue=0;
    mainTitle.textContent = curValue;
})
btndecrease.addEventListener('click',() =>{
    curValue--;
    mainTitle.textContent = curValue;
})