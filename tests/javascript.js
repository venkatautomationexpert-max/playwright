// let s="this is venkata reddy"


// let rev=" "

// for(let i=s.length-1;i>=0;i--){

//     rev=rev+s[i]
// }



// console.log(rev)


// let  s="this is venkata reddy"

// let charCount={}

// for(let i = 0; i < s.length;i++){

//     let ch=s[i]
//     if(charCount[ch]){
//         charCount[ch]++;

//     } else{
//         charCount[ch]=1
//     }
// }

// console.log(charCount)



// let num=123456;

// let rev=0;
// while(num>0){

//     let digit= num % 10;
//     rev=rev*10 +digit
//     num=Math.floor(num / 10)
// }
// console.log(rev)







// let a=5;
// let b=10
// let temp =a
// a=b
// b=temp
// console.log("a:",a)
// console.log("b:",b)


// a= a  + b  //15
// b= a - b  //5
// a= a - b  //10

// console.log("a:",a)
// console.log("b:",b)



// let a=5;    
// let b=15
// let c=15

// let largest;

// if(a>=b && a>=c){
//     largest=a
// }
//     else if(b>=a && b>=c){
//         largest=b   
//     }
//     else{
//         largest=c   
//     }
// console.log(largest)


// let arr = [12, 45, 7, 89, 23, 56]

// let largest = arr[0]


// for (let i =1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i]
//     }


// }


// console.log("Largest number in array:", largest)    







// let arr = [12, 45, 7, 89, 23, 56];

// let largest = arr[0];
// let secondLargest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] < largest && arr[i] >secondLargest) {
//         secondLargest = arr[i];
//     }
// }
// console.log("Second largest number in array:", secondLargest);


// let arr = [12, 45, 7, 89, 23, 56];

// let even=arr.filter(num => num % 2 ===0).sort((a,b )=> a - b)
// console.log("Even numbers in array:", even);

// let odd=arr.filter(num => num % 2 !==0)
// console.log("Odd numbers in array:", odd);



//let even=Math.floor(...arr.filter(num => num % 2 === 0))

//let even=Math.floor(...arr.filter(num => num % 2 === 0))

//console.log("Even numbers in array:", even);

// let odd=Math.floor(...arr.filter(num => num % 2 !== 0)) 
// console.log("Odd numbers in array:", odd);

// let evenlength=arr.filter(num => num % 2 === 0).length
// console.log("Count of Even numbers in array:", evenlength);


// let arr = [12, 45, 7, 89, 23, 56];


// let sum =0;

// for(let i=0;i<arr.length;i++){

//     sum = sum + arr[i]      
// }
// console.log("Sum of all numbers in array:", sum);


// let arr= [12, 45, 7, 89, 23, 56];

// const sum=arr.reduce((acc, curr) => acc + curr, 0) 

// console.log("Sum of all numbers in array:", sum);


// let arr = [5, 2, 8, 11, 4, 6, 10];

// let firstThreeEvens = arr.filter(n => n % 2 === 0).slice(0, 3);

// console.log(firstThreeEvens); // [2, 8, 4]


// let str= "madam"
// let rev= str.split("").reverse().join("")

// let p= rev== str
// console.log(p)

// let fact= 1

// for(let i=1;i<5;i++){

//     fact=fact*i
// }

// console.log(fact)

// let arr = [10, 25, 3, 99, 56];
// console.log(Math.min(...arr)); // 99


// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [...new Set(arr)];
// console.log(unique); // [1, 

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((a, b) => a + b, 0);
// console.log(sum); // 15


// let str= "hello world"
// let owels= str.match(/[aeiou]/gi)?.length || 0
// console.log(owels)


// let str= "he"

// console.log(str.length)


// let str="venkat1223@#$%%$$$$9990"

// const result=str.replace(/[^a-zA-Z0-9]/g,"")

// console.log(result)


//  let str = "Hello_@# World!";
// let result = str.replace(/[^a-zA-Z0-9_ ]/g, '');
// console.log(result); // "Hello_ World"

