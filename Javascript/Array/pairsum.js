var num=9;
var arr=[1,4,3,8,5,15,11,17];
var flag=0;

for(i=0;i<arr.length;i++){
    for(j=1;j<arr.length;j++){
        if(num==arr[i]+arr[j]){
            flag=1;
            console.log("("+arr[i]+","+arr[j]+")");
        }
    
        }

    }
if(flag==0) console.log("no result")
