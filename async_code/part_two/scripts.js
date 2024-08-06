

// ONE
async function getCard(){
    let url = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
    let card = await $.getJSON(url);
    console.log(`${card.cards[0].value} OF ${card.cards[0].suit}`);
}

// getCard();

// TWO
async function twoCards(){
    let url = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
    let card = await $.getJSON(url);
    let deck_id = card.deck_id;
    
    let second_url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    let secondCard = await $.getJSON(second_url);
    console.log(`${card.cards[0].value} OF ${card.cards[0].suit}`)
    console.log(`${secondCard.cards[0].value} OF ${secondCard.cards[0].suit}`);
}

// twoCards();

// THREE

const button = document.getElementById("button");
const newDiv = document.getElementById("new_div");


button.addEventListener("click", shuffleDeck);

async function shuffleDeck(){
    let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    let newDeck = await $.getJSON(url);
    let deck_id = newDeck.deck_id;
    console.log(deck_id);
    let oneCardUrl = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    let card = await $.getJSON(oneCardUrl);
    console.log(card.cards[0]);
    let img = document.createElement('img');
    img.src = card.cards[0].images.png;
    newDiv.prepend(img);

}


