class Processor{
    static process(dados){
        // Quebra por linha e Quebra (\r Linux), (\n) windows
        const splitRows=dados.split("\r\n")
        const row=[]
        splitRows.forEach(element => {
            let x=element.split(',')
            row.push(x)

        });
        return row
    }
}

module.exports=Processor