AOS.init()
setInterval(function() {
    if (window.screen.width < 1024) { AOS.init({disable: true});}
}, 1000);
let width = window.screen.width;
if (width > 1024) {
    setInterval(function () {
    if (window.scrollY <= 100) {
        document.getElementById("menu").style = "box-shadow: none";
    }
    else {
        document.getElementById("menu").style = "box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);";
    }
}, 10)
}