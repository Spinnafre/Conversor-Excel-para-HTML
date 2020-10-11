class Table{
    constructor(arr){
        this.header=arr[0];
        arr.shift();
        this.content=arr;
    }
    get HeaderColumns(){
        return this.header.length
    }
    get RownsCount(){
        return this.content.length
    }
}

module.exports=Table