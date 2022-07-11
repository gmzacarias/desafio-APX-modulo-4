
function componentPresentation(e){
    /*creo un elemento "div" en el documento*/
    const presentationEl = document.createElement("div");
    /*le modifico el html al "div" creado*,uso un template string*/
    presentationEl.innerHTML=`
    <template id="presentacion-card-template">
    <div class="presentacion-container">
    <img class="presentacion-container__image" src="" alt="">   
    <h2 class="presentacion-container__title"></h2>
    <p class="presentacion-container__description"></p> 
    </div>
</template>
`;
    

    
    /*crea un nuevo elemento div, y lo agrega al final del documento*/
    e.appendChild(presentationEl);
    
    
    
    }





function addPresentationCard(params = {}){
    const templatePresentation = document.getElementById("presentacion-card-template")
    const containerPresentation = document.querySelector(".presentation-card")
    templatePresentation.content.querySelector(".presentacion-container__image").src = params.img;
    templatePresentation.content.querySelector(".presentacion-container__title").textContent = params.title;
    templatePresentation.content.querySelector(".presentacion-container__description").textContent = params.description;
  
    
    const clonePresentationCard = document.importNode(templatePresentation.content, true);
    containerPresentation.appendChild(clonePresentationCard);
}


function getPresentation(){
return fetch("https://cdn.contentful.com/spaces/zh65nw1600gb/environments/master/entries?access_token=rYJHYlyqVRKu47hbyqF0fRjvBrkVNMBV120Ngqutaik&content_type=presentacion&order=sys.createdAt")
.then((res)=>{
    return res.json();
})
.then((data)=>{
console.log(data)// leer en consola la info obtenida de la api

const fieldCollections =data.items.map((item)=>{
    const idImagen = item.fields.img.sys.id;
            const imagen = buscarImagen(idImagen, data);
            linkImg = imagen.fields.file.url;
    
    return {
        title: item.fields.title,
        description: item.fields.description,
        img: linkImg
    }
});

return fieldCollections

});
}

function buscarImagen (id, data){
    const imagen = data.includes.Asset.find((asset)=>{
        return asset.sys.id == id;
    })
    return imagen;
}

function presentation(){
  getPresentation().then(function(presentation){
    for(const p of presentation){
        addPresentationCard(p);
    }
 })  
}
presentation();
