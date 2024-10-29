const markAsRead = document.getElementById("markAsRead");
const mark = document.querySelector(".mark");
const markButton = document.getElementById("markButton");
const angela = document.querySelector(".angela");
const jacob = document.querySelector(".jacob");
const jacobButton = document.getElementById("jacobButton");
const rizky = document.querySelector(".rizky");
const rizkyButton = document.getElementById("rizkyButton");
const kimberly = document.querySelector(".kimberly");
const kimPic = document.querySelector(".kim-pic");
const nathan = document.querySelector(".nathan");
const nathanButton = document.getElementById("nathanButton");
const anna = document.querySelector(".anna");
const annaButton = document.getElementById("annaButton");
const namenotifs = document.querySelector(".name");
const allNames = document.querySelectorAll(".angela, .jacob, .rizky, .kimberly, .nathan, .anna");
const topNumber = document.querySelector(".top-number");





// Function to decrease the number in topNumber by one
function decreaseTopNumber() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    
  }
}


// makes notification number 0 when markAsRead is clicked
function decreaseTopNumberAll() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = 0;
    
  }
}
function decreaseTopNumberMark() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    mark.style.pointerEvents = 'none'; 
    mark.style.backgroundColor = "white";
    markButton.style.color = "gray"
  }
}

function decreaseTopNumberAngela() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    angela.style.pointerEvents = 'none'; 
    angela.style.backgroundColor = "white";
  }
}

function decreaseTopNumberJacob() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    jacob.style.pointerEvents = 'none'; 
    jacob.style.backgroundColor = "white";
    jacobButton.style.color = "gray"
  }
}

function decreaseTopNumberKimberly() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    kimberly.style.pointerEvents = 'none'; 
    kimberly.style.backgroundColor = "white";
  }
}

function decreaseTopNumberNathan() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    nathan.style.pointerEvents = 'none'; 
    nathan.style.backgroundColor = "white";
    nathanButton.style.color = "gray"
  }
}

function decreaseTopNumberAnna() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    anna.style.pointerEvents = 'none'; 
    anna.style.backgroundColor = "white";
    annaButton.style.color = "gray"
  }
}


function increaseTopNumberRizky() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber + 0;
    
  }
}

function decreaseTopNumberRizky() {
  let currentNumber = parseInt(topNumber.textContent);
  if (currentNumber > 0) {
    topNumber.textContent = currentNumber - 1;
    rizky.style.pointerEvents = 'none'; 
    document.getElementById("rizkyButton").disabled = true;
    rizky.style.backgroundColor = "white";
  }
}

// Add event listeners to all name buttons
[ rizkyButton ].forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

// Function to handle button click and disable it
function handleButtonClick(event) {
  increaseTopNumberRizky();
  event.target.disabled = true;
  rizky.style.backgroundColor = "white";
  event.target.removeEventListener("click", handleButtonClick);
}

//[markButton, jacobButton, nathanButton, annaButton].forEach(button => {
 // button.addEventListener("click", handleSpanClick);
//});
//function handleSpanClick(event) {
  //decreaseTopNumber();
  //event.target.removeEventListener("click", handleSpanClick);}


markAsRead.addEventListener("click", function() {
  allNames.forEach(element => {
    element.style.backgroundColor = "white";
    mark.style.backgroundColor = "white";
    markButton.style.color = "gray"
    rizky.style.pointerEvents = 'none'; 
    mark.style.pointerEvents = 'none'; 
    angela.style.pointerEvents = 'none'
    jacobButton.style.color = "gray"
    jacob.style.pointerEvents = 'none'
    kimberly.style.pointerEvents = 'none'
    nathanButton.style.color = "gray"
    nathan.style.pointerEvents = 'none'
    annaButton.style.color = "gray"
    anna.style.pointerEvents = 'none'
    document.getElementById("rizkyButton").disabled = true;
    decreaseTopNumberAll();
  });
});





