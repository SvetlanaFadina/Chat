
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


  const dropZone = document.querySelector(".user-info");
  const input = document.querySelector(".user-photo__input");
  let file;

 

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();

    console.log(e.dataTransfer);

    file = e.dataTransfer.files[0];

    console.log(file);

    
  });

  dropZone.addEventListener("click", () => {
    input.click();
    input.addEventListener("change", () => {
      console.log(input.files);

      file = input.files[0];

      console.log(file);

      setPhoto();
      
    });
  });

  

  function setPhoto(photo) {
    const userPhoto = document.querySelector(".user-photo")
    userPhoto.style.backgroundImage = `url("${photo}")`;
  }
  
//////////
function messageList () {
  
  const messageInput = document.querySelector('.message-input');
  const messageSendButton = document.querySelector('.send-button');

   messageSendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    console.log('click');

    if (message) {
     this.messageInput(message);
    }
    function clear() {
      messageInput.value = '';
     }
  });
  messageList();
}
const messageInput = document.querySelector('.message-input');
const messageSendButton = document.querySelector('.send-button');

messageSendButton.addEventListener ('click', () => {
  const message = messageInput.value;
  console.log(message);
  
  if (message) {
    const messageList = document.querySelector('.messages-container');
  
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const time = `${hours}:${minutes}`;
    const item = document.createElement('div');
    const name = nameInput.value;

    item.classList.add('message-item');
    item.innerHTML = `
    <div class="message-item-left">
        <div
        style="background-image: data-user=${name}=${Date.now()})" 
        class="message-item-photo" data-role="user-avatar" data-user=${name}></div>
       
    </div>
    <div class="message-item-right">
      <div class="message-item-header">
         
          <div class="message-item-header-time">${time}</div>
      </div>
      <div class="message-item-text">${message}</div>
    </div>
    `;

    messageList.append(item);
    function clear() {
      messageInput.value = '';
    }
    clear();
  }
   
   }
  
 );
////////
  

   function buildDOM() {
    const fragment = document.createDocumentFragment();
    const element = document.createElement('div');
    const items = new Set();
  

    element.innerHTML = '';

    for (const name of items) {
     
      element.classList.add('user-list-item');
      element.textContent = name;
      fragment.append(element);
    }
    
    element.append(fragment);
  }

  function add(user) {
    items.add(user);
    buildDOM();
  }

  function remove(user) {
    items.delete(user);
    buildDOM();
  }


const friendsButton = document.querySelector('.left-side__button');

  friendsButton.addEventListener('click', () => {
    console.log('click');
    buildDOM();
  })