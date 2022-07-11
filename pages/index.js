function mainIndex(){
    const headerImport =document.querySelector(".header-card")
    const presentationImport = document.querySelector(".presentation-card")
    const serviciosImport=document.querySelector(".servicios-card") 
    const formImport=document.querySelector(".form-card")
    const footerImport=document.querySelector(".footer-card")    
    componentHeader(headerImport)
    componentPresentation(presentationImport)
    componentServicios(serviciosImport)
    componentForm(formImport)
    componentFooter(footerImport)
}
mainIndex();



