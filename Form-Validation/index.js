function validateForm(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password");
  const pattern = /^(?=.[A-Z])(?=.[!@$#&])(?=.\d).+$/;

  if (password.value.length < 8) {
    console.log("very short");
  } else if (!pattern.test(password.value)) {
    console.log("must include the pattern");
    password.style.border = "red solid 2px";
  } else if (password.value > 8 && pattern.test(password.value) ) {
    alert(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`);
  }
}
