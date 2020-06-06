var numero = 100;

for(i=0; i<= numero; i++){
  if (divisible(i,3) && divisible(i,5)){
    document.write(i + "FizzBuzz <br / >");
  } else if (divisible(i,3)){
    document.write(i + "Fizz  <br / >");
  } else if (divisible(i,5)){
    document.write(i + "Buzz  <br / >");
  } else{
    document.write(i + " <br / >");
  }
}


function divisible(num, divisor){
  if (num % divisor == 0){
    return true;
  }else{
    return false;
  }
}
