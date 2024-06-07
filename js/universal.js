AOS.init()
setInterval(function() {
    if (window.screen.width < 1024) { AOS.init({disable: true});}
}, 1000);
let width = window.screen.width;

if (width > 1024) {
    document.getElementById("menubutton").style="display:none";
}
else {
    document.getElementById("menubutton").style="display:block";
}

/*menu*/
var openm = false;
function openmenu() {
    if (openm == false) {
        document.getElementById("menu").style.height = "1900px";
        openm = true;
        document.getElementById("menubutton").style.transform = "rotate(-90deg)";
    }
    else if (openm == true) {
        document.getElementById("menu").style.height = "140px";
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
    }
}

if (width < 1024 && openm == true) {
    document.getElementById("menu").style.height = "1900px";
}
else if (width > 1024) {
    document.getElementById("menu").style.height = "80px";
}










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
        document.getElementById("menu").style.height = "140px";
        openm = false;
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
    document.getElementById("menu").style.height = "140px";
    openm = false;
    scrollTo({top: document.getElementById("contact").offsetTop - offset, behavior: "smooth"});
};

window.addEventListener("load", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener("submit", function(e) {
        document.getElementById("loading2").style="color: var(--orange)";
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        document.getElementById("submit-contact").innerHTML = "Submitted!";
        document.getElementById("submit-contact").style="background: mediumspringgreen; pointer-events: none;";
        document.getElementById("fname").style="pointer-events: none";
        document.getElementById("lname").style="pointer-events: none";
        document.getElementById("cemail").style="pointer-events: none";
        document.getElementById("loading2").style="color: transparent";
      })
    });
  });
  
