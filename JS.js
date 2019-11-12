// Menu Icon will expand showing navigation links to other pages
function myMenu(x) {
    x.classList.toggle("extend");
}

// User Icon will open up buttons to navigate to the login or Sign up page
function myUser(x) {
    x.classList.toggle("open");
}

// Find a Hotel Pop-up will appear by clicking the button
function findbtn(x) {
    var x = document.getElementById("hotel-opt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Closes Find a Hotel Pop-up and returns to landing page
function exit(x) {
    var x = document.getElementById("hotel-opt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Perk Icons opens up a block text of information beside it
function EliteIcon(x) {
    var x = document.getElementById("speechR1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function LowIcon(x) {
    var x = document.getElementById("speechR2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function WifiIcon(x) {
    var x = document.getElementById("speechR3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function PointsIcon(x) {
    var x = document.getElementById("speechR4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function AppIcon(x) {
    var x = document.getElementById("speechR5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Member-Teirs will appear when button is preesed
function myDia(x) {
    var x = document.getElementById("D-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myGol(x) {
    var x = document.getElementById("G-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mySil(x) {
    var x = document.getElementById("S-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myBlu(x) {
    var x = document.getElementById("B-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Form Validation ensures users input is on the right track
// User details
function validate() {
  var ti = document.forms["myForm"]["title"].value;
  if (ti == "") {
    alert("Please select one!");
    return false;
  }
}
  var fn = document.forms["myForm"]["fname"].value;
  if (fn == "") {
    alert("Please enter your first name!");
    return false;
  }
}
  var ln = document.forms["myForm"]["lname"].value;
  if (ln == "") {
    alert("Please enter your last name!");
    return false;
  }
}
  var te = document.forms["myForm"]["tel"].value;
  if (te == "") {
    alert("Please enter your phone number!");
    return false;
    }
  }
  var em = document.forms["myForm"]["email"].value;
  if (em == "") {
    alert("Please enter your email address!");
    return false;
    }
  }
  var co = document.forms["myForm"]["country"].value;
  if (x == "") {
    alert("Please select a country!");
    return false;
    }
  }
  var ci = document.forms["myForm"]["city"].value;
  if (ci == "") {
    alert("Please enter a city!");
    return false;
    }
  }
  var ad = document.forms["myForm"]["address"].value;
  if (ad == "") {
    alert("Please enter your home address!");
    return false;
    }
  var zi = document.forms["myForm"]["zip"].value;
  if (zi == "") {
    alert("Please enter your post code!");
    return false;
    }
  }
}
// Confirming Password
function confirm() {
  var pw = document.getElementById("passsword").value;
  var pc = document.getElementById("passwordConfirm").value;

  var message = document.getElementById('checking2');
  var good_color = "#66cc66";
  var bad_color  = "#ff6666";

if(pw.value == pc.value){
    pc.style.backgroundColor = good_color;
    message.style.color      = good_color;
} else {
    pc.style.backgroundColor = bad_color;
    message.style.color      = bad_color;
}

// Local Storage


// Feedback Pop-up opening it
function openFB() {
  var x = document.getElementById("feedback");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
