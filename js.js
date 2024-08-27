
function calc(){
    let number1 = +prompt("Enter your first number");
    let number2 = +prompt("Enter your second number");
    let operation = prompt("what operation do you want (+,-,*,/)")
    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            console.log(result);
            break;
        case '-':
            result = number1 - number2;
            console.log(result);
            break;
        case '*':
            result = number1 * number2;
            console.log(result);
            break;
        case '/':
            result = number1 / number2;
            console.log(result);
            break;
        default:
            console.log("wrong Operation");  
    }  
    alert(result);
    
    function repeat(){
        let isture= confirm("Do you want to oprate on the output?");
        if(isture==1 && result !=undefined){
            let newNumber = +prompt("Enter the new number");
            let newOperation = prompt("what operation do you want (+,-,*,/)")
            switch (newOperation) {
                case '+':
                    result += newNumber;
                    console.log(result);
                    break;
                case '-':
                    result -= newNumber;
                    console.log(result);
                    break;
                case '*':
                    result *= newNumber;
                    console.log(result);
                    break;
                case '/':
                    result /= newNumber;
                    console.log(result);
                    break;
                default:
                    console.log("wrong op");  
            }
            
        alert(result);
        repeat()
        }
        else{
            result = 0;
            // calc();
        }
    }
    repeat();
}


