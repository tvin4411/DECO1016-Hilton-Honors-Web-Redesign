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
  var ti = document.forms["myform"]["title"];
  var fi = document.forms["myform"]["fname"];
  var la = document.forms["myform"]["lname"];
  var te = document.forms["myform"]["tel"];
  var em = document.forms["myform"]["email"];
  var co = document.forms["myform"]["country"];
  var ci = document.forms["myform"]["city"];
  var ad = document.forms["myform"]["address"];
  var zi = document.forms["myform"]["zip"];
  var pa = document.forms["myform"]["pass"];
  var con = document.forms["myform"]["conpass"];

  if (ti.value == "") {
      alert( "Please select one!" );
      ti.focus();
      return false;
    }
  }
  if (fi.value == "") {
      alert( "Please enter yout first name!" );
      fi.focus();
      return false;
    }
  }
  if (la.value == "") {
      alert( "Please enter your last name!" );
      la.focus();
      return false;
    }
  }
  if (te.value == "") {
      alert( "Please enter your mobile number!" );
      te.focus();
      return false;
    }
  }
  if (em.value == "") {
      alert( "Please enter your email address!" );
      em.focus();
      return false;
    }
  }
  if (co.value == "") {
      alert( "Please select a country" );
      co.focus();
      return false;
    }
  }
  if (ci.value == "") {
      alert( "Please enter your city!" );
      ci.focus();
      return false;
    }
  }
  if (ad.value == "") {
      alert( "Please enter your full address!" );
      ad.focus();
      return false;
    }
  }
  if (zi.value == "") {
      alert( "Please enter your zip code!" );
      zi.focus();
      return false;
    }
  }
  if (pa.value == "") {
      alert( "Please enter a password following the requirements above!" );
      pa.focus();
      return false;
    }
  }
  if (con.value == "") {
      alert( "Please repeat your password!" );
      con.focus();
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
