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
let arr=0
const check=(click)=>{
    if(click.target.classList.contains("first")){
        dom.innerText="You selected 1 out of 5"
        arr+=1
    }else if(click.target.classList.contains("second")){
        dom.innerText="You selected 2 out of 5"
        arr+=1
    }else if(click.target.classList.contains("third")){
        dom.innerText="You selected 3 out of 5"
        arr+=1
    }else if(click.target.classList.contains("fourth")){
        dom.innerText="You selected 4 out of 5"
        arr+=1
    }else if(click.target.classList.contains("fifth")){
        dom.innerText="You selected 5 out of 5"
        arr+=1
    }else if(arr===0){
        secondContainer.classList.add("hidden")
    }
}
Array.from(digits).forEach(element=>element.addEventListener("click",check))