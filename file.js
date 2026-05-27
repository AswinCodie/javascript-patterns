 let x=Number(prompt("Enter First Number: "));
        let y=Number(prompt("Enter Second Number: "));
        var choice=Number(prompt("1.Div 2.Mul 3.add 4.sub "));
        var result;
        switch(choice){
            case 1: result=x/y;
                    break;
            case 2: result=x*y;
                    break;
            case 3: result=x+y;
                    break;
            case 4: result=x-y;
                    break;
            
        }
        alert(result);