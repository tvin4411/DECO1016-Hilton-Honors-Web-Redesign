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
function validate() {
  var ti = document.forms["myform"]["title"].value;
  var fi = document.forms["myform"]["fname"].value;
  var la = document.forms["myform"]["lname"].value;
  var te = document.forms["myform"]["tel"].value;
  var em = document.forms["myform"]["email"].value;
  var co = document.forms["myform"]["country"].value;
  var ci = document.forms["myform"]["city"].value;
  var ad = document.forms["myform"]["address"].value;
  var zi = document.forms["myform"]["zip"].value;
  var pa = document.forms["myform"]["pass"].value;
  var con = document.forms["myform"]["conpass"].value;

  if (ti == "") {
      alert( "Please select one!" );
      return false;
    }
  }
  if (fi == "") {
      alert( "Please enter yout first name!" );
      return false;
    }
  }
  if (la == "") {
      alert( "Please enter your last name!" );
      return false;
    }
  }
  if (te == "") {
      alert( "Please enter your mobile number!" );
      return false;
    }
  }
  if (em == "") {
      alert( "Please enter your email address!" );
      return false;
    }
  }
  if (co == "") {
      alert( "Please select a country" );
      return false;
    }
  }
  if (ci == "") {
      alert( "Please enter your city!" );
      return false;
    }
  }
  if (ad == "") {
      alert( "Please enter your full address!" );
      return false;
    }
  }
  if (zi == "") {
      alert( "Please enter your zip code!" );
      return false;
    }
  }
  if (pa == "") {
      alert( "Please enter a password following the requirements above!" );
      return false;
    }
  }
  if (con == "") {
      alert( "Please repeat your password!" );
      return false;
    }
  }

  return true;
}

// Submit form
  function myFunction() {
    document.getElementById("myform").submit();
  }

// Reset form


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
