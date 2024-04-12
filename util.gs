const docId = '15Uw37J7WnYHGDHrC0ISpaL_BEDXJ6849CLf0Hl-71EQ';
const sheetName = 'data';

/**
 * HTML Output インスタンスを生成.
 */
function createHtmlOutput(title, file, param){
    const htmlFile = HtmlService.createTemplateFromFile(file);
    htmlFile.param = param;
    const next = htmlFile.evaluate();
    next.addMetaTag('viewport', 'width=device-width, initial-scale=1');
    next.setTitle(title);
    return next;
}

function getUrl() {
  return ScriptApp.getService().getUrl();
}

/**
 * A列にキー
 * B列に値　があるシートとして、
 * 既存key が Aにあれば、上書き
 * なければ末尾に追加
 */
function save(key, value) {
  const values = getSheetValues();
  for (let row = 0; row < values.length; row++) {
    if (values[row][0] === key) {
      setData(`B${row + 1}`, JSON.stringify(value));
      return;
    }
  }
  setData(`A${values.length + 1}`, key);
  setData(`B${values.length + 1}`, JSON.stringify(value));
}

/**
 * A列にキー
 * B列に値　があるシートとして、
 * A列から key を探して value を返す
 */
function get(key) {
  const values = getSheetValues();
  for (let row = 0; row < values.length; row++) {
    if (values[row][0] === key) {
      return JSON.parse(values[row][1]);
    }
  }
  return undefined;
}

function getDocument(){
  return SpreadsheetApp.openById(docId);
}

function getSheet(){
  return getDocument().getSheetByName(sheetName);
}

function setData(cell, value){
  getRange(sheetName, cell).setValue(value);
}

function setFormula(cell, value){
  getRange(sheetName, cell).setFormula(value);
}

function getData(cell){
  return getRange(docId, sheetName, cell).getValue();
}

function getSheetValues() {
  return getSheet().getDataRange().getValues();
}

function getRange(sheetName, cell){
  return getSheet(sheetName).getRange(cell);
}

function clearSheet(){
  getSheet(sheetName).clear();
}
