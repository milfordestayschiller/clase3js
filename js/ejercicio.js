var FizzBuzz = 0;
var FizzBuzzFinal = 100;

while (FizzBuzzFinal>FizzBuzz) {
    FizzBuzz ++;
   
 if(( FizzBuzz % 3 ) == 0){
    
 console.log("Fizz");

 }
 if(( FizzBuzz % 5 ) == 0){
    
    console.log("Buzz");
   
    }
    if(( FizzBuzz % 3 ) == 0 && ( FizzBuzz % 5 ) == 0 ){
    
        console.log("FizzBuzz");
       
        }

 console.log(FizzBuzz)
}