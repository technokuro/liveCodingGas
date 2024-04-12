const CARDS = [
    {"rank": "2"},
    {"rank": "3"},
    {"rank": "4"},
    {"rank": "5"},
    {"rank": "6"},
    {"rank": "7"},
    {"rank": "8"},
    {"rank": "9"},
    {"rank": "10"},
    {"rank": "J"},
    {"rank": "Q"},
    {"rank": "K"},
    {"rank": "A",},
    {"rank": "Joker"}
  ]
function distribution(userName,nickName) {
  let cards = CARDS;
  let _cards = get("cards");
  if (_cards !== undefined){
    cards = _cards;
  }
  // nameが紐づいていないカードのみをフィルタリング
  const availableCards = cards.filter(card => !card.name && card.status == 1);
  // 利用可能なカードがあるかどうかを確認
  if (availableCards.length > 0) {
    // 利用可能なカードからランダムに選択
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const selectedCard = availableCards[randomIndex];
    // 選択したカードにname,nickNameプロパティを追加
    selectedCard.name = userName;
    selectedCard.nickName = nickName
    // 変更されたカードをcards配列に反映
    const originalCardIndex = cards.findIndex(card => card.rank === selectedCard.rank);
    if (originalCardIndex !== -1) {
      cards[originalCardIndex] = selectedCard;
    }
    return selectedCard;
  } else {
    // 利用可能なカードがない場合は、それを通知
    console.log("All cards have been distributed.");
  }
  util.save("cards",selectedCard)
}
function getCardsWithName() {
  // nameプロパティが存在するカードのみをフィルタリング
  const cardsWithName = cards.filter(card => card.name !== undefined);
  return cardsWithName;
}