console.log("=== CAMPUS.JS FILE LOADED ===");

function select_course_func() {
  console.log("=== CAMPUS.JS select_course_func() CALLED ===");
  var select = document.getElementById("campusid");
  var typevalue = select.options[select.selectedIndex].value;
  console.log("Selected campus:", typevalue);
  if (typevalue == "Mathura Campus#101") {
    document.getElementById("coursepid").innerHTML =
      "<select name='courseid' id='courseid' class='input validate[required]'><option value=''>Select Your Course*</option>\
                <option value='1000'>Civil</option>\
                <option value='1100'>Electrical</option>\
                <option value='1300'>Electronics & Communication</option>\
                <option value='1400'>Electrical & Electronics</option>\
                <option value='1200'>Mechanical</option>\
                <option value='1500'>Computer Science</option>\
                <option value='1700'>Biotechnology</option>\
                <option value='1201'>Automobile Engineering</option>\
                <option value='1202'>Mechatronics Engineering</option>\
                <option value='1550'>Artificial Intelligence and Machine Learning</option>\
                <option value='1330'>Electronics & Computer Engineering</option>\
                <option value='1310'>Electronics & Communication (with minor CS)</option>\
                <option value='1320'>Electronics & Communication (with VLSI)</option>\
                <option value='1203'>Mechanical Engineering (with minor CS)</option>\
                <option value='1001'>Civil Engineering (with minor CSE)</option>\
                <option value='1002'>Electrical Engineering (with minor CSE)</option>\
                <option value='1003'>Electrical Engineering in Electrical Vehicle Technology</option>\
  </select>";
    console.log("=== MATHURA CAMPUS COURSE DROPDOWN POPULATED ===");
    console.log(
      "Course dropdown HTML:",
      document.getElementById("coursepid").innerHTML
    );
  } else if (typevalue == "Noida Campus#102") {
    document.getElementById("coursepid").innerHTML =
      "<select id='courseid' form='formID' name='courseid' data-errormessage-value-missing='* Course is required!' class='input validate[required]' ><option value=''>Course Applying For*</option><option value='1550' selected>AI & ML</option><option value='1500'>CSE</option><option value='1320'>ECE VLSI</option></select>";
    console.log("=== NOIDA CAMPUS COURSE DROPDOWN POPULATED ===");
    console.log(
      "Course dropdown HTML:",
      document.getElementById("coursepid").innerHTML
    );
  }
}

// Set Noida as default campus and trigger course population on page load
document.addEventListener("DOMContentLoaded", function() {
  var campusSelect = document.getElementById("campusid");
  if (campusSelect) {
    campusSelect.value = "Noida Campus#102";
    select_course_func();
  }
});

// Test 1: Check if course dropdown exists
console.log("Course dropdown:", $("#courseid").length);

// Test 2: Check dropdown content
console.log("Course dropdown HTML:", $("#courseid").html());

// Test 3: Manually trigger campus function
select_course_func();

// Test 4: Check if course dropdown was populated
console.log("After campus function:", $("#courseid").html());

// Test 5: Test branch extraction
console.log("Selected course text:", $("#courseid option:selected").text());
