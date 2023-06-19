
var tigerplayersno = sessionStorage.getItem("tigerplayersno")
var wolfplayerno = sessionStorage.getItem("wolfplayerno")
var spiesplayersno = sessionStorage.getItem("spiesplayersno")
window.onload = firstfunction
function firstfunction(){
  console.log(tigerplayersno)
  document.getElementById("team1count").innerHTML = tigerplayersno;
  console.log(tigerplayersno)
  document.getElementById("team2count").innerHTML = wolfplayerno;
  console.log(tigerplayersno)
  document.getElementById("team3count").innerHTML = spiesplayersno;
}

// Intializing emojis
const starEmojis = {
  "Beginner": "⭐",
  "Intermediate": "⭐⭐⭐",
  "Advanced": "⭐⭐⭐⭐⭐"
};

// retrieving random players
let players = null;
let usedPlayers = [];

async function getPlayers() {
  const response = await fetch('http://localhost:8080/badmintonAuction/player/display');
  players = await response.json();
}

async function getRandomPlayer() {
  if (players === null) {
    await getPlayers();
  }

  if (usedPlayers.length === players.length) {
    alert('You came to the end of registered players list.!');
    return;
  }
  let randomPlayer = null;
  while (randomPlayer === null || usedPlayers.includes(randomPlayer)) {
    const randomIndex = Math.floor(Math.random() * players.length);
    randomPlayer = players[randomIndex];
  }
  usedPlayers.push(randomPlayer);
  const playerDetails = document.getElementById('playerDetails');
  const playerIdInput = document.getElementById("playerid");
  const playerbasepriceInput = document.getElementById("baseprice");
  randomPlayer.skilllevel = starEmojis[randomPlayer.skilllevel]
  if(`${randomPlayer.gender}` == "Male"){
  playerDetails.innerHTML = 
    `<img id="player-img" src="./images/badmintonPlayer.png" alt="">
    <p id="reqPlayer">Player Id: <span style = "font-weight: bold";>${randomPlayer.playerid}</p>
    <p id="reqPlayer">Player Name:<span style = "font-weight: bold";>${randomPlayer.playername}</p>
    <p id="reqPlayer">Skill Level: <span style = "font-weight: bold";>${randomPlayer.skilllevel}</p>`;
  } else{
    playerDetails.innerHTML = 
    `<img id="player-img" src="./images/badmintonPlayergirl1.png" alt="">
    <p id="reqPlayer">Player Id: <span style = "font-weight: bold";>${randomPlayer.playerid}</p>
    <p id="reqPlayer">Player Name:<span style = "font-weight: bold";>${randomPlayer.playername}</p>
    <p id="reqPlayer">Skill Level: <span style = "font-weight: bold";>${randomPlayer.skilllevel}</p>`;
  }
    // autodisplay playerid in form
    playerIdInput.value = randomPlayer.playerid;
    // setting base price
    if(randomPlayer.skilllevel == "⭐"){
      playerbasepriceInput.value = 100000
    } else if(randomPlayer.skilllevel == "⭐⭐⭐"){
      playerbasepriceInput.value = 300000
    } else{
      playerbasepriceInput.value = 500000
    }

    if (randomPlayer.isSold) {
      const bidButton = document.querySelector('#bid-btn');
      bidButton.disabled = true;
      const soldImage = document.querySelector(".sold-image");
      soldImage.style.display = "block";
    
      const formInputs = document.querySelectorAll('#bidding-form input');
      formInputs.forEach(input => {
        input.disabled = true;
      });

      const toaster = document.createElement('div');
      toaster.className = 'soldtoaster';
      toaster.textContent = 'This player has already been sold';
      document.body.appendChild(toaster);
    
      setTimeout(() => {
        toaster.remove();
      }, 1000);

    } else {
      const bidButton = document.querySelector('#bid-btn');
      bidButton.disabled = false;
      const soldImage = document.querySelector(".sold-image");
      soldImage.style.display = "none";
      const formInputs = document.querySelectorAll('#bidding-form input');
      formInputs.forEach(input => {
        input.disabled = false;
      });

      const toaster = document.createElement('div');
      toaster.className = 'unsoldtoaster';
      toaster.textContent = 'This player is available for bidding';
      document.body.appendChild(toaster);
    
      setTimeout(() => {
        toaster.remove();
      }, 2000);
    }
    
    

}
// displaying card withplayer details
const btn = document.getElementById("randombutton");
const randomPlayer = document.querySelector('#playerDetails');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  randomPlayer.classList.add('show');
});

// Filling the bidding form
const form = document.getElementById('bidding-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);
    console.log(formDataObject);
    console.log(formDataJsonString);
    fetch('http://localhost:8080/badmintonAuction/auction/create', {
        method:'POST', 
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
        body: formDataJsonString
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch((err) =>{ 
        alert(err);
        console.log(err)
    });
});

// Updating the player isSold to true as he/she bought by some other team in auction
const bidButton = document.querySelector('#bid-btn');
bidButton.addEventListener('click', () => {
  const playerid = document.querySelector('#playerid').value;
  const url = `http://localhost:8080/badmintonAuction/player/update/${playerid}`;
  fetch(url, {
    method: 'PUT'
  })
  .then(response => {
    if (response.ok) {
      console.log('Player updated');
    } else {
      console.error('Unable to update player');
    }
  })
  .catch(error => {
    console.error('An error occurred', error);
  });
});


  // restricting user to access auction page
  var expectedCode = "2948"; 
  function checkAccess() {
    var code = prompt("Enter the access code:");
    
    if (code === expectedCode) {
      window.location.href = "auction.html";
    } else {
      alert("Incorrect code. Please try again.");
      return window.location.href = "index.html";
    }
  }
  var button = document.getElementById("auctionbtn");
  button.addEventListener("click", function() {
    checkAccess();
  });
  
// price conditions and button disabling and toaster 
  const soldPriceInput = document.getElementById('soldprice');
  const basePriceInput = document.getElementById('baseprice');
  const bidfix = document.getElementById('bid-btn');
  
  let alertShown = false;
  let toastTimer; //
  
  soldPriceInput.addEventListener('input', function() {
    const basePrice = parseFloat(basePriceInput.value);
    const soldPrice = parseFloat(soldPriceInput.value);
    // Check if the sold price is less than the base price
    if (soldPrice < basePrice) {
      bidfix.disabled = true;
      if (!alertShown) {
        alertShown = true;
        showNotification('Make sure Sold price should be equal to or greater than base price.', 3000);
      }
    } else {
      bidfix.disabled = false;
      alertShown = false;
      hideNotification();
    }
  });
  
  // Function to show the toast notification
  function showNotification(message, duration) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    // Set a timer to hide the toast after the specified duration
    toastTimer = setTimeout(hideNotification, duration);
  }
  
  // Function to hide the toast notification
  function hideNotification() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
    clearTimeout(toastTimer);
  }
