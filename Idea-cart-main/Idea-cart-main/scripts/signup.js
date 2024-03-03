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

  document.getElementById("sign").onclick=function(){
      window.location.href="signin.html"
      alert("you are registered successfully") 
  }

   function store(){
       var name=document.getElementById("name").value
        console.log(name)
       var mobile=document.getElementById("mobile").value
       console.log(mobile)
       var email=document.getElementById("email").value
       console.log(email)
       var pass=document.getElementById("pass").value
       console.log(pass)
       var cpass=document.getElementById("cpass").value
       console.log(cpass)

       if(name.length>=4)
       {
           alert("please fill mobile number")
       }
      else if(mobile.length==10)
       {
           alert("please fill email")
       }
       else if(email.length>4)
       {
           alert("please fill the password")
       }
       else if(pass.length>=6)
       {
           alert("please fill the conformation password")
       }
        else if(cpass.length==pass)
       {
        //    alert("you are registered successfully")
        localStorage.setItem("name",name.value)
        localStorage.setItem("mobile",mobile.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("pass",pass.value)
        localStorage.setItem("cpass",cpass.value)
        alert("you are registered successfully") 
       }
       else{
        //    localStorage.setItem("name",name)
        //    localStorage.setItem("mobile",mobile)
        //    localStorage.setItem("email",email)
        //    localStorage.setItem("pass",pass)
        //    localStorage.setItem("cpass",cpass)
        //    alert("you are registered successfully") 
       }
   }

 
