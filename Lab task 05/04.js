
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');
  var address = document.getElementById("address").value.trim();
  var ligiId = document.getElementById("ligiId").value.trim();
  var password = document.getElementById("password").value.trim();
  
  var isValid = true;
  
  // Validate Name
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }
  
  // Validate Gender
  if (!gender) {
    document.getElementById("genderError").innerHTML = "Gender is required";
    isValid = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }
  
  // Validate Address
  if (address === "") {
    document.getElementById("addressError").innerHTML = "Address is required";
    isValid = false;
  } else {
    document.getElementById("addressError").innerHTML = "";
  }
  
  // Validate LIGI ID
  if (ligiId === "") {
    document.getElementById("ligiIdError").innerHTML = "LOGIN ID is required";
    isValid = false;
  } else {
    document.getElementById("ligiIdError").innerHTML = "";
  }
  
  // Validate Password
  if (password === "") {
    document.getElementById("passwordError").innerHTML = "Password is required";
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }
  
  return isValid;
}
