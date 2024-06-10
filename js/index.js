/*
Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'rlin656565@gmail.com',
    From : "richardlin4375@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body (hehe)"
}).then(
  message => alert("h")
);
*/
var offset ;
if (window.screen.width >= 1024) {
    offset = 125;
}
else {
    offset=300;
}

if (localStorage.getItem("toAbout") == "going") {
  scrollTo({top: document.getElementById("about").offsetTop - offset, behavior: "smooth"});
  localStorage.removeItem("toAbout");
}

window.addEventListener("load", function() {
  const form = document.getElementById('sample-form');
  form.addEventListener("submit", function(e) {
    document.getElementById("loading1").style="color: white";
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      document.getElementById("submit-sample").innerHTML = "Submitted!";
      document.getElementById("submit-sample").style="background: mediumspringgreen; pointer-events: none;";
      document.getElementById("fname-sample").style="pointer-events: none";
      document.getElementById("lname-sample").style="pointer-events: none";
      document.getElementById("cemail-sample").style="pointer-events: none";
      document.getElementById("loading1").style="color: transparent";

    })
  });
});

function yt1() {
  window.open('https://www.youtube.com/watch?v=gZx6U8xdWxw', '_blank');
}
function yt2() {
  window.open('https://www.youtube.com/watch?v=srX9DaNXyws', '_blank');
}
function yt3() {
  window.open('https://www.youtube.com/watch?v=jngVPaon3vY', '_blank');
}

