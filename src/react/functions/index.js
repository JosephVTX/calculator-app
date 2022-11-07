export const setDisplay = (setNumber, currentValue, textDisplay) => {
  const newTextDisplay = String(textDisplay).replace("x", "*");
  const longText = textDisplay.length;
  const lastChar = newTextDisplay.slice(-1);

  switch (currentValue) {
    case ".":
      if (!isNaN(lastChar) && longText != 0 && !newTextDisplay.includes(".")) {
        setNumber((e) => e + currentValue);
      }
      break;

    case "0":
      if (longText == 1 && lastChar == "0") {
        return;
      } else {
        setNumber((e) => e + currentValue);
      }

      break;

    default:
      if (!isNaN(lastChar) || !isNaN(currentValue)) {
        setNumber((e) => e + currentValue);
      }
  }
};

export const calculate = (textDisplay, setNumber) => {
  const newTextDisplay = String(textDisplay).replace("x", "*");
  const lastChar = newTextDisplay.slice(-1);

  if (!isNaN(lastChar)) {
    const result = eval(newTextDisplay);

    setNumber(result);
  }
};

