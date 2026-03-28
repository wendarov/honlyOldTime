document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buy-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Чтобы купить, напишите в Telegram — @wendarov');
    });
  });
});
