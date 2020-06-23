const scrollToElement = (elementId) => {
  document.getElementById(elementId)
  .scrollIntoView({behavior: 'smooth'});
}

export default scrollToElement;