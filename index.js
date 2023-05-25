
var sCore=''
var field1Value=''
var field2Value=''



function validateForm(event){
  
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
      sCore = field1Value.length * field2Value.length
      if (sCore > 100){
        sCore=100
      } else if (sCore <20) {
        sCore=30
      } else {
        
      }
      rewrite()
    }


function rewrite(){
    var friendshipScore = "Yayy!! Your friendship score with " + field2Value+ " is " + sCore;
      
    document.getElementById("result").innerHTML = friendshipScore;
    
      const shareButton = document.getElementById('share-button');
      shareButton.addEventListener('click', event =>{
      if (navigator.share){
        navigator.share({ 
          title: "Twitter Friendship Score",
          url: "https://visionary-chebakia-c1f2a5.netlify.app/",
          text: friendshipScore}).then(() => {
          console.log("Thanks");
        })
        .catch(console.error);
      } else{
        console.log("Not working")
      }
    })
  }
  
  




