const resultScreen = document.getElementById('result');
const myFormula = document.getElementById('myFormula');
const number_Btn = document.querySelectorAll(".numberBtn")
const dot_Btn = document.getElementById("dot")
const plus_Btn = document.getElementById("plus");
const minus_Btn = document.getElementById("minus");
const multi_Btn = document.getElementById("multi");
const divide_Btn = document.getElementById("divide");
const equal_Btn = document.getElementById("equal");
const del_Btn = document.getElementById("delete");
const equation_Btn = document.querySelectorAll(".equationBtn");

// Add event listener to all numbers
number_Btn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        resultScreen.innerText = Math.round((resultScreen.innerText + e.target.value)*10000000)/10000000
        checkForZero()
        checkForAnswers()
    })
})

const forBtn = document.getElementById("myFormula")

// The algorithm of the project is gonna revolve around these 2 arrays
let formulaArray = [];
let answerArray = [];

// Check so that the first number cannot be more than 1 zero's meaning 00 won't be display only 1 zero will be
const checkForZero = () => {
    let checkArr = resultScreen.innerText.split("")
    if(checkArr[0] == "0" && checkArr[1] == "0"){
       resultScreen.innerText = "0"
    } return
}

// If there is a answer push to the answerArray this will read and display it to the screen
const checkForAnswers = () => {
    if(answerArray[0]){
       answerArray = []
       answerArray.push(resultScreen.innerText)
    } return
}

// Function to add a dot between number, this is also to ensure there is only 1 dot per number
const dotified = () => {
    let checkDotArr = resultScreen.innerText.split("")
    if(checkDotArr.includes(".")){
        return
    } else {
        resultScreen.innerText = resultScreen.innerText + "."
    }
}

dot_Btn.addEventListener("click", dotified)


// Function to reset everything from the start => reset the answerArray and formulaArray (Hard Reset)
const btn_Reset = document.getElementById('reset');
const resetScreen = () => {
    resultScreen.innerText = ""
    myFormula.innerText = ""
    formulaArray = [];
    answerArray = []
};
btn_Reset.addEventListener('click', resetScreen);

// Function to delete one number begining from the last number
const deleteFunction = () => {
    if(answerArray){
        answerArray = []
        let newArr = resultScreen.innerText.split("")
        newArr.pop()
        resultScreen.innerText = newArr.join("")
        // answerArray = []
        answerArray.push(resultScreen.innerText)
    } else {
        let newArr = resultScreen.innerText.split("")
        newArr.pop()
        resultScreen.innerText = newArr.join("")
    }
}
del_Btn.addEventListener("click",deleteFunction);

// Function to divide the number by 100 while also rounding the number to only 7 decimals max
const btn_PercentiFied = document.getElementById('percent');
const percentiFiedScreen = () => {
    if(answerArray){
    answerArray = []
    let newNum = Math.round((resultScreen.innerText/100)*10000000)/10000000
    answerArray.push(newNum)
    }
    resultScreen.innerText = Math.round((resultScreen.innerText/100)*10000000)/10000000
};
btn_PercentiFied.addEventListener('click', percentiFiedScreen);

// Function to add or remove a Negative mark meaning Making a number negative or positive
const btn_MakeNegative = document.getElementById('sign');
const makeNegativeScreen = () => {
    if(answerArray[0]){
        answerArray = []
        let newNum = parseFloat(-(resultScreen.innerText))
        answerArray.push(newNum)
    }
    resultScreen.innerText =  parseFloat(-(resultScreen.innerText))
} 
btn_MakeNegative.addEventListener('click', makeNegativeScreen)


// Function to take the current number to a addition function waiting for a second number to pass in with the equal function
const plusFunction = () =>{
    if(resultScreen.innerText == ""){
        return

    } 
    else if(answerArray[0]){
        resultScreen.innerText = ""
        formulaArray = []
        let getAnswer = answerArray.join("")
        answerArray = []
        formulaArray.push(getAnswer)
        formulaArray.push("+")
    } 
    else  {
        formulaArray.push(resultScreen.innerText)
        formulaArray.push("+")
        resultScreen.innerText = ""
    }
}
plus_Btn.addEventListener("click", plusFunction)

