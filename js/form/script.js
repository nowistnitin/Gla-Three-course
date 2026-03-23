// Validation engine setup removed to prevent conflicts with custom.js
// The validation engine is now handled entirely in custom.js

function get_query() {
  var qrStr = window.location.search;
  var spQrStr = qrStr.substring(1);
  var arrQrStr = new Array();
  var arr = spQrStr.split("&");

  for (var i = 0; i < arr.length; i++) {
    var queryvalue = arr[i].split("=");
    if (queryvalue[0] === "source") {
      document.getElementById("sourceId").value = queryvalue[1];
      break;
    }
  }
}

function DisableButton() {
  console.log("=== SCRIPT.JS DisableButton() CALLED ===");
  // Check if form is valid before disabling button
  if ($("#formID").validationEngine("validate")) {
    console.log("DisableButton: Validation passed");
    $("#btnSubmit").prop("disabled", true);
    $("#btnSubmit").css("cursor", "not-allowed");
    return true; // Allow form submission
  } else {
    console.log("DisableButton: Validation failed");
    return false; // Prevent form submission if validation fails
  }
}

// Function called when state changes
function select_state_func() {
  // This function should populate cities based on selected state
  // For now, it's a placeholder - the actual city population logic
  // should be implemented based on your requirements
  console.log("State changed:", $("#stateid").val());
}

// Function called when campus changes - now handled by campus.js
// select_course_func() is defined in campus.js and handles course/branch population
