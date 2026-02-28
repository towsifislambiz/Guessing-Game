let headingOne=document.querySelector(".headingOne")
let inputOne=document.querySelector(".inputOne")
let buttonOne=document.querySelector(".buttonOne")
let errorOne=document.querySelector(".errorOne")
let playerOne=document.querySelector(".playerOne")


// playertwo

let playerTwo=document.querySelector(".playerTwo")
let headingTwo=document.querySelector(".headingTwo")
let inputTwo=document.querySelector(".inputTwo")
let buttonTwo=document.querySelector(".buttonTwo")
let errorTwo=document.querySelector(".errorTwo")
let chance=document.querySelector(".chance")
let eye=document.querySelector(".eye")
let count=3

buttonOne.addEventListener("click", () => {

    let value = Number(inputOne.value);

    if (inputOne.value === "") {
        errorOne.innerHTML = "Please Enter Something";
        
    } else if (isNaN(value)) {
        errorOne.innerHTML = "Please Enter a Valid Number";
        
    } else if (!(inputOne.value>0 && inputOne.value<=10)) {
        errorOne.innerHTML = "Please enter a number between 1 and 10";
        
    } else {
        playerOne.style.display = "none";
        playerTwo.style.display = "block";
        chance.innerHTML=   `Chance : ${count}`


  }

});

buttonTwo.addEventListener("click",()=>{
       let value2 = Number(inputTwo.value);
    if(!inputTwo.value){
        errorTwo.innerHTML="Please Enter a Something"
    }else if(isNaN(value2)){
        errorTwo.innerHTML="Please Enter a Valid Number"
    }else if(!(inputTwo.value>0 && inputTwo.value<=10)){
        errorTwo.innerHTML="Please enter a number between 1 and 10"
    }else{


   

        if(count>1){
  count--;
          chance.innerHTML=   `Chance : ${count}`

        if(inputOne.value == inputTwo.value){
            headingTwo.innerHTML="Player Two is Winner"
            buttonTwo.style.display="none"
         }
         
        }else{
            count=0
                chance.innerHTML=   `Chance : ${count}`
            headingTwo.innerHTML="Player one is Winner"
            buttonTwo.style.display="none"
        }


    }
       

    
})

eye.addEventListener("click",()=>{
    if(inputOne.type === "password"){
        inputOne.type ="text";
    }else{
       if(inputOne.type ==="text"){
        inputOne.type ="password"
       }

    }
})
