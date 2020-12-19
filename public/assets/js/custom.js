window.onload = function () {
  const rangeElement = document.querySelector('#input-range');
  rangeElement.addEventListener('input', (e) => {
    document.querySelector('.range-value').textContent = e.target.value;
  });
};
