let k=0;
 for(let i=1;i<=9;i++){
    i<=5?k++:k--;
    for(j=1;j<=9;j++){
        if(j>=6-k && j<=4+k){
             process.stdout.write("*");
        }
        else{
             process.stdout.write(" ");
        }
       
    }
    
    console.log("");
 }