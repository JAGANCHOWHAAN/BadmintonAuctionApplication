// storing the data to the database onclicking submit via api
      const form = document.getElementById('signup-form');
      form.addEventListener('submit', (e)=>{
          e.preventDefault();
          const formData = new FormData(form);
          let formDataObject = Object.fromEntries(formData.entries());
          let formDataJsonString = JSON.stringify(formDataObject);
      
          fetch('http://localhost:8080/badmintonAuction/player/create', {
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

  // PopUp Highlight post registration
    let popup = document.getElementById("popup-msg");
    function openPopup(){
      popup.classList.add("open-popup");
    }
    function closePopup(){
      popup.classList.remove("open-popup");
      window.location.href = "http://127.0.0.1:5501/player.html";
    }

// Checking a players email id if exist or not
  const form1 = document.querySelector('form');
  const emailInput = document.getElementById("emailid")
  const submitButton = document.getElementById('reg');
  const apiUrl = 'http://localhost:8080/badmintonAuction/player/display';
  form1.addEventListener('input', async (event) => {
    event.preventDefault();
    const response = await fetch(apiUrl);
    const playerDetails = await response.json();
    // The Array type provides you with an instance method called some() that allows 
    // you to test if an array has at least one element that meets a condition.
    const emailExists = playerDetails.some(player => player.emailid === emailInput.value);
    submitButton.disabled = emailExists;
    if (emailExists) {
      alert('A player with the entered emailID already exists.');
    }
  });
// Images Gallery
var responsiveSlider = function() {
var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");
window.addEventListener('resize', function() {
sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
if(count > 1) {
  count = count - 2;
  slideList.style.left = "-" + count * sliderWidth + "px";
  count++;
}
else if(count = 1) {
  count = items - 1;
  slideList.style.left = "-" + count * sliderWidth + "px";
  count++;
}
};

var nextSlide = function() {
if(count < items) {
  slideList.style.left = "-" + count * sliderWidth + "px";
  count++;
}
else if(count = items) {
  slideList.style.left = "0px";
  count = 1;
}
};

next.addEventListener("click", function() {
nextSlide();
});

prev.addEventListener("click", function() {
prevSlide();
});

setInterval(function() {
nextSlide()
}, 5000);

};

window.onload = function() {
responsiveSlider();  
}

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