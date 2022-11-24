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
    var heading1 = document.getElementById("heading_1");
    var line1 = document.getElementById("line_1");
    var line2 = document.getElementById("line_2");
    var line3 = document.getElementById("line_3");
    var line4 = document.getElementById("line_4");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "orangered";
    line1.style.backgroundColor = "orangered";
    line2.style.backgroundColor = "orangered";
    line3.style.backgroundColor = "orangered";
    line4.style.backgroundColor = "orangered";
     portfolio.style.borderBottom = "2px solid orangered";
}
function color2(){
    var heading1 = document.getElementById("heading_1");
    var line1 = document.getElementById("line_1");
    var line2 = document.getElementById("line_2");
    var line3 = document.getElementById("line_3");
    var line4 = document.getElementById("line_4");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "rgba(16, 236, 34)";
    line1.style.backgroundColor = "rgba(16, 236, 34)";
    line2.style.backgroundColor = "rgba(16, 236, 34)";
    line3.style.backgroundColor = "rgba(16, 236, 34)";
    line4.style.backgroundColor = "rgba(16, 236, 34)";
    portfolio.style.borderBottom = "2px solid rgba(16, 236, 34)";
}
function color3(){
    var heading1 = document.getElementById("heading_1");
    var line1 = document.getElementById("line_1");
    var line2 = document.getElementById("line_2");
    var line3 = document.getElementById("line_3");
    var line4 = document.getElementById("line_4");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = "rgba(220, 16, 196)";
    line1.style.backgroundColor = "rgba(220, 16, 196)";
    line2.style.backgroundColor = "rgba(220, 16, 196)";
    line3.style.backgroundColor = "rgba(220, 16, 196)";
    line4.style.backgroundColor = "rgba(220, 16, 196)";
    portfolio.style.borderBottom = "2px solid rgba(220, 16, 196)";
}
function color4(){
    var heading1 = document.getElementById("heading_1");
    var line1 = document.getElementById("line_1");
    var line2 = document.getElementById("line_2");
    var line3 = document.getElementById("line_3");
    var line4 = document.getElementById("line_4");
    var portfolio = document.getElementById("portfolio");
    heading1.style.color = " rgba(220, 223, 9 , 0.900)";
    line1.style.backgroundColor = "rgba(220, 223, 9 )";
    line2.style.backgroundColor = "rgba(220, 223, 9 )";
    line3.style.backgroundColor = "rgba(220, 223, 9 )";
    line4.style.backgroundColor = "rgba(220, 223, 9 )";
    portfolio.style.borderBottom = "2px solid  rgba(220, 223, 9 )";
}