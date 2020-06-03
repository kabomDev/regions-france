//tableau des chef-lieux
var chef_lieu = {
  PACA: "Marseille",
  "HAUT DE FRANCE": "Lille",
  "GRAND EST": "Strasbourg",
  NORMANDIE: "Rouen",
  BRETAGNE: "Rennes",
  "PAYS DE LA LOIRE": "Nantes",
  "CENTRE VAL DE LOIRE": "Orleans",
  "ILE DE FRANCE": "Paris",
  "BOURGOGNE FRANCHE COMPTE": "Dijon",
  "AUVERGNE RHONE ALPES": "Lyon",
  "NOUVELLE AQUITAINE": "Bordeaux",
  OCCITANIE: "Toulouse",
  CORSE: "Ajaccio-Bastia",
};

/*================================================================*/
//on récupère le svg
const map = document.querySelector("svg");
//on récupère toutes les régions
const path = document.querySelectorAll("path");

//a chaque fois qu'on va cliquer sur une région
path.forEach((region) => {
  region.addEventListener("click", function () {
    //on récupère l'id
    id = region.id;
    //on enlève les tirets et on met en majuscule
    name = id.substring(7).replace(/_/g, " ").toUpperCase();
    //sur le svg, on cherche toutes les classes isActive
    map.querySelectorAll(".is_active").forEach(function (item) {
      //on retire la classe
      item.classList.remove("is_active");
      //on remet la couleur d'origine
      item.style.fill = "#048BB5";
      //on retire tout le texte de la section info-map sauf le titre
      document.querySelector(".info-map").innerHTML =
        "<h2>Nom de la région</2>";
    });

    //on ajoute la classe sur la région séléctionnée
    region.classList.add("is_active");
    //on lui donne une nouvelle couleur
    region.style.fill = "#06B280";

    //on ajoute le nom de la région
    document
      .querySelector(".info-map")
      .insertAdjacentHTML("beforeend", "<p>" + name + "</p>");

    //pour chaque région, on y ajoute son chef-lieu et une image
    for (let key in chef_lieu) {
      let value = chef_lieu[key];
      if (name === key) {
        document
          .querySelector(".info-map")
          .insertAdjacentHTML(
            "beforeend",
            `<p><strong>Chef-lieu: ${value}</strong></p>`
          );
        document
          .querySelector(".info-map")
          .insertAdjacentHTML(
            "beforeend",
            `<img class="chef-lieu" src="images/${value}.jpg" alt="${value}">`
          );
      }
    }
  });
});
