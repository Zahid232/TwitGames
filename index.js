const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");

// the default state is 'disabled'
formButton.disabled = true; 

// alternative is to use "change" - explained below
formInput.addEventListener("keyup", buttonState);

function buttonState() {
    if ( document.querySelector(".form-input").value == "") {
        formButton.disabled = true; // return disabled as true whenever the input field is empty
    } 
     else {
        formButton.disabled = false; // enable the button once the input field has content
    }
}

formButton.addEventListener("click", () => {
    clicked()
});



function clicked(){
    document.getElementById("divi").style.display = "none";
    document.getElementById("output").style.display = "flex";
    rewrite()
}


function rewrite(){
    const x=document.getElementById("name").value;
    const y=document.getElementById("district").value;
    const z=document.getElementById("age").value;
    
    const urduPoetries = [
        "میں تو اک دھوپ کی طرح پھولوں کے ساتھ چلا",
        "رنج کا سفر ہمیشہ منظر بدلتا ہے",
        "تمہاری یادوں کے مستور چھانوں میں رہتا ہوں",
        "محبت کا کوئی رنگ نہیں",
        "جواب بھی تو کچھ دیا کرو",
        "زندگی تیری آواز ہو",
        "جانیں کیسی ہو تم",
        "یادوں کے کچھ لف ہیں",
        "کچھ اور نہیں",
        "دل کی باتیں"
      ];

    const xookMe=Math.floor(Math.random() *10)

    document.getElementById("result").innerHTML = urduPoetries[xookMe];
}



// Sharing Button


// Check if the Web Share API is supported by the browser
if (navigator.share) {
    const shareButton = document.getElementById('share-button');
    
    // Add click event listener to the share button
    shareButton.addEventListener('click', async () => {
      try {
        // Create the data to be shared
        const shareData = {
          title: 'Example Title',
          text: 'Example Text',
          url: 'https://example.com',
        };
  
        // Call the Web Share API to share the data
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    });
  } else {
    // Web Share API not supported
    console.log('Web Share API not supported.');
  }