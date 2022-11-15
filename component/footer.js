




/*
  =====  Footer =====
*/

class footerSecion extends HTMLElement{
    connectedCallback(){
      this.innerHTML =`
      <section class="contact">
      <div class="text-box">
        <h1>Enroll For Our Various Online Courses
          <br>  Anywhere from the World</h1>
            <button class="btn"><a class="white"> Visit us to know more</a></button>
      </div>
    </section>
      <section class="about">
       <h2>Contact Me</h2>
          <div class="social-icons">
          
          <a href="https://www.linkedin.com/in/raunak-sharma-72202822b"><img class="social-icon" src="./Photos/social-img/icons8-linkedin-2.gif" alt=""></a>
          
          <a href="https://github.com/Sharma572"><img class="social-icon"  src="./Photos/social-img/icons8-github.gif" alt=""></a>
          
          <a href="www.facebook.com"><img class="social-icon" src="./Photos/social-img/icons8-facebook-64.png" alt=""></a>
  
          <a href="www.gmail.com"><img class="social-icon" class="social-icon"  src="./Photos/social-img/icons8-gmail-48.png"alt=""></a>
  
          <a href="www.instagram.com"><img class="social-icon"  src="./Photos/social-img/icons8-instagram.gif"></a>
  
      </div>
      <h4 class="rights">All Rigths are Reserved By ❤️ A.U.I.D@OpenLab</h4>
  </section>
      `
    }
  }
//   customElements.define('my-header', MyHeader);
  customElements.define("footer-section",footerSecion);
  
