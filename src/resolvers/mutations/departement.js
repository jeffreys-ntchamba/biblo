const addDepartement = async (parent, args, context, info) => {
    const {name } = args;
  try{
    const departement = await context.prisma.departement({name:name})
      if(departement){
      throw Error("le departement existe deja");}
    else {
    
    const newDepartement = await context.prisma.createDepartement({
      name,
     
    });
    return newDepartement}}
    catch(e){
      throw Error(e)
    }
    
  };
  module.exports = {
   
    addDepartement,
    
  };