// Function to take the current number to a minus function waiting for a second number to pass in with the equal function
const minusFunction = () =>{
    if(resultScreen.innerText == ""){
        return

    } 
    else if(answerArray[0]){
        resultScreen.innerText = ""
        formulaArray = []
        let getAnswer = answerArray.join("")
        answerArray = []
        formulaArray.push(getAnswer)
        formulaArray.push("-")
    } 
    else  {
        formulaArray.push(resultScreen.innerText)
        formulaArray.push("-")
        resultScreen.innerText = ""
    }
}
minus_Btn.addEventListener("click", minusFunction)

// Function to take the current number to a Multi function waiting for a second number to pass in with the equal function
const multiFunction = () =>{
    if(resultScreen.innerText == ""){
        return

    } 
    else if(answerArray[0]){
        resultScreen.innerText = ""
        formulaArray = []
        let getAnswer = answerArray.join("")
        answerArray = []
        formulaArray.push(getAnswer)
        formulaArray.push("*")
    } 
    else  {
        formulaArray.push(resultScreen.innerText)
        formulaArray.push("*")
        resultScreen.innerText = ""
    }
}
multi_Btn.addEventListener("click", multiFunction)

// Function to take the current number to a Dividing function waiting for a second number to pass in with the equal function
const divideFunction = () =>{
    if(resultScreen.innerText == ""){
        return

    } 
    else if(answerArray[0]){
        resultScreen.innerText = ""
        formulaArray = []
        let getAnswer = answerArray.join("")
        answerArray = []
        formulaArray.push(getAnswer)
        formulaArray.push("/")
    } 
    else  {
        formulaArray.push(resultScreen.innerText)
        formulaArray.push("/")
        resultScreen.innerText = ""
    }
}
divide_Btn.addEventListener("click", divideFunction)

// The Equal function is meant to finish all the above function
const equalFunction = () =>{
    if(formulaArray[1] == "+"){
        if(resultScreen.innerText == ""){
            return
        } else {
            formulaArray.push(resultScreen.innerText)
            let answer = parseFloat(formulaArray[0]) + parseFloat(formulaArray[2])     
            resultScreen.innerText = Math.round(answer*10000000)/10000000
            formulaArray = []
            answerArray.push(answer)
            forBtn.innerText = ""
        }
    }
    else if(formulaArray[1] == "-"){
        if(resultScreen.innerText == ""){
            return
        } else {
            formulaArray.push(resultScreen.innerText)
            let answer = parseFloat(formulaArray[0]) - parseFloat(formulaArray[2])
            resultScreen.innerText = Math.round(answer*10000000)/10000000
            formulaArray = []
            answerArray.push(answer)
            forBtn.innerText = ""
        }
    }
    else if(formulaArray[1] == "*"){
        if(resultScreen.innerText == ""){
            return
        } else {
            formulaArray.push(resultScreen.innerText)
            let answer = parseFloat(formulaArray[0]) * parseFloat(formulaArray[2])     
            resultScreen.innerText = Math.round(answer*10000000)/10000000
            formulaArray = []
            answerArray.push(answer)
            forBtn.innerText = ""
        }
    }
    else if(formulaArray[1] == "/"){
        if(resultScreen.innerText == ""){
            return
        } else {
            formulaArray.push(resultScreen.innerText)
            let answer = parseFloat(formulaArray[0]) / parseFloat(formulaArray[2])     
            resultScreen.innerText = Math.round(answer*10000000)/10000000
            formulaArray = []
            answerArray.push(answer)
            forBtn.innerText = ""
        }
    }
}
equal_Btn.addEventListener("click", equalFunction)

// Function to read the current formula (+, -, *, /) and display it to the screen
// I put it in the bottom because the I want to simplify thing by reading the formulaArray[0] which will return the equation mark
// and the equation mark only return after the equalFunction() is called
equation_Btn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if(formulaArray[1] == null){
            return
        } 
        else if (formulaArray[1] == "*"){
            forBtn.innerText = `${Math.round(formulaArray[0]*10000000)/10000000} *`
        }
        else if (formulaArray[1] == "+"){
            forBtn.innerText =  `${Math.round(formulaArray[0]*10000000)/10000000} +`
        }
        else if (formulaArray[1] == "-"){
            forBtn.innerText =  `${Math.round(formulaArray[0]*10000000)/10000000} -`
        }
        else if (formulaArray[1] == "/"){
            forBtn.innerText = `${Math.round(formulaArray[0]*10000000)/10000000} /`
        }
    })
})
