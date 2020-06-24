// function for scrolling to sections of the page 
const scrollToElement = (elementId) => {
  document.getElementById(elementId)
  .scrollIntoView({behavior: 'smooth'});
}

export default scrollToElement;