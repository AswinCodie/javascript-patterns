let k=0;
let space="  ";
let star="* ";
for(let i=1;i<=5;i++){
    i<=3?k++:k--;
    for(var j=1;j<=5;j++){
        
        if(j==k || j==6-k ){
            // process.stdout.write((2*i-1).space);
            process.stdout.write(star);
        }
        else{
            process.stdout.write("  ");
        }
        
    }
   
    console.log("");
}