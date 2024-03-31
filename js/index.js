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
