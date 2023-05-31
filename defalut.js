//1. 비교 연산자

var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

//일반 크기 비교
console.log(num1 > num2) // return true
console.log(num1 < num2) // return false
console.log(num1 == num4) // return true
console.log(num1 != num4)  // return false
console.log(num2 === num3) //return  false -> 자료형이 다름
console.log(num2 ==num3) // true
console.log((num1 > num2) && (num1 < num5)) // true && false -> false
console.log((num1 > num2) || (num1 < num5))  // true || false -> true
console.log( !(num1 > num5)) // !true -> false

//2. if else
if (num1 > num2){
    console.log("큰 수 num1")
}else if (num1 < num2){
    console.log("큰 수 num2")
}else {
    console.log("같은수")

}