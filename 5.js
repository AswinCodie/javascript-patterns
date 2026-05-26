let i, j;

for(i=1;i<=5;i++){

    for(j=1;j<=5;j++){

        if(j==1 || j==5 || i==1 || i==5){

                process.stdout.write("* ");
                
        }
        else{
                    process.stdout.write("  ");}
    }
     console.log("");
    

}