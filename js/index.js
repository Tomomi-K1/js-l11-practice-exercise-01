const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector ("select");
let numUsers = "";


const getData= async function(numUsers){
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
  
    const userResults = data.results;

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
};

const dropDownMenu = document.querySelector(".num-users");
dropDownMenu.classList.remove("hide");

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers);
  });