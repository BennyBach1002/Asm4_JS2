const resultScreen = document.getElementById('result');
const myFormula = document.getElementById('myFormula');
const number_Btn = document.querySelectorAll(".numberBtn")
const dot_Btn = document.getElementById("dot")
const equation_Btn = document.querySelectorAll(".equationBtn");
const plus_Btn = document.getElementById("plus");
const minus_Btn = document.getElementById("minus");
const multi_Btn = document.getElementById("multi");
const divide_Btn = document.getElementById("divide");
const equal_Btn = document.getElementById("equal");


number_Btn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        resultScreen.innerText = resultScreen.innerText + e.target.value
        checkForZero()
    })
})


// equation_Btn.forEach(btn => {
//     btn.addEventListener('click', (e,a,b) =>{
        
//         console.log(e.target.value)
//     })
// })


const checkForZero = () => {
    let checkArr = resultScreen.innerText.split("")
    if(checkArr[0] == "0" && checkArr[1] == "0"){
       resultScreen.innerText = "0"
    } return
}

const dotified = () => {
    let checkDotArr = resultScreen.innerText.split("")
    if(checkDotArr.includes(".")){
        return
    } else 
    resultScreen.innerText = resultScreen.innerText + "."
}

dot_Btn.addEventListener("click", dotified)



const btn_Reset = document.getElementById('reset');
const resetScreen = () => {
    myFormula.innerText = ""
    resultScreen.innerText = ""
    formulaArray = [];
};
btn_Reset.addEventListener('click', resetScreen);

const btn_PercentiFied = document.getElementById('percent');
const percentiFiedScreen = () => {
    resultScreen.innerText = Math.round((resultScreen.innerText/100)*100000)/100000
};
btn_PercentiFied.addEventListener('click', percentiFiedScreen);


const btn_MakeNegative = document.getElementById('sign');
const makeNegativeScreen = () => {
    resultScreen.innerText =  -(resultScreen.innerText)
    console.log(resultScreen.innerText) 
} 
btn_MakeNegative.addEventListener('click', makeNegativeScreen)



// let no1 = formulaArray[0]
// let sign = "-"
// let no2 = formulaArray[1]

// if (no1 != undefined){
//     myFormula.innerText = `${no1} ${sign} ${no2}`
// } else {
//     return
// }

let formulaArray = [];

const plusFunction = () =>{
    if(formulaArray.length == 0){
        formulaArray.push(resultScreen.innerText)
        formulaArray.push("+")
        resultScreen.innerText = ""
        myFormula.innerText = `${formulaArray[0]} ${formulaArray[1]}`
        console.log(formulaArray);
    } else if( formulaArray.length > 1){
        answer = parseFloat(formulaArray[0]) + parseFloat(resultScreen.innerText)
        formulaArray = [];
        formulaArray.push(answer);
        formulaArray.push("+")
        console.log(formulaArray);
        resultScreen.innerText = '  '
        myFormula.innerText = `${formulaArray[0]} ${formulaArray[1]}`
        
    } else {
    return}
}
plus_Btn.addEventListener("click", plusFunction)


const equalFunction = () =>{
    if(formulaArray[1] == "+"){

        formulaArray.push(resultScreen.innerText)

        myFormula.innerText = `${formulaArray[0]} ${formulaArray[1]} ${formulaArray[2]}`

   
        console.log(formulaArray)

        answer = parseFloat(formulaArray[0]) + parseFloat(formulaArray[2])

        resultScreen.innerText = answer

        console.log((answer))

        // formulaArray = [];

        formulaArray[0] = (answer);

        formulaArray.push(" +")

        console.log(formulaArray)


    }
}
equal_Btn.addEventListener("click", equalFunction)