//  let str = "Hello_@# World!";
// let result = str.replace(/[^\w]/g, '');
// console.log(result); // "Hello_ World"

// let s="venkat 12345@#$$"

// let r=s.replace(/\D/g,"")
// console.log(r)



// let num = 17;  // Number to check
// let isPrime = true;  // Assume it is prime

// if (num <= 1) {
//     isPrime = false;  // 0 and 1 are not prime
// } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;  // Divisible, so not prime
//             break;  // No need to check further
//         }
//     }
// }

// if (isPrime) {
//     console.log(num + " is a prime number");
// } else {
//     console.log(num + " is not a prime number");
// }



// let nu=29
// let  isPri=true

// if(nu<=1){
//     isPri=false
// }

// else{
// for(let i=2;i<=Math.sqrt(nu);i++){
//     if (nu % i == 0){
//         isPri=false
//         break
//     }
// }


// }


// if(isPri){
//     console.log(nu + " is a prime number");
// }   else{
//     console.log(nu + " is not a prime number");
// }


// const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2  == 0) {
//         console.log(arr[i]);
//     }
// }


// const arr = [1, 2, 3, 4, 5, 6];

// for (const num of arr) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }


// for (let num = 2; num <= 100; num++) {  // start from 2, as 0 and 1 are not prime
//     let isPrime = true;

//     // Check if divisible by any number from 2 to √num
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;  // not prime, exit loop
//         }
//     }

//     if (isPrime) {
//         console.log(num);
//     }
// }


// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArr = arr.filter((ele, index, arr) => arr.indexOf(ele)  === index);
// console.log(uniqueArr);
// const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

// console.log(duplicates);


// let arr = [1, 2, 3,4, 5,7];
// let n = arr.length + 1;  // total numbers including missing one

// // Sum of first n natural numbers formula: n*(n+1)/2
// let expectedSum = (n * (n + 1)) / 2;

// // Actual sum of array
// let actualSum = arr.reduce((a, b) => a + b, 0);

// let missingNumber = expectedSum - actualSum;
// console.log("Missing Number:", missingNumber);

// let arr = [1, 2, 3, 4,5,8];

// for (let i = 1; i <= arr.length + 1; i++) {
//   if (!arr.includes(i)) {
//     console.log("Missing Number:", i);
//     break;
//   }
// }

// let arr = [ 2, 4, 100];
// let max = Math.max(...arr);
// console.log(max)
// let missing = [];

// for (let i = 1; i <= max; i++) {
//   if (!arr.includes(i)) {
//     missing.push(i);
//   }
// }

// console.log("Missing Numbers:", missing);




// let arr= [2,3,4,6,7,9,100]

// let missing=[]

// let max= Math.max(...arr)


// for(let i=1;i<=max;i++){

//     if(!arr.includes(i)){
//         missing.push(i)
//     }
// }


// console.log("Missing Numbers:", missing);

// let arr= [2,3,4,6,7,9,100]

// let max=arr[0]

// for(let i=1;i<arr.length;i++)    


// {
// if(arr[i]>max){
//     max=arr[i]; 
// }
// }

// console.log(max)

// let missing=[]

// for(let i=1;i<=max;i++){
//     if(!arr.includes(i)){

//         missing.push(i)         
//     }

// }


// console.log("Missing Numbers:", missing);


// let num=12;
// let isboolean=true

// if(num<=1){
//     Boolean=false
// }

// for(let i=2;i<=Math.sqrt(num);i++){
//     if(num % i ==0){
//         isboolean=false
//         break
//     }
// }
// if(isboolean){
//     console.log(num + " is a prime number");
// }
// else{
//     console.log(num + " is not a prime number");

// }   


// for (let num = 2; num <= 100; num++) {
//         let isboolean = true


//     for (let i = 2 ;i < Math.sqrt(num); i++) {
//         if (num % i ===  0) {
//             isboolean = false
//             break;


