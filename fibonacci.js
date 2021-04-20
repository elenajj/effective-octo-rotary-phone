input = '8';
firstInt = 0;
secInt = 1;
nextInt = 1;
const fibonacci = function() {
intInput = parseInt(input);

    if(intInput < 0){
        return "OOPS";
    }
    else{
        for(let i = 2; i <= intInput; i++){
            nextInt = firstInt + secInt;
            firstInt = secInt;
            secInt = nextInt;
          
        }
        return nextInt;
    }
}




module.exports = fibonacci
