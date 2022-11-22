function assidebar(){   
    var asside = document.getElementById("asside");
    var btn1 = document.getElementById("asside_btn1");
    var btn2 = document.getElementById("asside_btn2");
    var home = document.getElementById("home");
    var asside_nav = document.getElementById("asside_nav");
    var home_platte = document.getElementById("home_platte");
    var home_text_picture = document.getElementById("home_text_picture");
    asside.style.width = "25%";
    asside.style.display = "block";
    home.style.width = "75%";
    btn1.style.display = "none";
    btn2.style.display = "block";
    asside_logo.style.display = "block";
    asside_nav.style.display = "block";
}
function goBack(){
    var asside = document.getElementById("asside");
    var btn1 = document.getElementById("asside_btn1");
    var btn2 = document.getElementById("asside_btn2");
    var home = document.getElementById("home");
    var asside_nav = document.getElementById("asside_nav");
    var home_platte = document.getElementById("home_platte");
    var platte = document.getElementById("platte");
    var coloricon = document.getElementById("coloricon");
    var color_icon = document.getElementById("color_icon");
    var home_text_picture = document.getElementById("home_text_picture");
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
    var heading1 = document.getElementById("h2-1");
    var heading2 = document.getElementById("h2-2");
    var button = document.getElementById("button");
    var image = document.getElementById("image");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "orangered";
    heading2.style.color = "orangered";
    button.style.backgroundColor = "orangered";
    image.style.borderBottom = "3px solid orangered";
    portfolio.style.borderBottom = "2px solid orangered";
}
function color2(){
    var heading1 = document.getElementById("h2-1");
    var heading2 = document.getElementById("h2-2");
    var button = document.getElementById("button");
    var image = document.getElementById("image");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "rgba(16, 236, 34)";
    heading2.style.color = "rgba(16, 236, 34)";
    button.style.backgroundColor = "rgba(16, 236, 34)"; 
    image.style.borderBottom = "3px solid rgba(16, 236, 34)";
    portfolio.style.borderBottom = "2px solid rgba(16, 236, 34)";
}
function color3(){
    var heading1 = document.getElementById("h2-1");
    var heading2 = document.getElementById("h2-2");
    var button = document.getElementById("button");
    var image = document.getElementById("image");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "rgba(220, 16, 196)";
    heading2.style.color = "rgba(220, 16, 196)";
    button.style.backgroundColor = "rgba(220, 16, 196)";
    image.style.borderBottom = "3px solid rgba(220, 16, 196)";
    portfolio.style.borderBottom = "2px solid rgba(220, 16, 196)";
}
function color4(){
    var heading1 = document.getElementById("h2-1");
    var heading2 = document.getElementById("h2-2");
    var button = document.getElementById("button");
    var image = document.getElementById("image");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = " rgba(220, 223, 9)";
    heading2.style.color = " rgba(220, 223, 9)";
    button.style.backgroundColor = " rgba(220, 223, 9)";
    image.style.borderBottom = "3px solid  rgba(220, 223, 9)";
    portfolio.style.borderBottom = "2px solid  rgba(220, 223, 9)";
}