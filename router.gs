function doGet(e) {
  const userName = Session.getActiveUser().getUsername();
  const parameter = e?.parameter;

  if (!!parameter?.name) {
    distribution(userName, parameter?.name);
    return createHtmlOutput('参加画面', 'start.html', {result: getCardsWithName()});
  }
  if (!!parameter?.start) {
    start(true);
    return createHtmlOutput('メイン画面', 'main.html', {result: getCardsWithName()});
  }
  if (!!parameter?.deside) {
    setDeside(parameter?.deside, userName);
    return createHtmlOutput('メイン画面', 'main.html', {result: getCardsWithName()});
  }
  save('a', s);
  
  return createHtmlOutput('hoge', 'input.html', {result: s});
}

function doPost(e) {
  return doGet(e);
}