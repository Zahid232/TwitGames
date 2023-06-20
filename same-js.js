

export{menuOptions, menuButton, mennu, cross, xookk,challl, mombar, share};



const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');
const mennu = document.querySelector(".menu");
const cross = document.querySelector(".close-button");




function xookk(){
    menuOptions.style.display = 'none';

    // Toggle menu options visibility and button state
    menuButton.addEventListener('click', () => {

    if (menuOptions.style.display === 'none') {
        // Show dropdown menu and change button to cross
        menuOptions.style.display = 'block';
        mennu.style.display="none";
        // cross.style.animation="appear 0s";
    } else {
        
    }
    });
}




function challl(){
    menuOptions.style.display = 'none';
    mennu.style.display="block";
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

function share(shareButton, shareScore, sharingDiv){

  shareButton.addEventListener('click', event => {
    shareButton.style.display = 'none'; // Hide the share button temporarily

    if (navigator.share) {
      html2canvas(sharingDiv, { useCORS: true }).then(canvas => {
        canvas.toBlob(blob => {
          const file = new File([blob], 'code_snippet.png', { type: 'image/png' });
          navigator.share({
            title: "Kashur Kotah Zaanakh",
            url: "https://twitgames.netlify.app/kashmiri-language-score/",
            text: shareScore,
            files: [file]
          }).then(() => {
            console.log("Thanks");
          }).catch(console.error);
        }, 'image/png');
      }).finally(() => {
        shareButton.style.display = ''; // Restore the display of the share button
      });
    } else {
      alert("Your browser doesn't support sharing. Please copy and paste.");
      shareButton.style.display = ''; // Restore the display of the share button
    }
  });
  
}


