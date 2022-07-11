function componentForm(e){
    const formEl = document.createElement("div");
    formEl.innerHTML=`
   
   <div class="contacto__container-form">
   <h2 class="contacto__title">Escribime</h2>
       <form  class="form-contacto">
           <label class="contacto__labels" >NOMBRE
               <input name="nameForm" class="contacto__inputs" type="text" placeholder="escriba su nombre..." required>
           </label>
           <label class="contacto__labels" >EMAIL
               <input name="emailForm" class="contacto__inputs" type="email" placeholder="escriba su email..." required>
           </label>
           <label class="contacto__labels" >Mensaje
               <textarea name="messageForm" class="contacto__inputs" placeholder="escriba su mensaje..." required></textarea>
           </label>

           <button class="contacto__button contacto__button-style">Enviar</button>
           <div class="contacto__message">Gracias por completar el formulario!!! </div>
           </form>
       
   </div>
`;
    
    e.appendChild(formEl);
    dataForm()
}

function dataForm(){
    const form= document.querySelector(".form-contacto");
    const mensajeForm= document.querySelector(".contacto__message")
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
    
    const formData =new FormData(form)
    const nameForm = formData.get("nameForm");
    const emailForm = formData.get("emailForm");
    const messageForm = formData.get("messageForm");  
    console.log(nameForm,emailForm,messageForm)

    const data = {
        to: "gasmau12@gmail.com",
        message: `${nameForm} quiere comunicarse con nosotros, dejo el siguiente mensaje: ${messageForm},su mail es ${emailForm}`};

fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
}).then((res) => res.json()) .catch((error) => console.error("Ocurrio un error!", error)) .then(() => { console.log("salió todo ok")})

    mensajeForm.style.display="inherit";
    form.reset()

});

};


 






 
