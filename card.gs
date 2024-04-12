const cards = [
    {"rank": "2","power":2},
    {"rank": "3","power":3},
    {"rank": "4","power":4},
    {"rank": "5","power":5},
    {"rank": "6","power":6},
    {"rank": "7","power":7},
    {"rank": "8","power":8},
    {"rank": "9","power":9},
    {"rank": "10","power":10},
    {"rank": "J","power":11},
    {"rank": "Q","power":12},
    {"rank": "K","power":13},
    {"rank": "A","power":14},
    {"rank": "Joker","power":99}
  ]
function isWin(myCard,otherCards) {
  if(myCard == "Joker" && !(otherCards in "2")){
    return true
  }
  if(otherCards in "Joker" && myCard == "2"){
    return true
  }
  const power = cards.find(card => card.rank === myCard);
  otherCards.forEach((element) =>{
    const otherPower = cards.find(card => card.rank === element);
    if(otherPower > power){
      return false
    }
  });
  return true
}