//         }
//     }
//     if(isboolean){
//         console.log(num + " is a prime number");
//     }

// }



// let fact=1

// for(let i=1;i<=5;i++){

//     fact=fact*i
// }
// console.log(fact)


// let arr= [12, 45, 7, 89, 23, 56];
// let max=arr[0]

// for(let i=1;i<arr.length;i++){

//     if(arr[i]<max){
//         max=arr[i]
//     }
// }
// console.log(max)


//let arr= [4,12, 45, 7, 89, 23, 56];

// for(let i=0;i<arr.length;i++){

//     if(arr[i] % 2 ==! 0){
//         console.log(arr[i])
//     }
// }


// let sum=0

// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }


// console.log(sum)

// let sum=arr.reduce((a,b)=> a + b,0)
// console.log(sum)


// let array= [4,12, 45, 7, 89, 23, 56];

// let max=array.filter(num => num % 2== !0)

// console.log(max)
// const a=arr.sort((a,b) => a -b )

// console.log(a)


// let num =12345
// let rev=0;
// while(num>0){

//     let digit=num % 10;

//     rev= rev * 10 + digit
//     num= Math.floor(num / 10)
// }
// console.log(rev)


//let str= "madam"

// let rev=""

// for(let i=str.length-1;i>=0;i--){
//     rev=rev +str[i]
// }

// console.log(rev)

// const rev=str.split("").reverse().join("")

// console.log(rev)

// if(rev==str){
//     console.log("palindrome")
// }
// else
// {
//     console.log("not a palindrome")
// }

// let array= [1,2,2,3,4,4,5,5,5];


// const a=array.filter((Ele,inde,a) => a.indexOf(Ele) !==  inde)
// console.log(a)


// let array= [1,2,2,3,4,4,5,5,5];

// let unique=[]


// let str= "venakt@!@#$56777"


// //let result= str.replace(/[^a-zA-z0-9]/g,"")

// let result= str.replace(/[^a-z]/g,"")

// console.log(result)


// function add(a,b){

//     return a + b
// }

// console.log(add(5,10))

// let addition= (a,b)=> a + b

// console.log(addition(5,10))


// let ar = [1, 2, 3, 4,5,8,10];

// for (let i = 1; i <= ar.length + 1; i++) {
//   if (!ar.includes(i)) {
//     console.log("Missing Number:", i);
//     break;
//   }
// }

// let ar = [ 2, 4, 100];
// let max = Math.max(...ar);
// console.log(max)
// let missing = [];

// for (let i = 1; i <= max; i++) {
//   if (!ar.includes(i)) {
//     missing.push(i);
//   }
// }

// console.log("Missing Numbers:", missing);

// for (let i = 1; i <=10; i++) {
//   console.log(i);
// }

// let num = 7;
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// let a = 10, b = 20;
// console.log(a > b ? a : b);

// let str = "hello";
// let reversed = str.split("").reverse().join("");
// console.log(reversed);



// let n1=0;
// let n2=1
// let nxt;

// for(let i=1;i<=10;i++){

//     console.log(n1)
//     nxt= n1 + n2
//     n1=n2
//     n2=nxt  
// }

// let arr = [10, 5, 8, 20, 3];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < max) {
//     max = arr[i];
//   }
// }
// console.log("Max:", max);  // 20


// let str= "helloo world3e"
// let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   console.log("Vowel count:", count);


// let str="venkat1223"
// let ovels="aeiouAEIOU"
// let count=0

// for(let char of str){
//     if(ovels.includes(char))
//     {
//         count++
//     }

// }
// console.log("Vowel count:", count)

// let arr= [4,12, 45, 7, 89, 23, 56,12,4];

// let re=[... new Set(arr)]
// console.log(re)

// let array = [1, 2, 3, 2, 4, 5, 1,4];
// // let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// // console.log(duplicates); // [2, 1]
// // console.log([...new Set(duplicates)]); 

