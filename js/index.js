const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector ("select");
let numUsers = "";

selectUserNumber.addEventListener("change", function (e) {
    numUsers = e.target.value;
    getData(numUsers);
  });

const getData= async function(){
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
  
    const userResults = data.results;

    displayUsers (userResults);
}

getData(1);

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

