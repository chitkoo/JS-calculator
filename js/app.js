let display = document.querySelector(".display");
let keypad = document.querySelector(".keypad");
let operators = ["+","-","*","/","%"];
let point = ".";

const filter = x => {
    const current = display.innerText;
    const lastWord = current[current.length-1];
    if(current === "0" && x != "."){ // x ka htet yite htae tae kg
        clearLast();
    }

    //operator 2 khr loat lo ma ya ag 
    if(operators.includes(x) && operators.includes(lastWord)){
        return false;
    }
    return true;
}

const showInDisplay = x => {
    if(filter(x)){
        display.innerText += x;
    }
};

const calcFilter = x => {
    const lastChar = display.innerText[display.innerText.length-1];
    if(operators.includes(lastChar)){
        return false;
    }else return true;
}


const calc = x => {
    if(calcFilter(x)){
        if(point.includes(x)){
            display.innerText = eval(display.innerText).toFixed(3);
        }else{
            display.innerText = eval(display.innerText);
        }
        // display.innerText = eval(display.innerText).toFixed(3);//3points
    }


    // const lastChar = display.innerText[display.innerText.length-1];
    // if(operators.includes(lastChar)){
    //     return false;
    // }else{
    //     display.innerText = eval(display.innerText);
    // };   

    
}

const clearAll = _ => display.innerText = "";

const clearLast = _ => display.innerText = display.innerText.substring(0,display.innerText.length-1);

keypad.addEventListener('click', _ => {
    if(display.innerText.length>10){
        display.style.fontSize = 30+"px";
    }else if(display.innerText.length>5){
        display.style.fontSize = 60+"px";
    }   
})
