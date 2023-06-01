const hideRulesBtn=  document.getElementById("toggleRulesBtn");
const rulesToHide = document.getElementsByClassName("hidden");

hideRulesBtn.addEventListener("click", () => {
  if(rulesToHide[0].classList.value == "hidden"){
    rulesToHide[0].classList.add == "rules"
    console.log(rulesToHide[0])
  } else {console.log('no')}
})