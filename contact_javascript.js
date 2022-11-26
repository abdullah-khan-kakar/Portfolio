function assidebar(){   
    var asside = document.getElementById("asside");
    var btn1 = document.getElementById("asside_btn1");
    var btn2 = document.getElementById("asside_btn2");
    var home = document.getElementById("home");
    var asside_nav = document.getElementById("asside_nav");
    var asside_logo = document.getElementById("asside_logo");
    asside.style.width = "25%";
    asside.style.position = "fixed";
    asside.style.display = "block";
    home.style.width = "75%";
    home.style.marginLeft = "25%";
    btn1.style.display = "none";
    btn2.style.display = "block";
    asside_logo.style.display = "block";
    asside_nav.style.display = "block";
    asside_logo.style.textAlign = "center";
    asside_nav.style.paddingLeft = "5px";
}
function goBack(){
    var asside = document.getElementById("asside");
    var btn1 = document.getElementById("asside_btn1");
    var btn2 = document.getElementById("asside_btn2");
    var home = document.getElementById("home");
    var asside_nav = document.getElementById("asside_nav");
    home.style.marginLeft = "0%";
    asside.style.width = "0%";
    btn1.style.display = "block";
    btn2.style.display = "none";
    home.style.width = "100%";
    asside_logo.style.display = "none";
    asside_nav.style.display = "none";
}
function allcolors(){
    var cross_icon  = document.getElementById("cross");
    var platte = document.getElementById("platte");
    var color_icon = document.getElementById("coloricon");
    cross_icon.style.display = "block";
    platte.style.display = "block";
    color_icon.style.display = "none";
}
function cross() {
    var cross_icon  = document.getElementById("cross");
    var platte = document.getElementById("platte");
    var color_icon = document.getElementById("coloricon");
    cross_icon.style.display = "none";
    platte.style.display = "none";
    color_icon.style.display = "block";
}
function color1(){
    var heading1 = document.getElementById("question_1");
    var heading2 = document.getElementById("question_2");
    var button = document.getElementById("submit_button");
    var icon1 = document.getElementById("icon_1");
    var icon2 = document.getElementById("icon_2");
    var icon3 = document.getElementById("icon_3");
    var icon4 = document.getElementById("icon_4");
     var portfolio = document.getElementById("portfolio");
    heading1.style.color = "orangered";
    heading2.style.color = "orangered";
    button.style.backgroundColor = "orangered";
    button.style.color = " white";
    icon1.style.color = "orangered";
    icon2.style.color = "orangered";
    icon3.style.color = "orangered";
    icon4.style.color = "orangered";
     portfolio.style.borderBottom = "2px solid orangered";
}
function color2(){
    var heading1 = document.getElementById("question_1");
    var heading2 = document.getElementById("question_2");
    var button = document.getElementById("submit_button");
    var icon1 = document.getElementById("icon_1");
    var icon2 = document.getElementById("icon_2");
    var icon3 = document.getElementById("icon_3");
    var icon4 = document.getElementById("icon_4");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "rgba(16, 236, 34)";
    heading2.style.color = "rgba(16, 236, 34)";
    button.style.backgroundColor = "rgba(16, 236, 34)"; 
    button.style.color = " black";
    icon1.style.color = "rgba(16, 236, 34)";
    icon2.style.color = "rgba(16, 236, 34)";
    icon3.style.color = "rgba(16, 236, 34)";
    icon4.style.color = "rgba(16, 236, 34)";
    portfolio.style.borderBottom = "2px solid rgba(16, 236, 34)";
}
function color3(){
    var heading1 = document.getElementById("question_1");
    var heading2 = document.getElementById("question_2");
    var button = document.getElementById("submit_button");
    var icon1 = document.getElementById("icon_1");
    var icon2 = document.getElementById("icon_2");
    var icon3 = document.getElementById("icon_3");
    var icon4 = document.getElementById("icon_4");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "rgba(220, 16, 196)";
    heading2.style.color = "rgba(220, 16, 196)";
    button.style.backgroundColor = "rgba(220, 16, 196)";
    button.style.color = " white";
    icon1.style.color = "rgba(220, 16, 196)";
    icon2.style.color = "rgba(220, 16, 196)";
    icon3.style.color = "rgba(220, 16, 196)";
    icon4.style.color = "rgba(220, 16, 196)";
    portfolio.style.borderBottom = "2px solid rgba(220, 16, 196)";
}
function color4(){
    var heading1 = document.getElementById("question_1");
    var heading2 = document.getElementById("question_2");
    var button = document.getElementById("submit_button");
    var icon1 = document.getElementById("icon_1");
    var icon2 = document.getElementById("icon_2");
    var icon3 = document.getElementById("icon_3");
    var icon4 = document.getElementById("icon_4");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = " rgba(220, 223, 9 , 0.900)";
    heading2.style.color = " rgba(220, 223, 9 )";
    button.style.backgroundColor = " rgba(220, 223, 9 )";
    button.style.color = " black";
    icon1.style.color = "rgba(220, 223, 9 )";
    icon2.style.color = "rgba(220, 223, 9 )";
    icon3.style.color = "rgba(220, 223, 9 )";
    icon4.style.color = "rgba(220, 223, 9 )";
    portfolio.style.borderBottom = "2px solid  rgba(220, 223, 9 )";
}
function form_error(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    var name_p = document.getElementById("name_p");
    var email_p = document.getElementById("email_p");
    var password_p = document.getElementById("password_p");
    var message_p = document.getElementById("message_p");
    if(name.value.trim() == ""){
         name.style.border = "1px solid red"
         name_p.innerText = "Enter your name . . .";
         name_p.style.display = "block";
        return false;
    }
    else if(name.value.trim().length >= 19){
        name.style.border = "1px solid red"
        name_p.innerText = "Name should be smaller than 20 alphabets . . .";
        name_p.style.display = "block";
       return false;
    }
    else if(email.value.trim() == ""){
        email.style.border = "1px solid red"
        email_p.innerText = "Please enter your email . . .";
        email_p.style.display = "block";
       return false;
   }
   else if(password.value.trim() == ""){
    password.style.border = "1px solid red"
    password_p.innerText = "Enter your email password . . .";
    password_p.style.display = "block";
   return false;
   }
   else if(password.value.trim().length <= 5){
    password.style.border = "1px solid red"
    password_p.innerText = "Password should be greater than 5 digits . . .";
    password_p.style.display = "block";
   return false;
   }
   else if(password.value.trim().length >= 24){
   password.style.border = "1px solid red"
   password_p.innerText = "Password should be smaller than 25 digits . . .";
   password_p.style.display = "block";
   return false;
   }
   else if(message.value.trim() == ""){
    message.style.border = "1px solid red"
    message_p.innerText = "Enter your message . . .";
    message_p.style.display = "block";
   return false;
   }
   else{
    name.style.border = "1px solid green";
    password.style.border = "1px solid green";
    email.style.border = "1px solid green";
    message.style.border = "1px solid green";    
    //name_p.style.display = "none";
    //email_p.style.display = "none";
    //password_p.style.display = "none";
    //message_p.style.display = "none";
   true;
   }
}
function key_name(){
    var name = document.getElementById("name");
    var name_p = document.getElementById("name_p");   
    if(name.value.trim().length <= 19){
        name.style.border = "1px solid green";
        name_p.style.display = "none";
    }
    else{
        name.style.border = "0px solid green";
    }
}
function key_password(){
    var password = document.getElementById("password");
    var password_p = document.getElementById("password_p");
    if(password.value.trim().length >= 5 && password.value.trim().length <= 24){
        password.style.border = "1px solid green";
        // password_p.innerText = "Password should be smaller than 25 digits . . .";
        password_p.style.display = "none";
    }
    else{
        password.style.border = "0px solid green";
    }
}
// function a(){
//     var name = document.getElementById("name");
//     name.style.border= "none";
// }