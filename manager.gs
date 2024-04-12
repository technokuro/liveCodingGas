const start = (isStart) => {
  if (!!isStart) {
    save("isStart", true);
  }
}

const getStatus = () => {
  let status = 0;
  if (get("isStart")) {
    status = 1;
  }

  let isAllUserDecide = true;
  const users = get("cards").map((card) => {
    if (!decide in card) {
      isAllUserDecide = false;
    }
    return {
      name: card.name,
      card: card.rank
    }
  });
  if (isAllUserDecide) {
    status = 2;
  }

  const returnValue = {
    users,
    status
  };
}

const setDeside = (status, userName) => {
  const cards = get("cards").map((card) => {
    if (card.name === userName) {
      card.decide = status;
    }
    return card;
  });
  save("cards", cards);
}