import {navbar} from "../components/navbar.js"
   let header=document.getElementById("nav");
   header.innerHTML=navbar();

   document.getElementById("about").onclick=function(){
    window.location.href="about.html"
  }
  document.getElementById("contact").onclick=function(){
      location.href="contact.html"
  }
  document.getElementById("signin").onclick=function(){
      location.href="signin.html"
  }
  document.getElementById("signup").onclick=function(){
      location.href="signup.html"
   }

   import {footer} from "../components/footer.js"
   let foot=document.getElementById("footer");
   foot.innerHTML=footer();



   document.getElementById("butt1").onclick=function(){
         window.location.href="details.html"
       }
    
   document.getElementById("butt2").onclick=function(){
    window.location.href="details.html"
  }
  document.getElementById("butt3").onclick=function(){
    window.location.href="details.html"
  }
  document.getElementById("butt4").onclick=function(){
    window.location.href="details.html"
  }