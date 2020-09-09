// function for scrolling to sections of the page 
const scrollToElement = (element) => {
  if (element) {
  element.scrollIntoView({behavior: 'smooth'});
  } return;
}

export default scrollToElement;