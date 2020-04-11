
function largestNumber(){
     let num1 = Number(document.getElementById('num1').value);
     let num2 = Number(document.getElementById('num2').value);
     
        if (num1>num2){
            document.write("The largest number is : " + num1);
        }
               
        else if (num1===num2){
            document.write( num1 +"and"+num2 +"are the same");
        }
                    
        else{
            document.write(num2 +" is the largest");
        }
                   
    }


