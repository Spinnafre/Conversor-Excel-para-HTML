const fs=require('fs')
const util=require('util')

class Reader{
    constructor(){
        // Promisify transforma uma função promisse
        this.read=util.promisify(fs.readFile)
    }
    async Read(filepath){
        try {
            return await this.read(filepath,"utf8")
        } catch (error) {
            return undefined
        }
    }
}

module.exports=Reader