function componentFooter(e){

    const footerEl = document.createElement("div");
    footerEl.innerHTML=`
    <div class="footer-container">
    <a href="./index.html">         
    <img class="footer-container__logo-img" src="./imgs/logo-empresa.svg" alt="">
    </a>
    <div class="footer-container__social-networks">
        <div class=social-networks-content>
            <a class="social-networks-content__link" href="https://instagram.com">
                <img class="social-networks-content__logo" src="./imgs/logo-instagram.svg" alt="">
                <p class="social-networks-content__font">Instagram</p>
            </a>
        </div>
        <div class=social-networks-content>
            <a class="social-networks-content__link" href="https://Linkedin.com">
                <img class="social-networks-content__logo" src="./imgs/logo-linkedin.svg" alt="">
                <p class="social-networks-content__font">Linkedin</p>
            </a>
        </div>
        <div class=social-networks-content>
            <a class="social-networks-content__link" href="https://Github.com">
                <img class="social-networks-content__logo" src="./imgs/logo-github.svg" alt="">
                <p class="social-networks-content__font">Github</p>
            </a>
        </div>
    </div>
</div> `;
    
    e.appendChild(footerEl);
    
    }

    




