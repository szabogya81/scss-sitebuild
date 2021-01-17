const modalLinks = document.querySelectorAll('.footer-link');

function hideModal(e) {
  e.currentTarget.parentElement.parentElement.style.display = 'none';
}

function showModal(e) {
  e.preventDefault();

  const targetModal = document.querySelector(e.currentTarget.href
    .substring(e.currentTarget.href.toString().lastIndexOf('#')));
  targetModal.style.display = 'block';
  targetModal.querySelectorAll('.close')
    .forEach((closeButton) => closeButton.addEventListener('click', hideModal));
}

modalLinks.forEach((link) => {
  link.addEventListener('click', showModal);
});
