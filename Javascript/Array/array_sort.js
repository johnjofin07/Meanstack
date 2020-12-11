var arr=[1,5,4,27,33,17]

//sort in acsending order
//arr.sort((num1,num2)=>num1-num2);
//console.log(arr)

//descending order

//arr.sort((num1,num2)=>num2-num1);
//console.log(arr)

for(let i=0; i<arr.length;i++){
    for(let j=1; j<arr.length;j++){
        if(arr[i]>arr[j]){

            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            
        }
    }

}
console.log(arr);

