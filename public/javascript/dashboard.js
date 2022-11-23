// Elemets
const allCards = document.querySelectorAll(".card");
const updateButtons = document.querySelectorAll(".cardUpdate");

// Cartes
for (const card of allCards) {
  card.addEventListener("mouseenter", (event) => {
    event.currentTarget.classList.add("cardSelected");
    toggleHidden(card.children);
  });

  card.addEventListener("mouseleave", (event) => {
    const card = event.currentTarget;
    card.classList.remove("cardSelected");
    if (!card.classList.contains("scale")) {
        toggleHidden(card.children);
    }
    card.classList.remove("scale");
  });
}

// boutons MODIFIER
for (const button of updateButtons) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const card = event.currentTarget.parentNode;
    card.classList.toggle("scale");
    card.classList.remove("cardSelected");
    toggleHidden(card.children);
  });
}

// METHODES
const toggleHidden = (array) =>{
    for (const element of array) {
        element.classList.toggle("hidden");
    }
}


// penser à event.stopPropagation()