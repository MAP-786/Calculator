//We need to seperate the values before decimal and after decimal and solve the seperately. We need to use an if condition for numbers with decimal and numbers without.  
function add()
{
    let symbolposition = display1.indexOf("+");
    let a = parseInt(display1.slice(0, symbolposition));
    let b = parseInt(display1.slice(symbolposition+1));
    console.log(a);
    console.log(b);
   
    return a + b;    
}

function subtract()
{
    let symbolposition = display1.indexOf("-");
    let a = parseInt(display1.slice(0, symbolposition));
    let b = parseInt(display1.slice(symbolposition+1));
    return a - b;
}

function multiply ()
{
    let symbolposition = display1.indexOf("*");
    let a = parseInt(display1.slice(0, symbolposition));
    let b = parseInt(display1.slice(symbolposition+1));
    return a * b;
}

function divide ()
{
    let symbolposition = display1.indexOf("/");
    let a = parseInt(display1.slice(0, symbolposition));
    let b = parseInt(display1.slice(symbolposition+1));
    return a / b;
}




function solve()
{
    if (display1.includes("+") === true)
    {
        display2 = add();
        document.getElementById("dtop").innerHTML =  display2.toString();
    }
    if (display1.includes("-") === true)
    {
        display2 = subtract();
        document.getElementById("dtop").innerHTML =  display2.toString();
    }
    if (display1.includes("*") === true)
    {
        display2 = multiply();
        document.getElementById("dtop").innerHTML =  display2.toString();
    }
    if (display1.includes("/") === true)
    {
        display2 = divide();
        document.getElementById("dtop").innerHTML =  display2.toString();
    }
}


let number1 = 0;
let number2 =0;
let display3 = "0"
let display2 ="";
let display1= "";
let operation = "nothing"
let operationsymbol = ""
let equalagain = false;
let clearagain = false;
document.getElementById("dtop").innerHTML = display3;


const decimal = document.querySelector('#decimal')
decimal.addEventListener('click', () => 
{

    display2 += "."
    document.getElementById("dtop").innerHTML = display2;
})



const zero = document.querySelector('#zero')
zero.addEventListener('click', () => 
{
    //zero.style.backgroundColor = "red";
    number1 = 0
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const one = document.querySelector('#one')
one.addEventListener('click', () => 
{
    
    number1 = 1
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const two = document.querySelector('#two')
two.addEventListener('click', () => 
{
 
    number1 = 2
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const three = document.querySelector('#three')
three.addEventListener('click', () => 
{
  
    number1 = 3
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const four = document.querySelector('#four')
four.addEventListener('click', () => 
{
    
    number1 = 4
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const five = document.querySelector('#five')
five.addEventListener('click', () => 
{
    
    number1 = 5
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const six = document.querySelector('#six')
six.addEventListener('click', () => 
{
    
    number1 = 6
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const seven = document.querySelector('#seven')
seven.addEventListener('click', () => 
{
    
    number1 = 7
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const eight = document.querySelector('#eight')
eight.addEventListener('click', () => 
{
    
    number1 = 8
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})

const nine = document.querySelector('#nine')
nine.addEventListener('click', () => 
{
    
    number1 = 9
    display2 = display2.concat(number1.toString());
    document.getElementById("dtop").innerHTML = display2;
})



const addition = document.querySelector('#addition')
addition.addEventListener('click', () => 
{
   
    operationsymbol = "+";
    display1 = display2;
    display1 +=operationsymbol;
    display2= "";
    document.getElementById("dbottom").innerHTML = display1;
    equalagain = true;
})


const subtraction = document.querySelector('#subtraction')
subtraction.addEventListener('click', () => 
{
    
    operationsymbol = "-";
    display1 = display2;
    display1 +=operationsymbol;
    display2= "";
    document.getElementById("dbottom").innerHTML = display1;
    equalagain = true;
})

const multiplication = document.querySelector('#multiplication')
multiplication.addEventListener('click', () => 
{
   
    operationsymbol = "*";
    display1 = display2;
    display1 += operationsymbol;
    display2= "";
    document.getElementById("dbottom").innerHTML = display1;
    equalagain = true;
})

const division = document.querySelector('#division')
division.addEventListener('click', () => 
{
    
    operationsymbol = "/";
    display1 = display2;
    display1 += operationsymbol;
    display2= "";
    document.getElementById("dbottom").innerHTML = display1;
    equalagain = true;
})


const equals = document.querySelector('#equals')
equals.addEventListener('click', () => 
{
    if (equalagain === true)
    {
        
        display1 += display2;
        document.getElementById("dbottom").innerHTML = display1;
        solve()
        equalagain = false;
    }
   
})


const clear = document.querySelector('#clear')
clear.addEventListener('click', () => 
{
    
    display1 = ""
    display2 = "";
    display3 = "0";
    document.getElementById("dbottom").innerHTML = display1;
    document.getElementById("dtop").innerHTML = display3;
})


const backspace = document.querySelector('#backspace')
backspace.addEventListener('click', () => 
{
    
    
    display2 = display2.slice(0,display2.length-1);
    document.getElementById("dtop").innerHTML = display2;
})






//Some of the features are still missing. Here is a list of things you need to fix:
//Decimal Calculations
//The calculator should not crash when you divide by zero
//Get the buttons to enlarge/change colour for a few seconds when pressed
