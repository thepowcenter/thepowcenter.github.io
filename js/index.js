Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'rlin656565@gmail.com',
    From : "richardlin4375@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body (hehe)"
}).then(
  message => alert("h")
);