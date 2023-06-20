



import * as file1 from '/same-js.js'
import { challl } from '/same-js.js';

file1.xookk()

file1.mombar()


function handleClick() {
    challl();
  }
  

  const button = document.querySelector('.close-button');
  button.onclick = handleClick;




var sCore=''
var field1Value=''
var field2Value=''



document.getElementById('lyath').addEventListener('click', function(event){
      event.preventDefault();
      field1Value = document.getElementById("field1").value;
      field2Value = document.getElementById("field2").value;
      var errorMessage = document.getElementById("errorMessage");
      var inPut =document.getElementById("divi")
      var ouPut =document.getElementById("outp")

      if (field1Value === "" || field2Value === "" ) {
        errorMessage.innerHTML = "Please fill in both fields.";
        return false;
      } else if(field1Value.toLowerCase().indexOf("@")=== -1 || field2Value.toLowerCase().indexOf("@")=== -1 ){
        errorMessage.innerHTML="Please enter correct usernames";
        return false;
      }

      inPut.style.display = "none";
      ouPut.style.display = "flex";
      ouPut.style.animationName="moveInRight";
      ouPut.style.animationDuration="2.5s";

      sCore = field1Value.length * field2Value.length
      if (sCore > 100){
        sCore=100
      } else if (sCore <20) {
        sCore=30
      } else {
        
      }
      rewrite()
}
);


function rewrite(){
    var friendshipScore = "Yayy!! Your friendship score with " + field2Value+ " is " + sCore;
    var shareScore = "My Twitter Friendship Score with " + field2Value + " is " + sCore + ". Find Yours at:"
    document.getElementById("result").innerHTML = friendshipScore;
    
      const shareButton = document.getElementById('share-button');
      const sharingDiv=document.getElementById('outp');
      file1.share(shareButton, shareScore,sharingDiv);
    //   shareButton.addEventListener('click', event =>{
    //   if (navigator.share){
    //     navigator.share({ 
    //       title: "Twitter Friendship Score",
    //       url: "https://twitgames.netlify.app/",
    //       text: shareScore}).then(() => {
    //       console.log("Thanks");
    //       alert("Thanks")
    //     })
    //     .catch(console.error);
    //   } else{
    //     alert("Your browser doesn't support sharing.Please copy paste.")
    //   }
    // })
  }
  
  




