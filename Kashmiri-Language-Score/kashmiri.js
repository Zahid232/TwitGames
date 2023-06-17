

let score = 0;

const elementsToAnimate = document.querySelectorAll('.other-games'); // Replace '.animate' with a CSS selector that targets the elements you want to animate



const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
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




function handleQuestion(event, questionId, answerValue) {
    event.preventDefault();
    const answer = document.querySelector(`input[name="${questionId}"]:checked`).value;  
    if (answer === answerValue) {
      score = score + 10;
    } else {
      score -= 3;
    }
    document.getElementById(questionId).style.display = 'none';

    const nextQuestionId = parseInt(questionId.slice(1)) + 1;
    document.getElementById(`q${nextQuestionId}`).style.display= 'block';
  }
  

  const answerValues = {
    chal1: "A",
    chal2: "B",
    chal3: "B",
    chal4: "A",
    chal5: "C",
    chal6: "C",
    chal7: "A",
    chal8: "B",
    chal9: "C",
    chal10: "B",
  };
  
  for (let i = 1; i <= 9; i++) {
    const functionName = "chal" + i;
    const answerValue = answerValues[functionName];
    
    window[functionName] = function(event) {
      handleQuestion(event, "q" + i, answerValue);
    };
  }
  

  function chal10(event){
    event.preventDefault();
    const answer1 = document.querySelector('input[name="q10"]:checked').value;

    if (answer1==="A"){
            score+=10;
    }else{
        score-=3;
    }
    document.getElementById("questions").style.display='none';
    document.getElementById("load").style.display='block';
    document.getElementById("resultvalue").innerHTML+=score;
    const advice = document.getElementById("result-advice");

    if (score<50){
        advice.innerHTML="Your Kashmiri is not so good. You should try learning more about your mother tongue."
    } else if (score>50 && score<75){
        advice.innerHTML="Your Kashmiri is decent enough but you should still try learning more about it."
    }else{
        advice.innerHTML="Your Kashmiri is very good. You should try to promote the language among your people."
    }





    setTimeout(function() {
        var loadingButton = document.getElementById("load");
        var content = document.getElementById("content");
        
        loadingButton.style.display = "none";
        content.classList.remove("hidden");
      }, 3000);
      share()
  }


function share(){
  
  const shareButton = document.getElementById('share-button');

  var shareScore = "My Kashmiri Language Score is " + score + ". Find Yours at:";

  shareButton.addEventListener('click', event => {
    shareButton.style.display = 'none'; // Hide the share button temporarily

    if (navigator.share) {
      html2canvas(content, { useCORS: true }).then(canvas => {
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