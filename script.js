const display = document.getElementById('display');

const clearDisplay = () => {
  display.innerText = '0';
};

const deleteLast = () => {
  display.innerText = display.innerText.slice(0, -1) || '0';
};

const appendToDisplay = (value) => {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
};

const calculateResult = () => {
  try {
    display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
  } catch {
    display.innerText = 'Error';
  }
};
