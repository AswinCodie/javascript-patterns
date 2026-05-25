let k=0;
let space=" ";
let star="*";
for(let i=1;i<=9;i++){
    i<=5?k++:k--
    for(var j=1;j<=10;j++){
        
        if(j<=k || j>10-k ){
            // process.stdout.write((2*i-1).space);
            process.stdout.write(star);
        }
        else{
            process.stdout.write(" ");
        }
        

        
    }
   
    console.log("");
}