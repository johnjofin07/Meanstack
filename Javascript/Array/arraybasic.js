var arr=[1,true,"hii",2.5]


//To add an item to a array
arr.push(300)
arr.push(325)


//To remove last item from array
arr.pop()


//console.log(arr)

//to remove items from specified loc
arr.splice(1,2)  //(starting item, up to which item including starting item)

//To print one by one items in array
for (let data of arr){
    console.log(data)
}