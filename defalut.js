//4. switch문
var digit = parseInt(prompt("숫자 입력:"));
switch(digit){
    case 0:
        document.write("Zero");
        break;
   case 1:
        document.write("One");

    case 2:
        document.write("Two");
        break;

// Or 조건으로 사용됨
    case 3:
    case 4:
        document.write("Three or Four");
        break;

   default:
        document.write("Else");
        break;

}

    // case 1 일때 break 없음
    // -> 0 입력 시 zero 만 출력
   // -> 1 입력시 OneTwo 출력 (2출력 후 break)
   // -> 2 입력시 Two 출력



////3. 자음, 모음 구분
//
//var letter = prompt("Enter a letter:");
//letter =  letter.toLowerCase();
//if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
// console.log('Vowel');
//} else {
//    console.log('Consonant');
//}
//
////1. 비교 연산자
//
//var num1 = 20;
//var num2 = 10;
//var num3 = "10";
//var num4 = 20;분
//var num5 = 15;
//
////일반 크기 비교
//console.log(num1 > num2) // return true
//console.log(num1 < num2) // return false
//console.log(num1 == num4) // return true
//console.log(num1 != num4)  // return false
//console.log(num2 === num3) //return  false -> 자료형이 다름
//console.log(num2 ==num3) // true
//console.log((num1 > num2) && (num1 < num5)) // true && false -> false
//console.log((num1 > num2) || (num1 < num5))  // true || false -> true
//console.log( !(num1 > num5)) // !true -> false
//
////2. if else
//if (num1 > num2){
//    console.log("큰 수 num1")
//}else if (num1 < num2){
//    console.log("큰 수 num2")
//}else {
//    console.log("같은수")
//
//}
