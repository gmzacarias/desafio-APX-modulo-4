function componentPortfolio(e){
    const portfolioEl = document.createElement("div");
    portfolioEl.innerHTML=`
    <template id="portfolio-card-template">
    <div class="portfolio-container">
            <div class="portfolio-container__content">
                <img class="portfolio-container__content-img"src="" alt="">
                <h3 class="portfolio-container__content-title"></h3>
                <p class="portfolio-container__content-description"></p>
                <a class="portfolio-container__content-url" href="">Ver más</a>
            </div>
    </template>
    `;
    e.appendChild(portfolioEl);
    }

function addPortfolioCard(params = {}){
    const templatePortfolio = document.getElementById("portfolio-card-template")
    const containerPortfolio = document.querySelector(".portfolio-card")
    templatePortfolio.content.querySelector(".portfolio-container__content-title").textContent = params.title;
    templatePortfolio.content.querySelector(".portfolio-container__content-description").textContent = params.description;
    templatePortfolio.content.querySelector(".portfolio-container__content-img").src = params.img;
    templatePortfolio.content.querySelector(".portfolio-container__content-url").href = params.url;
    const cloneServiciosCard = document.importNode(templatePortfolio.content, true);
    containerPortfolio.appendChild(cloneServiciosCard);
}


function getPortfolio(){
return fetch("https://cdn.contentful.com/spaces/zh65nw1600gb/environments/master/entries?access_token=CnkYWBJgEaCg7RxxFbTpTqObd09rqVJeonGAq3S55OI&content_type=portfolio&order=sys.createdAt")
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
        img: linkImg,
        url:item.fields.url,
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

function portfolioMain(){
 getPortfolio().then(function(portfolio){
    for(const port of portfolio){
        addPortfolioCard(port);
    }
 })  
}
portfolioMain();


