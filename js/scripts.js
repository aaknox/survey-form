function formSubmitted(){
  alert("Thank you for your time. Your survey has been submitted");
}

function validateForm() {
  var w = document.forms["myForm"]["name"].value;
  var x = document.forms["myForm"]["email"].value;
  var y = document.forms["myForm"]["id-number"].value;
  var z = document.forms["myForm"]["personnel-type"].value;
  if (w == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (y == "") {
    alert("Badge/Workday ID number must be filled out");
    return false;
  }
  else if (z == "") {
    alert("Please select personnel type");
    return false;
  }
  else{
    formSubmitted();
  }
}
