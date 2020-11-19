const body = document.body;
const content = document.getElementById("content")
const url = window.location.toString();
const el = url.split("=");
let userName = el[1];
if (userName == undefined) {
	userName = "Hateful328";
} 

const divDate = document.createElement("p");
const date = new Date().toDateString();
const getDate = new Promise ((resolve,reject) => {
	setTimeout( () => date ? resolve([divDate.innerText = date, content.append(divDate)]) : reject("Дата не получена"), 4000);
})	

let load = document.getElementById("preload")
setTimeout(function() {
	load.classList.add("invisible");
	content.className = ('active');
} , 3000);

const getUser = () => {fetch(`https://api.github.com/users/${userName}`)
  .then((res) => res.json())
  .then((json) => {

    const avatar = new Image();
    avatar.src = json.avatar_url;
    avatar.className = "avatar";
    content.append(avatar);
	
		const name = document.createElement("p");
    if (json.name != null) {
      name.innerText = json.name;
    } else {
      name.innerText = "Информация о пользователе не доступна";
      name.classList.add("errr");
    }
    content.append(name);
    name.addEventListener("click", () => (window.location = json.html_url));
    const bio = document.createElement("p");
    if (json.bio != null) {
      bio.innerText = json.bio;
    } else {
      bio.innerText = "Информация о пользователе не доступна";
      bio.classList.add("errr");
    }
    content.append(bio);
  });
return;
};

Promise.all([getUser(), getDate]).then(values => {});