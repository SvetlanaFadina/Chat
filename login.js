export default {
    
const loginButton = document.querySelector(".login-submit");
const loginField = document.querySelector(".login-name-input");
const nameInput = document.querySelector(".login-name-input");
const loginError = document.querySelector("[data-role=login-error]");
const login = document.getElementById("login");
const main = document.getElementById("main");
const UserInfo = document.querySelector(".user-info");


loginError.style.color = "red";

loginButton.addEventListener("click", () => {
  console.log("click");
  loginError.textContent = "";

  const name = nameInput.value;

  if (!name) {
    loginError.textContent = "Введите никнейм";
  } else {
    main.classList.remove("hidden");
    login.classList.add("hidden");
  }
 
  function getName() {
    const userName = document.querySelector(".user-name");
    userName.textContent = name;
    console.log(nameInput.value);
  }
  getName();
});

}
