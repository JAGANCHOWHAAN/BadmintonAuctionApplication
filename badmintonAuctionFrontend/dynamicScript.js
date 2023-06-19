  // storing the data to the database onclicking submit via api
  const form = document.getElementById('team-form');
  form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const formData = new FormData(form);
      let formDataObject = Object.fromEntries(formData.entries());
      let formDataJsonString = JSON.stringify(formDataObject);
  
      fetch('http://localhost:8080/badmintonAuction/team/create', {
          method:'POST', 
            //Set the headers that specify you're sending a JSON body request and accepting JSON response
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
          body: formDataJsonString
      }).then(res => res.json)
        .then(data => console.log(data))
        .catch((err) =>{ 
          alert(err);
          console.log(err)
      });
  });

  const form1 = document.querySelector('#team-form');
  form1.addEventListener('submit', e => {
      e.preventDefault();
      const teamName = document.querySelector('#teamname').value;
      const teamCaptain = document.querySelector('#teamcaptain').value;
      const teamLogo = document.querySelector('#team-image').files[0];
  
      // Display image and details
      const reader = new FileReader();
      reader.readAsDataURL(teamLogo);
      reader.onload = function () {
          const img = document.createElement('img');
          img.src = reader.result;
          img.width = 300;
          img.height = 300;
          const div = document.querySelector('#imageDisplay');
          div.appendChild(img);
  
          const teamDetails = document.createElement('div');
          teamDetails.innerHTML = `<h3>Team Name: ${teamName}</h3><p>Team Captain: ${teamCaptain}</p>`;
          div.appendChild(teamDetails);
  
          // Store image and details in local storage
          localStorage.setItem('teamName', teamName);
          localStorage.setItem('teamCaptain', teamCaptain);
          localStorage.setItem('teamLogo', reader.result);
      }
  });
  
  // Retrieve stored data on page load
  window.onload = function () {
      const teamName = localStorage.getItem('teamName');
      const teamCaptain = localStorage.getItem('teamCaptain');
      const teamLogo = localStorage.getItem('teamLogo');
      if (teamLogo) {
          const img = document.createElement('img');
          img.src = teamLogo;
          img.width = 300;
          img.height = 300;
          const div = document.querySelector('#imageDisplay');
          div.appendChild(img);
  
          const teamDetails = document.createElement('div');
          teamDetails.innerHTML = `<h3>Team Name: ${teamName}</h3><p>Team Captain: ${teamCaptain}</p>`;
          div.appendChild(teamDetails);
      }
  };
  
