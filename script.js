const user = "https://api.github.com/users/Hateful328";
const body = document.body;

fetch(user)
  .then((res) => res.json())
  .then((json) => {
    console.log(json.html_url);
    console.log(json.avatar_url);
    console.log(json.bio);
    console.log(json.name);

    const avatar = new Image();
    avatar.src = json.avatar_url;
    avatar.className = "avatar";
    body.append(avatar);

    const name = document.createElement("p");
    if (json.name != null) {
      name.innerText = json.name;
    } else {
      name.innerText = "Информация о пользователе не доступна";
      name.classList.add("errr");
    }
    body.append(name);
    name.addEventListener("click", () => (window.location = json.html_url));

    const bio = document.createElement("p");
    if (json.bio != null) {
      bio.innerText = json.bio;
    } else {
      bio.innerText = "Информация о пользователе не доступна";
      bio.classList.add("errr");
    }
    body.append(bio);
  });