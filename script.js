const wrapper = document.getElementsByClassName('buttons_Container');
const resultScreen = document.getElementById('result');
const myFormula = document.getElementById('myFormula');
const number_Btn = document.querySelectorAll(".numberBtn")
const equation_Btn = document.querySelectorAll(".equationBtn");

number_Btn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        resultScreen.innerText = resultScreen.innerText + e.target.value
        // console.log(resultScreen.innerText)
    })
})


let formulaArray = [];


equation_Btn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        resultScreen.innerText =  e.target.value
        console.log(formulaArray)
    })
})



const btn_Reset = document.getElementById('reset');
const resetScreen = () => {
    resultScreen.innerHTML = ""
    formulaArray = [];
};
btn_Reset.addEventListener('click', resetScreen);

const btn_PercentiFied = document.getElementById('percent');
const percentiFiedScreen = () => {
    resultScreen.innerText = resultScreen.innerText/100
};
btn_PercentiFied.addEventListener('click', percentiFiedScreen);


const btn_MakeNegative = document.getElementById('sign');
const makeNegativeScreen = () => {
    resultScreen.innerHTML =  -(resultScreen.innerText)
    console.log(resultScreen.innerHTML) 
} 
btn_MakeNegative.addEventListener('click', makeNegativeScreen)

