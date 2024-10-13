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

  imgCardPhoto.style.width = "100px";
  imgCardPhoto.style.height = "100px";
  imgCardPhoto.style.borderRadius = "50%";
}

const stringToColour = (str) => {
  let hash = 0;
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;

  const initialsContainer = document.createElement("div");
  initialsContainer.classList.add("card-initials");
  initialsContainer.textContent = `${actor.firstName[0]}${actor.lastName[0]}`;
  initialsContainer.style.display = "none";

  const bgColor = stringToColour(`${actor.firstName} ${actor.lastName}`);
  initialsContainer.style.backgroundColor = bgColor;
  initialsContainer.style.color = "#fff";
  initialsContainer.style.width = "100px";
  initialsContainer.style.height = "100px";
  initialsContainer.style.display = "flex";
  initialsContainer.style.justifyContent = "center";
  initialsContainer.style.alignItems = "center";
  initialsContainer.style.fontSize = "2em";
  initialsContainer.style.borderRadius = "50%";

  const h2CardFullName = document.createElement("h2");
  h2CardFullName.classList.add("card-fullName");
  h2CardFullName.textContent = `${actor.firstName} ${actor.lastName}`;

  imgCardPhoto.onload = () => {
    imgCardPhoto.style.display = "block";
    initialsContainer.style.display = "none";
  };

  imgCardPhoto.onerror = () => {
    imgCardPhoto.style.display = "none";
    initialsContainer.style.display = "flex";

    h2CardFullName.style.marginTop = "13px";
  };

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
    facebookIcon.style.marginTop = "40px";
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
  twitterIcon.style.marginTop = "40px";
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
    instagramIcon.style.marginTop = "40px";
    instagramIcon.onclick = () => {
      window.open(actor.contacts[2], "_blank");
    };
    socialIcons.appendChild(instagramIcon);
  }

  articleCardContainer.append(
    imgCardPhoto,
    initialsContainer,
    h2CardFullName,
    socialIcons
  );
  liCardWrapper.append(articleCardContainer);

  liCardWrapper.addEventListener("click", () => {
    addToChosenList(`${actor.firstName} ${actor.lastName}`);
  });

  return liCardWrapper;
};

function addToChosenList(actorFullName) {
  const chosenList = document.getElementById("chosen-list");

  const li = document.createElement("li");
  li.textContent = actorFullName;

  chosenList.appendChild(li);
}

const HTMLCards = actors.map((actor) => createCard(actor));
const ulCardsList = document.getElementById("cards-list");
ulCardsList.append(...HTMLCards);
