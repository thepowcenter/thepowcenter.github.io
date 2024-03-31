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

var offset;
if (width >= 1024) {
    offset = 125;
}
else {
    offset=300;
}

document.getElementById("menu-img").onclick = function() {
    window.location.href="./index.html";
};
document.getElementById("menu-home").onclick = function() {
    window.location.href="./index.html";
};
document.getElementById("menu-about").onclick = function() {
    if (window.location.pathname.includes("index")){
        scrollTo({top: document.getElementById("about").offsetTop - offset, behavior: "smooth"});
    }
    else {
        localStorage.setItem("toAbout", "going");
        window.location.href="./index.html";
    }
};
document.getElementById("menu-books").onclick = function() {
    window.location.href="./books.html";
};
document.getElementById("menu-donate").onclick = function() {
    window.location.href="./donate.html";
};
document.getElementById("menu-contact").onclick = function() {
    scrollTo({top: document.getElementById("contact").offsetTop - offset, behavior: "smooth"});
};
