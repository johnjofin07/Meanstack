var i=571;
var res="";


while(i>0)
{

    var digit=i%10;
    
    res=res+String(digit);
    i=Math.floor(i/10);

}
console.log(res);

