const hearts = document.querySelectorAll('.hert');
const lovCount = document.getElementById('love-count');
hearts.forEach((hrt) => {
  hrt.addEventListener('click', () => {
    let current = Number(lovCount.innerText);
    lovCount.innerText = current + 1;
  });
});
