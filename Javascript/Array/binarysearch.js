
var arr=[10,14,15,17,19,20,22]
arr.sort((num1,num2)=>num1-num2)
var low=0;
var upp=arr.length-1
var element=15
var flag=0
while(low<upp){
let mid=Math.floor((low+upp)/2)

if(element>arr[mid]){
    low=mid+1
}
else if(element<arr[mid]){
    upp=mid-1
}
else if(element=arr[mid]){
    flag+=1;
    break;
}
}
if (flag==0){
console.log("element found ")}

