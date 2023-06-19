// displaying players from Team1
var tigerplayersno, wolfplayerno, spiesplayersno;
const teamButton1 = document.getElementById("team-button1");
teamButton1.addEventListener("click", () => {
  let teamId = document.getElementById("teamid1").value;
  console.log(teamId)
  fetch(`http://localhost:8080/badmintonAuction/auction/getallplayerofteam/${teamId}`)
  .then(response => response.json())
  .then(data =>{
      tigerplayersno = data.length
      sessionStorage.setItem("tigerplayersno", tigerplayersno)
      console.log(sessionStorage.getItem("tigerplayersno"))
    let showdata = "";
      data.forEach(element => {
        console.log(element)
        
        let finalData = "";
        if(`${element.player.gender}` == "Male"){
        finalData+=`
        <div class="col-sm-4">
        <h3 id="playerimg"><img src="./images/badmintonPlayer.png" alt="player"><span>&nbsp${element.player.playername}</span></h3>
            <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
            <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
        </div>  `
        showdata += finalData;
        } else{
          finalData+=`
          <div class="col-sm-4">
          <h3 id="playerimg"><img src="./images/badmintonPlayergirl1.png" alt="player"><span>&nbsp${element.player.playername}</span></h3>
              <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
              <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
          </div>  `
          showdata += finalData;
        }
      }); 
      document.getElementById("players-list").innerHTML = showdata; 
  })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});

// displaying players from Team2
const teamButton2 = document.getElementById("team-button2");
teamButton2.addEventListener("click", () => {
  let teamId = document.getElementById("teamid2").value;
  console.log(teamId)
  fetch(`http://localhost:8080/badmintonAuction/auction/getallplayerofteam/${teamId}`)
  .then(response => response.json())
  .then(data =>{
      wolfplayerno = data.length
      sessionStorage.setItem("wolfplayerno", wolfplayerno)
    let showdata = "";
      data.forEach(element => {
        console.log(element)
        
        let finalData = "";
        if(`${element.player.gender}` == "Male"){
          finalData+=`
          <div class="col-sm-4">
          <h3 id="playerimg"><img src="./images/badmintonPlayer.png" alt="player"><span>&nbsp${element.player.playername}</span></h3>
              <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
              <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
          </div>  `
          showdata += finalData;
          } else{
            finalData+=`
            <div class="col-sm-4">
            <h3 id="playerimg"><img src="./images/badmintonPlayergirl1.png" alt="player"><span>&nbsp${element.player.playername}</span></h3>
                <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
                <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
            </div>  `
            showdata += finalData;
          }
      }); 
      document.getElementById("players-list").innerHTML = showdata; 
  })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});

// displaying players from Team3
const teamButton3 = document.getElementById("team-button3");
teamButton3.addEventListener("click", () => {
  let teamId = document.getElementById("teamid3").value;
  console.log(teamId)
  fetch(`http://localhost:8080/badmintonAuction/auction/getallplayerofteam/${teamId}`)
  .then(response => response.json())
  .then(data =>{
    spiesplayersno = data.length
    sessionStorage.setItem("spiesplayersno", spiesplayersno)
    let showdata = "";
      data.forEach(element => {
        console.log(element)
        
        let finalData = "";
        if(`${element.player.gender}` == "Male"){
          finalData+=`
          <div class="col-sm-4">
          <h3 id="playerimg"><img src="./images/badmintonPlayer.png" alt="player"><span>&nbsp${element.player.playername}</span></h3>
              <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
              <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
          </div>  `
          showdata += finalData;
          } else{
            finalData+=`
            <div class="col-sm-4">
            <h3 id="playerimg"><img src="./images/badmintonPlayergirl1.png" alt="player"><span>&nbsp${element.player.playername}</span></h3>
                <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
                <h4 id="centertext"><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
            </div>  `
            showdata += finalData;
          }
      }); 
      document.getElementById("players-list").innerHTML = showdata; 
  })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});
// switching to buttons with their colors
const btn1 = document.getElementById("teamid1");
const btn2 = document.getElementById("teamid2");
const btn3 = document.getElementById("teamid3");
btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'rgb(216, 64, 8)';
    btn1.style.color = 'white'
    btn2.style.backgroundColor = 'initial';
    btn3.style.backgroundColor = 'initial';
    const team1 = document.getElementById("teamlogo1").classList;
    team1.add("#teamlogo1")
});

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'rgb(35, 35, 203)';
    btn2.style.color = 'white'
    btn1.style.backgroundColor = 'initial';
    btn3.style.backgroundColor = 'initial';
});

btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = 'rgb(6, 6, 134)';
    btn3.style.color = 'white'
    btn1.style.backgroundColor = 'initial';
    btn2.style.backgroundColor = 'initial';
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