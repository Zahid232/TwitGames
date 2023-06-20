

import * as file1 from '/same-js.js'
import { challl } from '/same-js.js';

file1.xookk()

file1.mombar()


function handleClick1() {
    challl();
  }
    const button = document.querySelector('.close-button');
    button.onclick = handleClick1;




let searchQuery = ""
const clientId = '51d64c8655ac46de89787c7d9419e642';
const clientSecret = '012746bf0b5e4c61b28bb7dee1cbe746';
let toKen = ""


document.getElementById('button-sub').addEventListener('click', () =>{
  xookmyoan()
})

function xookmyoan(){

  let field1Value = document.getElementById("Username").value;
  let field2Value = document.getElementById("prompt").value;
  searchQuery = field2Value;
  
  var errorMessage = document.getElementById("errorMessage");

  if (field1Value === "" || field2Value === "" ) {
    errorMessage.innerHTML = "Please fill in both fields.";
    return false;
  } 

  document.getElementById("input").style.display = "none";
  document.getElementById("output").style.display = "flex";
  console.log(field2Value)
  workAPI(field2Value)
}





const getToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve bearer token');
    }

    const data = await response.json();
    const access_token= data.access_token;
    return access_token
  } catch (error) {
    console.error('Error:', error.message);
  }
};





function workAPI(searchQuery){
  getToken()
  .then((result) => {
    const token = result;
    return token; // Return the value for subsequent chaining
  })
  .then((token) => {
    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    var xokkk = Math.floor(Math.random()*10)
    document.getElementById("kjk").setAttribute('href', data.tracks.items[xokkk].external_urls.spotify);
    console.log(data.tracks.items[xokkk].external_urls.spotify)
    const imageUrl = data.tracks.items[xokkk].album.images[0].url; // Replace with the correct path to the image URL

    document.getElementById("xook").style.backgroundImage = `url(${imageUrl})`;
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
  })
  .catch((error) => {
    // Handle any errors that occur during the Promise chain
    console.error(error);
  });


  
}