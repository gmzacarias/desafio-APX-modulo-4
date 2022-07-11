function componentServicios(e){
    const serviciosEl = document.createElement("div");
    serviciosEl.innerHTML=`
    <template id="servicios-card-template">
    <div class="servicios-container">
    <div class="servicios-container-content">
        <img class="servicios-container-content__img" src="" alt="">
        <h3 class="servicios-container-content__title"></h3>
        <p class="servicios-container-content__description"></p>
    </div>
    </template>
    `;
    e.appendChild(serviciosEl);
    }

function addServiciosCard(params = {}){
    const templateServicios = document.getElementById("servicios-card-template")
    const containerServicios = document.querySelector(".servicios-card")
    templateServicios.content.querySelector(".servicios-container-content__title").textContent = params.title;
    templateServicios.content.querySelector(".servicios-container-content__description").textContent = params.description;
    templateServicios.content.querySelector(".servicios-container-content__img").src = params.img;
    
    const cloneServiciosCard = document.importNode(templateServicios.content, true);
    containerServicios.appendChild(cloneServiciosCard);
}
      
function getServicios(){
return fetch("https://cdn.contentful.com/spaces/zh65nw1600gb/environments/master/entries?access_token=9Kqq2Jc7tFZY5_b-wY0kHicWyiS_LWTQp5KbGaRAjag&content_type=servicios&order=sys.createdAt")
.then((res)=>{
    return res.json();
})
.then((data)=>{
console.log(data)// leer en consola la info obtenida de la api

const fieldCollectionsServicios =data.items.map((item)=>{
    const idImagen = item.fields.img.sys.id;
            const imagen = buscarImagen(idImagen, data);
            linkImg = imagen.fields.file.url;

    return {
        title: item.fields.title,
        description: item.fields.description,
        img: linkImg
    }
});

return fieldCollectionsServicios

});
}

function buscarImagen (id, data){
    const imagen = data.includes.Asset.find((asset)=>{
        return asset.sys.id == id;
    })
    return imagen;
}

function serviciosMain(){
  getServicios().then(function(servicios){
    for(const s of servicios){
        addServiciosCard(s);
    }
 })  
}
serviciosMain();


