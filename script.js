const user = "https://api.github.com/users/Hateful328";
const body = document.body;
  
fetch(user)
    .then(res => res.json())
    .then(json => { 
    console.log(json.html_url)
    console.log(json.avatar_url)
    console.log(json.bio)
    console.log(json.name);
    
    const avatar = new Image();
        avatar.src = json.avatar_url;
        body.append(avatar);
    
    const name = document.createElement("p");
        if (json.name === null) {
            name.innerHTMl = "Информация о пользователе не доступна";
        }
        else {
             name.innerHTMl = json.name;
    }
    body.append(name);
    
    const bio = document.createElement("p");
        if (json.bio != null) {
            bio.innerHTMl = json.bio;
        }
        else {
        bio.innerHTMl = "Информация о пользователе не доступна";
    }
    body.append(bio);
    
    
    console.log(name);
    console.log(bio);
    console.log(avatar);
    
})
.catch(err => alert('Информация о пользователе недоступна'));