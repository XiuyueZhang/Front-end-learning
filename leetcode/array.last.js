Array.prototype.last = function(){
    if(this.length !== 0){
        return this.slice(-1)[0]
    }else{
        return -1
    }
}

const arr = [1,2,3]
console.log("the last element is ", arr.last())