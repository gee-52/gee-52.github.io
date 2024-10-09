const input = document.querySelector('input[type="text"]');
const select = document.getElementById('zakazik');
const result = document.getElementById('result');

document.getElementById('for').addEventListener('submit', function(bruh) {
  bruh.preventDefault(); 

  const count = parseInt(input.value);
  const price = parseInt(select.options[select.selectedIndex].getAttribute('price'));

  if (isNaN(count) || isNaN(price)) {
    result.textContent = 'а колво товаров я что ли буду вводить?';
     return;
  }

  const total = count * price;

  result.textContent = `вот столько: ${total} руб`;
});