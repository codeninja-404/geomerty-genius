function calcTriangleArea() {
  // get triangle base value
  const baseField = document.getElementById("tri-base");
  const baseValueText = baseField.value;
  const baseValue = parseFloat(baseValueText);

  //   get triangle height value
  const heightField = document.getElementById("tri-height");
  const heightValueText = heightField.value;
  const heightValue = parseFloat(heightValueText);
  //   calculate triangle area
  const area = 0.5 * baseValue * heightValue;
  // show area
  const areaField = document.getElementById("tri-area");
  areaField.innerText = area;
}

function calcRectangleArea() {
  // p1
  const widthField = document.getElementById("rec-width");
  const widthValueText = widthField.value;
  const widthValue = parseFloat(widthValueText);
  //   p2
  const lengthField = document.getElementById("rec-length");
  const lengthValueText = lengthField.value;
  const lengthValue = parseFloat(lengthValueText);
  //   p3 area calc
  const area = widthValue * lengthValue;
  //   p4 show araea result
  const areaField = document.getElementById("rec-area");
  areaField.innerText = area;
}

function calcParallelogramArea() {
  const baseValue = getInputValue("para-base");
  const heightValue = getInputValue("para-height");
  const area = baseValue * heightValue;
  setElemInnerText("para-area", area);
}

function calcEllipseArea() {
  const majorRe = getInputValue("large-re");
  const minorRe = getInputValue("short-re");
  const area = Math.PI * majorRe * minorRe;
  setElemInnerText("ell-area", area);
}

function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setElemInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
