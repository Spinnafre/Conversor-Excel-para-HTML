const Pdf=require("html-pdf")

class WritePdf{
    static Write(filename,data){
        console.log(filename)
        // Ele irá criar um pdf com base no html com nomeação específica
        Pdf.create(data,{}).toFile(filename,()=>{});
    }
}
module.exports=WritePdf