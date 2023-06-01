//8. 배열
var names = new Array(20);
names[0] = '하나'
names[1] = '두리'
names[2] = '세찌'

for (var i = 0 ; i <= 10 ; i++){
document.write(names[i], i + "<br/>");
}

var students = ["One","Two","Three","Four"];
console.log(students);
console.log(students[0]); // One
console.log(students.length); //4
students.push("Five");
console.log(students); //  ["One","Two","Three","Four","Five"]
console.log(students.pop()); // Five
console.log(students); //  ["One","Two","Three","Four"]
console.log(students.pop("Two")); // Four 파라미터와 관계없이 마지막 값
console.log(students); //  ["One","Two","Three"]
// 특정 위치에 값 넣는 함수 splice
console.log(students.splice(1,0,"추가된 사람"), students) ; // 첫번째 자리에, 지우지않고 (0) 한칸씩 밀고 추가


// 배열 연결
 var numA1 = [10,20];
 var numA2 = [40,50,60];
 var  numA = numA1.concat(numA2);
 console.log(numA ); // [10,20,40,50,60]
  console.log(numA1 + numA2 ); // 10,2040,50,60


//7. 함수
//function welcomeMessage(name){
//    document.write("hi"+name);
//}
//var name = prompt("Enter your name");
//welcomeMessage(name);

// 실행과 동시에 함수가 작동
//(function addNumbers(a,b) {
//    console.log(a+b);
//})(3,10);
//
//(function display(mes){
//    console.log(mes + "hi");
//})("hana");

// 6. break와 continue
//for (var i = 1; i <= 100; i++){
//    document.write(i);
//
//    if (i ==20){
//        break;
//    }
//
//    document.write(i + "<br/>");
//}
//for (var j = 1; j <= 100; j++){
//    if(j<=20){
//        continue;
//    } // 이 조건 만족할 때 루프를 빠져나감 따라서 아래 write 실행 x
//    document.write(j + "<br/>");
//} // 21~100 출력
// 5. do while

//var i = 1
//do {
//    document.write(i);
//    document.write(i++ );
//    document.write(i +  "<br/>");
//} while (i <=10)
// 10 10 11 출력 되고 정지됨

////4. switch문
//var digit = parseInt(prompt("숫자 입력:"));
//switch(digit){
//    case 0:
//        document.write("Zero");
//        break;
//   case 1:
//        document.write("One");
//
//    case 2:
//        document.write("Two");
//        break;
//
//// Or 조건으로 사용됨
//    case 3:
//    case 4:
//        document.write("Three or Four");
//        break;
//
//   default:
//        document.write("Else");
//        break;
//
//}

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
