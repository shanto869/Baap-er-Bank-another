//  getInputFieldValueById() for get the value of input field
function getInputFieldValueById(inputFieldId) {
  const inputFieldElement = document.getElementById(inputFieldId);
  const inputFieldValueString = inputFieldElement.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputFieldElement.value = "";
  return inputFieldValue;
}

// getTextElementValueById() for get the value of text element
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

// setTextElementValueById() for set a new value;
function setTextElementValueById(elementId, newValue) {
  const TextElement = document.getElementById(elementId);
  TextElement.innerText = newValue;
}
