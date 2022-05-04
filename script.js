const submit= document.querySelector("#submit")
const main= document.querySelector("#firstContainer")
const secondContainer=document.querySelector(".secondContainer")
const digits=document.querySelectorAll(".digit")
const firstDigit=document.querySelector("#firstDigit")
const secondDigit=document.querySelector("#secondDigit")
const thirdDigit=document.querySelector("#thirdDigit")
const fourthDigit=document.querySelector("#fourthDigit")
const fifthDigit=document.querySelector("#fifthDigit")
const dom=document.querySelector('#dom')
const func=()=>{
    main.classList.add("hidden")
    secondContainer.classList.toggle("hidden")
}
submit.addEventListener("click",func)
const firstCheck=()=>{
    dom.innerText=`You selected ${digits[0].innerText} out of 5`
}
firstDigit.addEventListener("click",firstCheck)
const secondCheck=()=>{
    dom.innerText=`You selected ${digits[1].innerText} out of 5`
}
secondDigit.addEventListener("click",secondCheck)
const thirdCheck=()=>{
    dom.innerText=`You selected ${digits[2].innerText} out of 5`
}
thirdDigit.addEventListener("click",thirdCheck)
const fourthCheck=()=>{
    dom.innerText=`You selected ${digits[3].innerText} out of 5`
}
fourthDigit.addEventListener("click",fourthCheck)
const fifthCheck=()=>{
    dom.innerText=`You selected ${digits[4].innerText} out of 5`
}
fifthDigit.addEventListener("click",fifthCheck)