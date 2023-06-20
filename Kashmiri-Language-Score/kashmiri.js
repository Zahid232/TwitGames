
import * as file1 from '/same-js.js';
import { challl } from '/same-js.js';

file1.xookk()

file1.mombar()


function handleClick() {
    challl();
  }
    const button = document.querySelector('.close-button');
    button.onclick = handleClick;








let score=0;


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
  
  
document.getElementById('but10').addEventListener('click', function(event) {
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
      var shareScore = "My Kashmiri Language Score is " + score + ". Find Yours at:";
      const shareButton=document.getElementById('share-button');
      const sharingDiv=document.getElementById('content');
      file1.share(shareButton,shareScore, sharingDiv)
})

    







  // function share(){
  
  //   const shareButton = document.getElementById('share-button');
  
  //   var shareScore = "My Kashmiri Language Score is " + score + ". Find Yours at:";
  
  //   shareButton.addEventListener('click', event => {
  //     shareButton.style.display = 'none'; // Hide the share button temporarily
  
  //     if (navigator.share) {
  //       html2canvas(content, { useCORS: true }).then(canvas => {
  //         canvas.toBlob(blob => {
  //           const file = new File([blob], 'code_snippet.png', { type: 'image/png' });
  //           navigator.share({
  //             title: "Kashur Kotah Zaanakh",
  //             url: "https://twitgames.netlify.app/kashmiri-language-score/",
  //             text: shareScore,
  //             files: [file]
  //           }).then(() => {
  //             console.log("Thanks");
  //           }).catch(console.error);
  //         }, 'image/png');
  //       }).finally(() => {
  //         shareButton.style.display = ''; // Restore the display of the share button
  //       });
  //     } else {
  //       alert("Your browser doesn't support sharing. Please copy and paste.");
  //       shareButton.style.display = ''; // Restore the display of the share button
  //     }
  //   });
    
  // }

  
