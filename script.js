const submit= document.querySelector("#submit")
const main= document.querySelector("#firstContainer")
const secondContainer=document.querySelector(".secondContainer")
const func=()=>{
    main.classList.add("hidden")
    secondContainer.classList.toggle("hidden")
    console.log(7)
}
submit.addEventListener("click",func)