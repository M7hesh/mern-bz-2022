var $ = function (id) {
  return document.getElementById(id);
};
var stateCodeLookup = function (stateCode) {
  var states = ["CA", "WA", "OR", "NV", "NM", "AZ", "WY", "MT"];
  stateCode = stateCode.toUpperCase();
  states.push("TX");
  //   for (var i = 0; i < states.length; i++) {
  //     if (states[i] == stateCode) {
  //       return true;
  //     }
  //   }
  for (var i in states) {
    if (states[i] == stateCode) {
      return true;
    }
  }
  return false;
};

var joinList = function () {
  var emailAddress1 = $("email_address1").value;
  var emailAddress2 = $("email_address2").value;
  var isValid = true;
  //   validating first email address
  if (emailAddress1 == "") {
    $("email_address1_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    $("email_address1_error").firstChild.nodeValue = "";
  }
  //   validating second email address
  if (emailAddress2 == "") {
    $("email_address2_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else if (emailAddress1 !== emailAddress2) {
    $("email_address2_error").firstChild.nodeValue =
      "This entry must be same as first entry";
    isValid = false;
  } else {
    $("email_address2_error").firstChild.nodeValue = "";
  }
  //   validating first name entry
  if ($("first_name").value == "") {
    $("first_name_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    $("first_name_error").firstChild.nodeValue = "";
  }
  // validating sate code entry
  var stateCode = $("state_code").value;
  if (!stateCodeLookup(stateCode)) {
    $("state_code_error").firstChild.nodeValue = "State code invalid";
    isValid = false;
  } else {
    $("state_code_error").firstChild.nodeValue = "";
  }
  // submit the form if all entries are valid
  if (isValid) {
    $("email_form").submit();
  }
};

window.onload = function () {
  $("join_list").onclick = joinList;
  $("email_address1").focus();
};
