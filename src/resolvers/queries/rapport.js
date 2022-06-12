const info = () => "Bienvenu  sur notre api";
const listRapport = async (parent,args,context,info) =>{
  
    try{
        const rapport = await context.prisma.rapports()
        
        if(rapport)
        return rapport
        else return "nous n'avons pas trouver de rapport"
          

        }
        catch(e){
            console.log(e)
        }
}
module.exports = {
    listRapport,
    info
    }