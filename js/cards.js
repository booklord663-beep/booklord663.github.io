// js/cards.js
fetch("data/cards.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("card-container");

data.cards.forEach(card => {

const div = document.createElement("div");
div.className="card";

div.innerHTML = `
<h3>${card.name}</h3>
<p>ATK ${card.atk}</p>
<p>DEF ${card.def}</p>
`;

container.appendChild(div);

});

});