// let du= array.filter((ele,inde,arr) => arr.indexOf(ele)!==inde)
// console.log(du)

// let arr= [4,12, 45, 7, 89, 23, 56];

// for(let i=0;i<=arr.length;i++){

//     for(let j=i+1;j<=arr.length;j++){
//         if(arr[i] < arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)


// let str ="javascript"
// let count=[]

// for(let char of str){

//     if(count[char]){
//         count[char]++
//     }
//     else{
//         count[char]=1
//     }       
// }
// console.log(count)

//Reverse words in a sentence
// let sentence = "I love JavaScript";
// let reversed = sentence.split(" ").reverse().join(" ");
// console.log(reversed);  // "JavaScript love I"


// reverse each word


// let sentence = "I love JavaScript";
// let words=sentence.split(" ")
// let result=[]



// for(let i=0;i<words.length;i++)
// {
//     let word= words[i]
//     let rev=""

//     for(let j=word.length-1;j>=0;j--){
//         rev=rev+word[j]    

//     }
//     result.push(rev)

// }
// console.log(result.join(" "))


// let str = "this is";
// let words = str.split(" ");
// let result = [];

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   let reversed = "";

//   for (let j = word.length - 1; j >= 0; j--) {
//     reversed += word[j];
//   }

//   result.push(reversed);
// }

// console.log(result.join(" ")); // siht si


// let str = "javascript";
// let vowels = "aeiou";
// let vCount = 0, cCount = 0;

// for (let ch of str) {
//   if (vowels.includes(ch)) vCount++;
//   else cCount++;
// }
// console.log("Vowels:", vCount, "Consonants:", cCount); 


// let str= "javascript"
// let result=[]


// for(let i=0;i<str.length;i++){

//     if(!result.includes(str[i])){

//         result=result + str[i]
//     }
// }
// console.log(result)

// let str = "aabbcd"
// let charCount = {};

// for (let ch of str) {
//   charCount[ch] = (charCount[ch] || 0) + 1;
// }

// for (let ch of str) {
//   if (charCount[ch] === 1) {
//     console.log(ch); // c
//     break;
//   }
// }

// let arr = [1, 2, 3, 2, 4, 1];
// let duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//       duplicates.push(arr[i]);
//     }
//   }
// }
// console.log(duplicates); // [1, 2]


// let arr= [4,12, 45, 7, 89, 23, 56];





// let day="1"

// switch(day){
//     case "sunday":
//     console.log("sunday")
    
    
//        case "monday":
//     console.log("monday")


//        case "tuesday":
//     console.log("tuesday")
//     // default:
//     // console.log("invalid day")  

// }




// let num1=60
// let num2=10
// if(num1>num2){
//     console.log("num1 is greater")
// }
// else{


//     console.log("num2 is greater")
//     console.log("hello")
//      console.log("hi") 
// }
  

//   let a=2   

//   switch(a){

// case 1:
//     a=one
//     break
//     case 2:
//         a=two
//         break   
//         case 3:
//             a=three
//             break


//   }
//   console.log(a)



// for(let i=1;i<=10;i++){

//     if(i % 2 == 0){
//         continue
//     }
//     console.log(i)
// }

// let person = {
//   name: "John",      // string property
//   age: 30,           // number property
//   isEmployed: true,  // boolean property
//   greet: function() { // method
//     return "Hello, " + this.name;
//   }
// };

// console.log(person.name);     // John
// console.log(person.greet());  // Hello, John

// let obj = { name: "Sourav", age: 23 };

// // Using Dot Notation
// console.log(obj.name);

// // Using Bracket Notation
// console.log(obj["age"]);



// const each=["apple","banana","grapes"]

// each.forEach(function(each,arrin)
// {
//     //console.log(`${arrin}: ${each}`)

//     console.log(each,arrin)
// })

// const fruits = ['Apple', 'Banana', 'Orange'];

// fruits.forEach(function(fruit, index) {
//   console.log(`${index}: ${fruit}`);
// });


