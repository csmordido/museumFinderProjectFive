const fadeOut = (element) => {
  document.querySelector(element).style.opacity = 0;
  setTimeout( () => {
    document.querySelector(element).style.display = 'none';
  }, 400);
}

export default fadeOut;