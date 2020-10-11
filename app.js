const Reader=require('./Reader')
const Processor=require('./Processor')
const Table=require('./Table')
const RenderHTML=require('./htmlParse')
const WriteHTML=require('./Write')
const WritePDF=require('./WritePDF')


const Leitor=new Reader()
const Writer=new WriteHTML()



async function main(){
    var data=await Leitor.Read('./Cadeiras-3º semestre - Página1.csv')
    const dadosFormatados=Processor.process(data)
    const tabela=new Table(dadosFormatados)
   
    let x=await RenderHTML.renderTable(tabela)

    Writer.Write(Date.now()+'.html',x)

    // WritePDF.Write('file'+Date.now()+'.PDF',x)

    
}
main()