//assignment question 1
 let sum=calculateSum(2,4);
// console.log(sum);
function calculateSum(a,b){
    return a+b;
}

//assignment question 2
let isEventValue=isEvent(5);
console.log(isEventValue);
function isEvent(a){
    if(a%2==0){
        return true;
    }else return false;
}


//assignment question 3
// let arr=[1,4,21,7,8,10,50];
let maxValue=findMax(arr);
// console.log(maxValue);

function findMax(arr){
    let max=Number.MIN_VALUE;
    arr.forEach(element => {
        if(element>max){
            max=element;
        }
    });
    return max;
}

//assignment question 4
let string="ABC";
let reverse=reverseString(string);
//console.log(reverse);
function reverseString(string){
 let reverseStr='';
 for(let i=string.length-1;i>=0;i--){
    reverseStr+=string[i];
 }
 return reverseStr;
}


//assignment question 5
//let arr=[1,2,3,4,5,5,10];
let oddNumber=filterOddNumber(arr);
//console.log(oddNumber);

function filterOddNumber(arr){
    let Number=arr.filter(oddvalue);
    return Number;
}
function oddvalue(element){
    if(element%2!=0){
        return element;
    }
}


//assignment question 6
// let arr=[1,2,3,4,5,5,10];
// let sum=sumArray(arr);
// //console.log(sum);
function sumArray(arr){
    let sumValue=0;
    arr.forEach(element => {
        sumValue+=element;
        
    });
    return sumValue;
}

//assignment question 7
//  let arr=[1,2,3,4,10,5,5];
//  let sort=sortArray(arr);
//  console.log(sort);
 function sortArray(arr){
    return arr.sort((a,b)=> {return a-b});
 }

//assignment question 8
let str="hello";
let capitalize=capitalizeFirstLetter(str);
console.log(capitalize);

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}







