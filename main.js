//  Data to represent all cards in a Tarot Deck Major and Minor arcanas
const tarotDeck ={
    tarotMajor : ['The Fool', ' The Magician', 'The High Priestess', 'The Empress','The Empreror', 'The Hieorphant', 'The Lovers', 
'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil','Tower', 'The Star',
'The Moon', 'The Sun', 'Judgement', 'The World'],
    tarotMinor :['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
'Nine', 'Ten', 'Page','Knight', 'Queen', 'King'],
    tarotMinorType : ['Cups', 'Swords', 'Wands', 'Pentacles']
}


// Random number generator based on the length
function generateRandomNumber(length) {
    return  Math.floor(Math.random() * length)
}

// this will pick a random tarot card, it's not truely random, need to think through
function pickRandomTarot(){
    let tarotPick =[tarotDeck.tarotMajor[generateRandomNumber(tarotDeck.tarotMajor.length)], tarotDeck.tarotMinor[generateRandomNumber(tarotDeck.tarotMinor.length)] + " of " + tarotDeck.tarotMinorType[generateRandomNumber(tarotDeck.tarotMinorType.length)] ]
    return tarotPick[generateRandomNumber(2)]

}
// the Tarot spread, I need to rethink that a card can only be pick once. 
function tarotSpread(name){
    let past = pickRandomTarot()
    let present = pickRandomTarot()
   
    let future = pickRandomTarot()
     if(present == past || present == future ){
        present = pickRandomTarot()
     }
     if(future == past || future == present){
        future = pickRandomTarot()
     }
    console.log('Hello ' + name + ', here is your Past, Present and Future reading:')
    console.log('Past: ' + past)
    console.log('Present: ' + present)
    console.log('Future: ' + future)
}

// test function of tarot Spread, can I add the meaning of cards.
tarotSpread('Sam')
//console.log(tarotDeck.tarotMajor[generateRandomNumber(tarotDeck.tarotMajor.length)])
//console.log(tarotDeck.tarotMinor[generateRandomNumber(tarotDeck.tarotMinor.length)] + " of " + tarotDeck.tarotMinorType[generateRandomNumber(tarotDeck.tarotMinorType.length)])