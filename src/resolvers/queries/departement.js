const listDepartement = async (parent,args,context,info) =>{
  
    try{
        const departement = await context.prisma.departements()
        
        if(departement)
        return departement
        else return "nous n'avons pas trouver de departement"
          

        }
        catch(e){
            console.log(e)
        }
}
module.exports = {
    listDepartement
    
    }