// const num=[1,2,3]


// num.forEach(n=>console.log(n * 2))

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];

// users.forEach(user => {
//   console.log(`${user.name} is ${user.age} years old`);
// });


// function reve(str)
// {

//   return str.split("").reverse().join("")
// }


// console.log(reve("this is venkatt"))

// let str="MADAM"
// let rev=""

// for(let i=str.length-1;i>=0;i--){

//   rev=rev+str[i]

// }


// console.log(rev)
// if(str==rev)
//  {
//   console.log("yes")
//  }
//  else{
//   console.log("No")
//  }


// let arr = [ 2, 4, 100];
// let max = Math.max(...arr);
// console.log(max)
// let missing = [];

// for (let i = 1; i <= max; i++) {
//   if (!arr.includes(i)) {
//     missing.push(i);
//   }
// }

//console.log("Missing Numbers:", missing);



// let arr=[1,2,3,100]
// let missing=[]
// let max= Math.max(...arr)


// for(let i=0;i<=max;i++){


//   if(!arr.includes(i))
//   {
//     missing.push(i)
//   }
// }
// console.log(missing)

// let array=[1,2,3,,4,5,2,1,3,]

// let result= array.filter((ele,index,a) => a.indexOf(ele)===index)


// console.log(result)


// let fact=1;

// for(let i=1;i<=5;i++)
// {

//   fact=fact *i
// }
// console.log(fact)


// let num1=0
// let num2=1

// let next
// for(let i=2;i<=10;i++){

//   console.log(num1)
//   next= num1 +num2
//   num1=num2
//   num2=next
// }


// let num =1234
// let rev=0
// let temp;
// while(num > 0){

// temp= num % 10

// rev=rev * 10 + temp
// num= Math.floor(num / 10)

// }
// console.log(rev)


// let arr=[1,2,3,4,5,6,1,2,1,2 ,0]

// let count={}


// for(let num of arr)
// {

//    if(count[num]) {
//     count[num] ++
//    }
//    else{
//     count[num]=1
//    }
// }

// console.log(count)


// let num=7

// let isprime=true
// if(num<=1){

//   isprime =false
// }

// for(let i=2;i<Math.sqrt(num);i++)
// {
//   if( num % i===0){
//     isprime=false
//     break
//   }
 
// }


// if(isprime){

//   console.log(num + "is a prime number")
// }
// else
// {
//   console.log(num + "is not a prime number")
// }



//let arr= [1,2,3,4,,566,6]

// let max= arr[0]

// for(let i=0;i<arr.length;i++ ){
// if(arr[i] < max)
// {
//   max=arr[i]
// }

// }
// console.log(max)

// for(let i=0;i<arr.length;i++){

//   if(arr[i] % 2  == ! 0)
//   {
//     console.log(arr[i])
//   }
// }



// for(let num =2; num<=100;n++){

//   let isprime =true

//   for(let i=2;i<Math.sqrt(num);i++){

//     if(num % i === 0){
//       isprime=false
//       break
//     }
//   }

//   if(isprime)
//     {
//       console.log(num)
//     }
// }

// for (let num = 1; num <= 100; num++) {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }

// let obj = {a: 1, b: 2, c: 3};

// for (let key in obj) {
//   console.log(key);
// }


// let arr = [10, 20, 30];

// for (let i of arr) {
//   console.log("for...in:", i); // keys (indexes)
// }



// let arr=[1,2,3,45]

//  let sum=0

// // for(let i=0;i<arr.length;i++)
// // {
// //   sum=sum+arr[i]
// // }
// // console.log(sum)
// arr.forEach(num =>sum=sum+ num)
// console.log(sum)


// let f=["venkat","reddy"]
// f.forEach(num =>{

//   console.log(num.toUpperCase())
// })

let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled)
// console.log(numbers)


// numbers.forEach(num => console.log( num * 2))
let even=numbers.filter(num => num % 2===0)
console.log(even)