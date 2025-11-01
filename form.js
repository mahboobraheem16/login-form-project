let btn = document.getElementById("btn");
let msg = document.querySelector(".frmreqr");
let usernameInput = document.getElementById("un");
let passwordInput = document.getElementById("ps");

// Button event
btn.addEventListener("click", function (e) {
  e.preventDefault();

  let username = usernameInput.value;
  let password = passwordInput.value;

  if (username === "" && password === "") {
    msg.style.color = "red";
    msg.textContent = "⚠️ Please fill in both fields!";
  } else if (username === "admin" && password === "1234") {
    msg.style.color = "green";
    msg.textContent = "✅ Login successful!";
    usernameInput.value = "";
    passwordInput.value = "";
  } else {
    msg.style.color = "red";
    msg.textContent = "❌ Invalid username or password!";
  }
});
