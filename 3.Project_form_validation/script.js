let errormessage = "";
let missingfield = "";

function isEmail(email) {
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isNumeric(value) {
  return /^\d+$/.test(value); // will only check if the numbers are there.
}

// if everything is OK, Submit.
$("#submitbutton").click(function () {
  errormessage = ""; // previous error message is empty.
  missingfield = ""; // previous missing field message ps empty.

  if ($("#Email").val() == "") {
    missingfield += "<p>Email not filled</p>";
  }
  if ($("#phoneno").val() == "") {
    missingfield += "<p>Phone number not filled</p>";
  }
  if ($("#password").val() == "") {
    missingfield += "<p>Password not filled</p>";
  }

  if (!isEmail($("#Email").val())) {
    errormessage += "<p>Email id is not valid</p>";
  }
  if (!isNumeric($("#phoneno").val())) {
    errormessage += "<p>Phone number is not valid</p>";
  }
  if ($("#password").val() != $("#confirmpassword").val()) {
    errormessage += "<p>Password does not match</p>";
  }

  if (errormessage == "" && missingfield == "") {
    $("#success").html("You are registered");
    $("#errors").html(""); // the error message is empty.
  } else {
    $("#errors").html(errormessage + missingfield);
    $("#success").html(""); // success message is empty.
  }
});
