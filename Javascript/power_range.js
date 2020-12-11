var num=2;
var power=num;
var upp=50;
var low=10;

for(i=1;i<11;i++){
    power=i**num;
    
    if(power<upp&&power>low){
        console.log(power);
    }
}
