let count = 0;
const counterElement = document.getElementById('counter');

function updateCounter(value) {
  count += value;
  counterElement.textContent = count;
}

function resetCounter() {
  count = 0;
  counterElement.textContent = count;
}