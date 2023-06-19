// Displaying players details in form of cards
const starEmojis = {
    "Beginner": "⭐",
    "Intermediate": "⭐⭐⭐",
    "Advanced": "⭐⭐⭐⭐⭐"
  };
fetch("http://localhost:8080/badmintonAuction/player/display").then((objectData)=>{
    return objectData.json();
}).then((completedata)=>{
    completedata.reverse()
    let data1 = "";
    completedata.map((values)=>{
        values.skilllevel = starEmojis[values.skilllevel]
        if(`${values.gender}` == "Male"){
       data1+= `<div class="card">
        <img src="./images/badmintonPlayer.png" alt="PlayerLogo">
        <p>Player Name: <span style = "font-weight: bolder; color: black;">${values.playername}</span></p>
        <p id="skilllevel">Skill Level: <span style = "font-weight: bold";>${values.skilllevel}</span></p>
      </div>`;
        } else{
        data1+= `<div class="card">
          <img src="./images/badmintonPlayergirl1.png" alt="PlayerLogo">
           <p>Player Name: <span style = "font-weight: bolder; color: black;">${values.playername}</span></p>
           <p id="skilllevel">Skill Level: <span style = "font-weight: bold";>${values.skilllevel}</span></p>
        </div>`;
        }
       
    });
    document.getElementById("cards").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
})



// filtering based on the given skill level
const form = document.querySelector('form');    
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedSkill = document.getElementById('skilllevel').value;
  // Send a request to the API to retrieve the player details
  
  fetch('http://localhost:8080/badmintonAuction/player/display')
    .then(response => response.json())
    .then(data => {
      let data2 = "";
      const filteredPlayers = data.filter(player => player.skilllevel === selectedSkill);
      filteredPlayers.map((values)=>{
        values.skilllevel = starEmojis[values.skilllevel]
        if(`${values.gender}` == "Male"){
        data2+= `<div class="card">
        <img src="./images/badmintonPlayer.png" alt="PlayerLogo">
         <p>Player Name: <span style = "font-weight: bolder; color: white;">${values.playername}</span></p>
         <p id="skilllevel">Skill Level: <span style = "font-weight: bold";>${values.skilllevel}</span></p>
       </div>`;
        } else{
          data2+= `<div class="card">
          <img src="./images/badmintonPlayergirl1.png" alt="PlayerLogo">
           <p>Player Name: <span style = "font-weight: bolder; color: white;">${values.playername}</span></p>
           <p id="skilllevel">Skill Level: <span style = "font-weight: bold";>${values.skilllevel}</span></p>
         </div>`;
        }

      });
      document.getElementById("cards").innerHTML = data2;
    })
    .catch(error => console.error(error));
});

// restricting from access
var expectedCode = "2948";
function checkAccess(event) {
  event.preventDefault(); 
  var code = prompt("Enter the 4-digit access code:");
  code.type = "password";
  if (code === expectedCode) {
    window.location.href = "auction.html";
  } else {
    alert("Entered Incorrect code. Please try again.");
  }
  }
  var link = document.getElementById("auction-link");
  link.addEventListener("click", checkAccess);


  // // showing players popup form edit button
  const id=document.getElementById("idplayer").textContent;
  function playerPopup(id) {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
    fetch(`http://localhost:8080/badmintonAuction/player/${id}`)
    .then(response => response.json())
    .then(data => {
      const name=document.getElementById('playername');
      const email=document.getElementById('emailid');
      const skill=document.getElementById('skilllevel');
      const tshirt=document.getElementById('tshirtsize');
      const newid=document.getElementById('playerid');
      const newgender=document.getElementById('gender');
      const newsold=document.getElementById('isSold');
    
      name.value=data.playername;
      email.value=data.emailid;
      skill.value=data.skilllevel;
      tshirt.value=data.tshirtsize;
      newid.value=data.playerid;
      newgender.value=data.gender;
      newsold.value=data.isSold;
    })
  }
  function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    
  }
  
    //Player edit info 
  // <div class="row edit">
  // <button onclick="playerPopup('${values.playerid}')"><i class="fa-solid fa-pen-to-square"></i></button>
  //  </div>