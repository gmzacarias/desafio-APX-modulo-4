function componentHeader(e){

    const headerEl = document.createElement("div");
    headerEl.innerHTML=`
    <div class="header-container">
            <div class="header-container__logo">
            <a href="./index.html">  
            <img class="container__logo-img" src="./imgs/logo-empresa.svg" alt="logo corporativo">
            </a>
            </div>
            <div class="header-container__nav-mobile">
                <div class="nav-mobile__modal"></div>
                <div class="nav-mobile__modal"></div>
                <div class="nav-mobile__modal"></div>
            </div>
            <div class="header-container__modal">
                <div class="modal__container-button">
                    <button class="container-button__cierra-ventana">X</button>
                </div>
                <div class="modal__container-links">
                    <a class="container-links__font" href="./portfolio.html">Portfolio</a>
                    <a class="container-links__font" href="./servicios.html">Servicios</a>
                    <a class="container-links__font" href="./contacto.html">Contacto</a>
                </div>
            </div>
            <div class="header-container__nav-desktop">
                <a class="container-links__font" href="./portfolio.html">Portfolio</a>
                <a class="container-links__font" href="./servicios.html">Servicios</a>
                <a class="container-links__font" href="./contacto.html">Contacto</a>

            </div>
        </div> `;
    
    e.appendChild(headerEl);
    
    
    /*menu-modal*/
    function getModal(){
    const botonAbreVentana = headerEl.querySelector(".header-container__nav-mobile");
    const botonCierraVentana = headerEl.querySelector(".container-button__cierra-ventana")
    const ventanaEl = headerEl.querySelector(".header-container__modal");
    
    botonAbreVentana.addEventListener("click",()=>{
        ventanaEl.style.display = "inherit";
    })
    
    botonCierraVentana.addEventListener("click",()=>{
        ventanaEl.style.display = "";
    })
    }
    getModal();

    }

    




