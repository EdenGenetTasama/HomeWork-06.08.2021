// משימה ראשונה

// var numbersUser=[ 22 , 29, 30 , 12 , 38];
// var minAge= numbersUser[0] ;

// for (var i=0; i < numbersUser.length ; i++) {
//    if (numbersUser[i] < minAge){
//     minAge = numbersUser[i]
// }
// }

// console.log(minAge);

// =================================================================================================================================

// משימה ראשונה .2:

// var arrayNumber= [88,12,55,47,87];
// var maxAge = arrayNumber[0];

// for (var i = 0 ; i<arrayNumber.length ; i++) {
//     if (arrayNumber[i]> maxAge) {
//         maxAge = arrayNumber[i]
//     }

// }
// console.log(maxAge);

// =================================================================================================================================
// משימה ראשונה.3:

// var arrayNumber= [88,12,55,47,87];
// var allAge = 0;

// for (var i = 0; i<arrayNumber.length; i++){
//     // arrayNumber[i]+allAge;
//     allAge =  arrayNumber[i]+allAge;
// }

// console.log(allAge);

// =================================================================================================================================

// משימה ראשונה.5

// var arrayNumber= [88,12,55,47,87];
// var allAge = 0;

// for (var i = 0; i<arrayNumber.length; i++){
//     allAge =  arrayNumber[i]+allAge;
// }

// console.log(allAge/arrayNumber.length);

// =================================================================================================================================
//  משימה ראשונה.5:

// var numbersUser = Number(prompt("Enter a Number:"))
// var arrayNumber= [88,12,55,47,87];

// var allNumber=[];
// var sum= 0 ;

// for (var i=0 ; i< 5 ; i++) {
//     var userNumber=Number(prompt("enter num"))
//     allNumber.push(userNumber)
//     sum = allNumber[i]+sum;

// }
// console.log(sum);
// console.log(allNumber);

// =================================================================================================================================
//  1.שאלה  שניה

// debugger
// var allArray = [
//   "Daniel",
//   5,
//   "Ronit",
//   10,
//   "Selam",
//   "Oshra",
//   20,
//   50,
//   "Eden",
//   88,
//   100,
// ];

// var k= 0 ;
// var j=0;

// var allNames = [];
// var allNumbers = [];

// for (var i = 0; i < allArray.length; i++) {
//   if (allArray[i] * 0 == 0) {
//       allNumbers[j] = allArray[i];
//       j++;  }
//   else {
//  allNames[k] = allArray[i];
//   k++;
// }}

// console.log(allNames);
// console.log(allNumbers);

// =================================================================================================================================

// שאלה שלישית

// var allNumber= [22,18,23,10,88,119,78,53]

// var temp= allNumber[0]

// allNumber[0] = allNumber[1]

// allNumber[1]=temp
// console.log(allNumber);

// var temp= allNumber[0]
// allNumber[0] = allNumber[allNumber.length-1];
// allNumber[allNumber.length-1] = temp;

// console.log(allNumber);

// =================================================================================================================================

// שאלה רביעית

// var allNumbers = [5, 3, 7, 8, 11];
// var sum=0;

// for (var i = 0; i < allNumbers.length; i++) {
//   sum = allNumbers[i] + sum;
// }

// console.log(sum/allNumbers.length);

// =================================================================================================================================

// שאלה חמישית

// var allNames = ["Eden", "Daniel", "Oshra" ,"Ofir" , "Selam"];

// for (var i = 0 ; i< allNames.length ; i++) {
//     console.log(allNames[i]);

// }

// =================================================================================================================================
// שאלה שישית :

// var allNumber = [];

// for (var i=0; i<5 ; i++) {
//     userNumber = Number(prompt("enter Number"));
//     allNumber[i] = userNumber
// }
// console.log(allNumber);

// =================================================================================================================================

// שאלה שביעית

// צור מערך עם 8 שמות, בקש מהמשתמש להכניס שם ובדוק האם השם קיים

// var allNames = ["Eden", "Daniel", "Oshra" ,"Ofir" , "Selam" , "Almaz" , "Takelo"]
// i;
// userName = prompt("What is your name ? ")

// for (var i=0 ; i< allNames.length; i++) {
//     if (userName == allNames[i] ) {
//         console.log("You can enter");
//     }
//     }

// =================================================================================================================================

// שאלה שמינית א':
// כפל
// var answerOne = Number(prompt("Enter first Number"));
// var answerTwo = Number(prompt("Enter second Number"));
// var answerThree = Number(prompt("Enter third Number"));

// var allNumber = [answerOne,answerTwo,answerThree];
// var sum=1;

// for (var i=0 ; i<allNumber.length ; i++) {
//     allNumber[i] * sum
//     sum =  allNumber[i]*sum
// }
// console.log(sum);

// שאלה שמינית ב' :
// סכום :

// var answerOne = Number(prompt("Enter first Number"));
// var answerTwo = Number(prompt("Enter second Number"));
// var answerThree = Number(prompt("Enter third Number"));

// var allNumber = [answerOne,answerTwo,answerThree];
// var sum=0;
// for (var i=0 ; i<allNumber.length; i++) {
//     allNumber[i] +sum;
//     sum = allNumber[i] +sum;
// }
// console.log(sum);

// שאלה שמינית ג':
// מספרים זוגיים יודפסו
// var answerOne = Number(prompt("Enter first Number"));
// var answerTwo = Number(prompt("Enter second Number"));
// var answerThree = Number(prompt("Enter third Number"));

// var allNumber = [answerOne, answerTwo, answerThree];
// var sum = 0;
// for (var i = 0; i < allNumber.length; i++) {
//   if (allNumber[i] % 2 == 0) {
//     console.log(allNumber[i], true);
//   }
//   else {
//     console.log(allNumber[i], false);
//   }
// }

// שאלה שמינית ד'
// מספרים אי זוגיים יודפסו

// var answerOne = Number(prompt("Enter first Number"));
// var answerTwo = Number(prompt("Enter second Number"));
// var answerThree = Number(prompt("Enter third Number"));

// var allNumber = [answerOne, answerTwo, answerThree];
// var sum = 0;
// for (var i = 0; i < allNumber.length; i++) {
//   if (allNumber[i] % 2 != 0) {
//     console.log(allNumber[i], true);
//   }
//   else {
//     console.log(allNumber[i], false);
//   }
// }

// =================================================================================================================================
// שאלה תשיעית לוח הכפל

// for (var i=1 ; i<=10; i++){
//     for(var j=1; j<=10; j++){
//         console.log(`${i}*${j}=${i*j}`);
//     }
// }
// =================================================================================================================================

// שאלה עשירית

// var allNames = ["Eden", "Daniel", "Oshra", "Ofir", "Selam" , "Lior"];
// var userNumber = [];

// for (var i = 0; i < allNames.length; i++) {
//   var numberEnter = Number(prompt("Enter Number:"));
//   userNumber[i]=numberEnter
// }

// for (var j=0 ; j<userNumber.length; j++){
//     console.log(allNames);
// }


// =================================================================================================================================

// שאלה אחת עשרה : 

// var startNum = 0 ;

// while (startNum < 50) {
//     if (startNum%7 !=0){
//         console.log(startNum);
//     }
//     startNum++
// }