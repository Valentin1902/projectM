import { actors } from "./home.js";
function createCard(actor) {
  const liCardWrapper = document.createElement("li");
  liCardWrapper.classList.add("card-wrapper");

  const articleCardContainer = document.createElement("article");
  articleCardContainer.classList.add("card-container");

  const imgCardPhoto = document.createElement("img");
  imgCardPhoto.classList.add("card-photo");
  imgCardPhoto.setAttribute("src", actor.profilePicture);
  imgCardPhoto.setAttribute("alt", `${actor.firstName} ${actor.lastName}`);

  const h2CardFullName = document.createElement("h2");
  h2CardFullName.classList.add("card-fullName");
  h2CardFullName.textContent = `${actor.firstName} ${actor.lastName}`;

  const socialIcons = document.createElement("div");
  socialIcons.classList.add("social-icons");

  if (actor.contacts[0]) {
    const facebookIcon = document.createElement("img");
    facebookIcon.classList.add("social-icon");
    facebookIcon.src =
      "https://s1.iconbird.com/ico/2013/6/271/w513h5131371296104Facebook.png";
    facebookIcon.alt = "Facebook";
    facebookIcon.style.width = "25px";
    facebookIcon.style.height = "25px";
    facebookIcon.onclick = () => {
      window.open(actor.contacts[0], "_blank");
    };
    socialIcons.appendChild(facebookIcon);
  }

  const twitterIcon = document.createElement("img");
  twitterIcon.classList.add("social-icon");
  twitterIcon.src = "https://cdn-icons-png.flaticon.com/512/145/145812.png";
  twitterIcon.alt = "Twitter";
  twitterIcon.style.width = "25px";
  twitterIcon.style.height = "25px";
  twitterIcon.onclick = () => {
    window.open(actor.contacts[1], "_blank");
  };
  socialIcons.appendChild(twitterIcon);

  if (actor.contacts[2]) {
    const instagramIcon = document.createElement("img");
    instagramIcon.classList.add("social-icon");
    instagramIcon.src =
      "https://cdn-icons-png.freepik.com/512/4494/4494488.png";
    instagramIcon.alt = "Instagram";
    instagramIcon.style.width = "25px";
    instagramIcon.style.height = "25px";
    instagramIcon.onclick = () => {
      window.open(actor.contacts[2], "_blank");
    };
    socialIcons.appendChild(instagramIcon);
  }

  articleCardContainer.append(imgCardPhoto, h2CardFullName, socialIcons);
  liCardWrapper.append(articleCardContainer);

  liCardWrapper.addEventListener("click", () => {
    addToChosenList(`${actor.firstName} ${actor.lastName}`);
  });

  return liCardWrapper;
}

function addToChosenList(actorFullName) {
  const chosenList = document.getElementById("chosen-list");

  const li = document.createElement("li");
  li.textContent = actorFullName;

  chosenList.appendChild(li);
}

const HTMLCards = actors.map((actor) => createCard(actor));
const ulCardsList = document.getElementById("cards-list");
ulCardsList.append(...HTMLCards);
