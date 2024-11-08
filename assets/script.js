function validateForm() {
    const uname = document.getElementById("uname").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const unameError = document.getElementById("unameError");
    const passError = document.getElementById("passError");
    const errorDiv = document.getElementById("error");
  
    unameError.textContent = "";
    passError.textContent = "";
  
    let valid = true;

    if (uname === "") {
      unameError.textContent = "required";
      valid = false;
    }
  
    if (pass === "") {
      passError.textContent = "required";
      valid = false;
    }

    if (uname === "admin" && pass === "admin") {
      alert("Successful!");
      return true; 
    } else {
      errorDiv.textContent = "Invalid username or password.";
      errorDiv.style.display = "block";
      return false; 
    }
  }
  