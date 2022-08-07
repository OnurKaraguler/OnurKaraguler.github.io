let form_submit = document.querySelector(".contact .box-container .form_container form .row .submitBox input");

// let inputs = document.querySelectorAll(".contact .box-container .form_container form .row .inputBox input");

// inputs.forEach((input) => {
//   console.log(input.value)
// });

form_submit.addEventListener("click", () => {
  let inputs = document.querySelectorAll(".contact .box-container .form_container form .row .inputBox input");

  let fname = inputs[0].value
  let lname = inputs[1].value
  let email = inputs[2].value
  let mobile = inputs[3].value
  
  let text_ = document.querySelector(".contact .box-container .form_container form .row .inputBox textarea").value.replaceAll("\n", "<br>");

  console.log({text_})

  Email.send({
    SecureToken: "3d5f88ce-5342-4de6-89db-32816b7e3245",
    Host: "smtp.elasticemail.com",
    Username: "pythonurk@gmail.com",
    Password: "496940830CF2D4747F28ED719DF047E6ABAA",
    To: 'onurkaraguler@hotmail.com',
    From: "pythonurk@gmail.com",
    Subject: "Email from my webpage",
    Body: 
    
    "<br><br><br>First name: " + fname + 
    "<br>Last name: " + lname +
    "<br>Email: " + email +
    "<br>Mobile: " + mobile +
    "<br>Message: " + text_
  }).then(
    message => alert(message)
  );
  
  inputs.forEach((input) => {
  input.value = "";
  });

  document.querySelector(".contact .box-container .form_container form .row .inputBox textarea").value = "";
  
})
