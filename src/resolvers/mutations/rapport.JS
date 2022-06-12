const addRapport=async(parent,args,context,info)=>{
  const{
  theme,
  pdf
  }=args
  const pdfDriver=await context.storeUpload(pdf)
  const rapport=await context.prisma.createRappport({
      theme,
      pdf: pdfDriver.path,
      
  })
  return rapport
}

module.exports = {
  addRapport
};
