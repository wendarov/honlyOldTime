const modal = document.getElementById('buyModal');
if (modal) {
  const title = document.getElementById('modalTitle');
  const text = document.getElementById('modalText');
  document.querySelectorAll('[data-buy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.getAttribute('data-buy');
      title.textContent = 'Покупка: ' + item;
      text.textContent = 'Чтобы купить, напишите в Telegram — @wendarov';
      modal.classList.add('open');
    });
  });
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => modal.classList.remove('open'));
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
}
