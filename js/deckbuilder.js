// js/deckbuilder.js
let deck=[];

function addToDeck(card){
if(deck.length<40){
deck.push(card);
updateDeck();
}
}

function updateDeck(){
const deckDiv=document.getElementById("deck");
deckDiv.innerHTML="";

deck.forEach(c=>{
const d=document.createElement("div");
d.textContent=c.name;
deckDiv.appendChild(d);
});
}
