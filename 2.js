let k=0;
for(let i=1;i<=9;i++){
    i<5?k++:k--
    for(let j=1;j<=5;j++){
       
       if(j<=k){
        process.stdout.write("*");
       }
       else{
            process.stdout.write(" ");
       }
    }
    console.log("");
    

}
