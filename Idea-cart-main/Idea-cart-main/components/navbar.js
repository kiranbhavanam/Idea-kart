 export function navbar(){
    return `
    <h2 style="margin-left:80px;margin-top: 15px; color:rgb(218, 214, 12)">IDEAKART</h2>
            <div id="inp">
                <input type="text" placeholder="search" style="width:120%;height: 80%;margin-bottom: 70px;">
                <button style="margin-left:1px;height:38px;">Search</button>

            </div>
           <div id="abo">
            <p style="margin-right: 50px;" onclick="about()" id="about">About</p>
            <p style="margin-right: 50px;" onclick="contact()" id="contact">Contact</p>
            <p style="margin-right: 50px;" onclick="signin()" id="signin">Sign In</p>
            <p onclick="signup()" id="signup">Sign Up</p>

           </div>
    
    `;
}



