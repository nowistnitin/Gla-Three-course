console.log("=== CUSTOM.JS FILE LOADED v20260105182348 - FORM FIXED ===");

// Verify jQuery is loaded
if (typeof jQuery === 'undefined') {
  console.error("❌ jQuery is not loaded! Form submission will not work.");
} else {
  console.log("✅ jQuery is loaded, version:", jQuery.fn.jquery);
}

$(document).ready(function () {
  console.log("=== CUSTOM.JS DOCUMENT READY START ===");
  
  // Verify form exists
  if ($("#formID").length === 0) {
    console.error("❌ Form #formID not found!");
    return;
  }
  
  // Verify button exists
  if ($("#btnSubmit").length === 0) {
    console.error("❌ Submit button #btnSubmit not found!");
    return;
  }
  
  console.log("✅ Form and button found, setting up handlers...");

  // UI and animation code
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $(".form-sec, .applybtn").addClass("sticky");
    } else {
      $(".form-sec, .applybtn").removeClass("sticky");
    }
  });

  $(".applybtn").click(function () {
    $(".form-sec").toggleClass("slide");
  });

  $(".close").click(function () {
    $(".knowmore").fadeOut();
  });

  $(".points > div span, .points > div .click-icon").click(function () {
    $(this).closest(".Knowbox, .Knowbox2").find(".knowmore").fadeIn();
  });

  // Initialize validation engine - simple approach like custom 2.js
  $("#formID").validationEngine();
  
  // Prevent form from submitting normally - handle via button click
  $("#formID").on("submit", function(e) {
    e.preventDefault();
    return false;
  });

  // Form submission handler
  $("#btnSubmit").click(function (e) {
    e.preventDefault(); // Prevent default form submission
    e.stopPropagation(); // Stop event bubbling
    
    console.log("=== SUBMIT BUTTON CLICKED ===");
    
    // Disable button immediately to prevent multiple submissions
    var $btn = $(this);
    $btn.prop("disabled", true);
    $btn.css("cursor", "not-allowed");

    // Validate form
    var valid = $("#formID").validationEngine("validate");
    console.log("Validation result:", valid);

    if (valid == true) {
      console.log("✅ Validation passed - proceeding with submission");

      // Show loading state
      $btn.hide();
      $("#waitttAmazingLover").css("display", "block");

      // Extract form data
      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var city = $("#cityid").val();
      var courseid = $("#courseid").val();
      var campus = $("#campusid").val();
      var sourceId = $("#sourceId").val() || "Direct";
      var branch = $("#branchid").val() || "";
      var utm_medium = $("#utm_medium").val() || "website";
      var state = $("#stateid").val();
      var campaign_name = $("#campaign_name").val() || "btech-admission-2025";

      console.log("Form data extracted:", {
        name,
        email,
        phone,
        city,
        courseid,
        campus,
        sourceId,
        branch,
        utm_medium,
        state,
        campaign_name,
      });

      // Helper function to re-enable button on error
      function enableButtonOnError() {
        $btn.prop("disabled", false);
        $btn.css("cursor", "pointer");
        $btn.show();
        $("#waitttAmazingLover").css("display", "none");
      }

      // Get authentication token
      var settings = {
        url: "https://glauniversity.in:8070/token",
        method: "POST",
        timeout: 10000,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          username: "EXT220001",
          password: "out@gla",
          grant_type: "password",
        },
      };

      $.ajax(settings)
        .done(function (response) {
          console.log("✅ Token received:", response);

          // Submit lead to CRM
          var crmSettings = {
            url: "https://glauniversity.in:8070/api/WebApi/PushLead",
            method: "POST",
            timeout: 15000,
            headers: {
              Authorization: "Bearer " + response.access_token,
              "Content-Type": "application/json",
            },
            data:
              '{\r\n    "Campus": "' +
              campus +
              '",\r\n    "Source_Type": "Online",\r\n  "SubSession": "Summer",\r\n   "Campaign": "' +
              campaign_name +
              '",\r\n     "Source_Name": "' +
              sourceId +
              '",\r\n   "Sourse_Course_Code": "' +
              courseid +
              '",\r\n     "Source_Medium": "' +
              utm_medium +
              '",\r\n        "Course_Name": " ",\r\n        "Branch": "' +
              branch +
              '",\r\n        "Study_Mode": "Offline",\r\n        "Name": "' +
              name +
              '",\r\n        "Father_Name": "",\r\n        "Mother_Name": "",\r\n        "Email_1": "' +
              email +
              '",\r\n        "Email_2": "",\r\n        "Contact_1": "' +
              phone +
              '",\r\n        "Contact_2": "",\r\n        "Address": "",\r\n        "Country": "India",\r\n        "State": "' +
              state +
              '",\r\n        "District": "' +
              city +
              '",\r\n        "Locality": "",\r\n        "Lead_Source_Type": null,\r\n        "Lead_Source_Name": null,\r\n        "Operation": "Add",\r\n        "SubmittedByCode": null,\r\n        "SubmittedByName": null,\r\n        "LeadComeFrom": ""\r\n }',
          };

          $.ajax(crmSettings)
            .done(function (response) {
              console.log("✅ CRM response:", response);
              console.log("CRM settings used:", crmSettings);

              if (response.Message && response.Message.Status == "Success") {
                console.log("🎉 Lead successfully submitted to CRM!");
                // Redirect to thank you page - don't re-enable button
                window.location.href = "thankyou.html";
              } else {
                console.error("❌ CRM rejected submission:", response);
                alert(
                  "There was an issue submitting your application. Please try again."
                );
                enableButtonOnError();
              }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
              console.error(
                "❌ CRM submission failed:",
                textStatus,
                errorThrown
              );
              console.error("Response:", jqXHR.responseText);
              alert("Failed to submit your application. Please try again.");
              enableButtonOnError();
            });
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.error("❌ Token request failed:", textStatus, errorThrown);
          alert("Connection failed. Please check your internet and try again.");
          enableButtonOnError();
        });

      return false;
    } else {
      console.log("❌ Validation failed - preventing submission");
      // Re-enable button if validation fails
      $btn.prop("disabled", false);
      $btn.css("cursor", "pointer");
      return false;
    }
  });

  // Owl Carousel initializations
  $(".ACTIVITIES .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: { items: 2, nav: true },
      700: { items: 3, nav: true },
      1000: { items: 4, nav: true, loop: true },
    },
  });

  $(".INNOVATIONS .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "fadeOut",
    autoplayHoverPause: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: { items: 1, nav: true },
      700: { items: 1, nav: true },
      1000: { items: 1, nav: true, loop: true },
    },
  });

  $(".TopRecruiters .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: { items: 2, nav: true },
      700: { items: 4, nav: true },
      1000: { items: 5, nav: true, loop: true },
    },
  });

  $(".StudentSpeak .owl-carousel").owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: { items: 1, nav: true },
      700: { items: 1, nav: true },
      1000: { items: 1, nav: true, loop: true },
    },
  });

  $(".ranking .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: { items: 2, nav: true },
      600: { items: 2, nav: true },
      1000: { items: 4, nav: true, loop: true },
    },
  });

  $(".Life .owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4,
  });

  console.log("=== CUSTOM.JS SETUP COMPLETE ===");
});
