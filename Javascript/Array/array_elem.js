var arr= [ 10,12,4,5,17,11,8]
var elem=3;
var flag=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]==17){
    flag=1;
    break;
    }
}
if(flag==0){
    console.log("element not found");
    
}

else { 
    console.log("element found at position "+i);
}