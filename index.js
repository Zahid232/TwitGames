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
    document.getElementById("htmltoimage").style.display = "flex";
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

function downloadimage() {
  /*var container = document.getElementById("image-wrap");*/ /*specific element on page*/
  var container = document.getElementById("htmltoimage");; /* full page */
  html2canvas(container, { allowTaint: true }).then(function (canvas) {

      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "html_image.jpg";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
  });
}

const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', event =>{
  downloadimage()
  if (navigator.share){
    navigator.share({
      title: "Try This",
      text: 'Yayy!! I got a job through this website. So you can',
      url:"html_img.jpg",
    }).then(() => {
      console.log("Thanks");
    })
    .catch(console.error);
  } else{
    console.log("Not working")
  }
});
