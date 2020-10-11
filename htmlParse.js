const ejs=require('ejs')

class RenderTable{
    static async renderTable(data){
        return await ejs.renderFile('./Tables.ejs',{header:data.header,rows:data.content})
    }
}

module.exports=RenderTable