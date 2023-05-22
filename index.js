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




const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', event =>{
  if (navigator.share){
    navigator.share({
      title: "Find Your Shaar",
      text: 'Yayy!! I found my Shaar. You can too at this link!',
      text: urduPoetries[xookMe],
      url:"https://visionary-chebakia-c1f2a5.netlify.app/",
    }).then(() => {
      console.log("Thanks");
    })
    .catch(console.error);
  } else{
    console.log("Not working")
  }
});
