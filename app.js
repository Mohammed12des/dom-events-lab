/*-------------------------------- Constants --------------------------------*/
const BtnNum = document.querySelectorAll(".button.number");
const BtnOprater = document.querySelectorAll(".button.operator");
const BtnEquals = document.querySelector(".button.equals");
const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/




/*----------------------------- Event Listeners -----------------------------*/
BtnNum.forEach(BtnNum=>
    {BtnNum.addEventListener('click' , calculator)}
);
BtnOprater.forEach(BtnOprater=>
{BtnOprater.addEventListener('click' , calculator)});
BtnEquals.addEventListener('click' , calculator);
/*-------------------------------- Functions --------------------------------*/
function calculator(event){
    
    console.log(event.target);
    const buttonText = event.target.innerText;

  
    if (buttonText === "="){
        
            const result = eval(display.textContent);
            display.textContent = result;

    }else if (buttonText==="C"){
        display.textContent= "";
    }else{
        console.log(buttonText);
        display.textContent += buttonText;
    }
}
