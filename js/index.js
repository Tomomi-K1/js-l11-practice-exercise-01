const randomFolks = document.querySelector(".random-peeps");
console.log(randomFolks);

const getData= async function(){
    const userRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await userRequest.json();
    console.log(data);
    const userResults = data.results;
    console.log(userResults);
    displayUsers (userResults);
}

getData();

const displayUsers = function(userResults){
    randomFolks.innerHTML = "";
    
    for (const user of userResults ){
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        console.log(country, name, imageUrl);

        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src = ${imageUrl} alt = "User avatar" />
            `;
        randomFolks.append(userDiv);

    };



    

}