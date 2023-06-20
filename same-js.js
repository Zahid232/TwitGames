

export{menuOptions, menuButton, mennu, cross, xookk,challl, mombar};



const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');
const mennu = document.querySelector(".godniuk");
const cross = document.querySelector(".doyim");




function xookk(){
    menuOptions.style.display = 'none';
    cross.style.display = 'none';

    // Toggle menu options visibility and button state
    menuButton.addEventListener('click', () => {

    if (menuOptions.style.display === 'none') {
        // Show dropdown menu and change button to cross
        menuOptions.style.display = 'block';
        mennu.style.display="none";
        cross.style.display="block";
        cross.style.animation="appear 0.5s";
    } else {
        // Hide dropdown menu and change button to menu
        // menuOptions.classList.add('close-animation');
        
    }
    });
}

xookk()


function challl(){
    menuOptions.style.display = 'none';
    mennu.style.display="block";
    cross.style.display="none";
}





function mombar(){
    const elementsToAnimate = document.querySelectorAll('.other-games'); // Replace '.animate' with a CSS selector that targets the elements you want to animate

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6,
};

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-class');
      observer.unobserve(entry.target);
    }
  });
}, options);

elementsToAnimate.forEach(element => {
  intersectionObserver.observe(element);
});

// Manually check visibility of the first element on page load
const firstElement = elementsToAnimate[0];
const firstElementVisible = isElementVisible(firstElement);
if (firstElementVisible) {
  firstElement.classList.add('animation-class');
  intersectionObserver.unobserve(firstElement);
}

// Function to check if an element is visible in the viewport
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
}

mombar()