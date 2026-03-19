 $(window).scroll(function () {
     var scroll = $(window).scrollTop();

     if (scroll >= 200) {
         $(".form-sec, .applybtn").addClass("sticky");
     } else {

         $(".form-sec, .applybtn").removeClass("sticky");

     }

 });



 $(document).ready(function () {


     $(".applybtn").click(function () {


         $(".form-sec").toggleClass("slide");
     });

     $(".close").click(function () {
         $(".knowmore").fadeOut();
     })
     $(".points > div span").click(function () {
         $(this).prev(".knowmore").fadeIn();
     })


     $(".list_li ul > li:first-child").click(function () {

         $(".onebox").fadeIn();
     })
     $(".list_li ul > li:nth-child(2)").click(function () {

         $(".twobox").fadeIn();
     })
     $(".list_li ul > li:nth-child(3)").click(function () {

         $(".threebox").fadeIn();
     })
     $(".list_li ul > li:nth-child(4)").click(function () {

         $(".fourbox").fadeIn();
     })

     $(".close").click(function () {
         $(".content-box").fadeOut();
     })



     $('.ACTIVITIES .owl-carousel ').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         margin: 10,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 2,
                 nav: true,

             },
             700: {
                 items: 3,
                 nav: true
             },
             1000: {
                 items: 4,
                 nav: true,
                 loop: true
             }
         }
     });

     $('.INNOVATIONS .owl-carousel ').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 4000,
           animateOut: 'fadeOut',
         autoplayHoverPause: false,
         margin: 10,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 1,
                 nav: true,

             },
             700: {
                 items: 1,
                 nav: true
             },
             1000: {
                 items: 1,
                 nav: true,
                 loop: true
             }
         }
     });

     $('.TopRecruiters .owl-carousel ').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 5000,
         autoplayHoverPause: false,
         margin: 30,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 2,
                 nav: true,

             },
             700: {
                 items: 4,
                 nav: true
             },
             1000: {
                 items: 5,
                 nav: true,
                 loop: true
             }
         }
     });



     $('.StudentSpeak .owl-carousel').owlCarousel({
         loop: true,
         animateOut: 'fadeOut',
         autoplay: true,
         autoplayTimeout: 5000,
         autoplayHoverPause: false,
         margin: 0,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 1,
                 nav: true,

             },
             700: {
                 items: 1,
                 nav: true
             },
             1000: {
                 items: 1,
                 nav: true,
                 loop: true
             }
         }
     })


    
     $('.Life .owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})

$("#formID").validationEngine();

        $("#btnSubmit").click(function () {
            var valid = $("#formID").validationEngine('validate');
            var vars = $("#formID").serializeArray();

            if (valid == true) {
				var name = $("#name").val();
				var email = $("#email").val();
				var phone = $("#phone").val();
				var city = $("#cityid").val();
				var course = 'Law';
				var sourceId = $("#sourceId").val();
				var branch = $("#courseId").val();
				var utm_medium = $("#utm_medium").val();
				var state = $("#stateid").val();
				var campaign_name = $("#campaign_name").val();
				//alert(name);
				 
               var settings = {
				  "url": "https://glauniversity.in:8070/token",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"Content-Type": "application/x-www-form-urlencoded"
				  },
				  "data": {
					"username": "EXT220001",
					"password": "out@gla",
					"grant_type": "password"
				  }
				};
			
			
				 $.ajax(settings).done(function (response) {
				 // console.log(response);
				 //var obj = jQuery.parseJSON(response);
				//var access_token = response.access_token;
				
				var settings = {
				  "url": "https://glauniversity.in:8070/api/WebApi/PushLead",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"Authorization": "Bearer "+response.access_token,
					"Content-Type": "application/json"
				  },
				  "data": "{\r\n        \"Source_Type\": \"Online\",\r\n        \"Campaign\": \""+campaign_name+"\",\r\n        \"Source_Name\": \""+sourceId+"\",\r\n        \"Source_Medium\": \""+utm_medium+"\",\r\n        \"Course_Name\": \""+course+"\",\r\n        \"Branch\": \""+branch+"\",\r\n        \"Study_Mode\": \"Offline\",\r\n        \"Name\": \""+name+"\",\r\n        \"Father_Name\": \"\",\r\n        \"Mother_Name\": \"\",\r\n        \"Email_1\": \""+email+"\",\r\n        \"Email_2\": \"\",\r\n        \"Contact_1\": \""+phone+"\",\r\n        \"Contact_2\": \"\",\r\n        \"Address\": \"\",\r\n        \"Country\": \"India\",\r\n        \"State\": \""+state+"\",\r\n        \"District\": \""+city+"\",\r\n        \"Locality\": \"\",\r\n        \"Lead_Source_Type\": null,\r\n        \"Lead_Source_Name\": null,\r\n        \"Operation\": \"Add\",\r\n        \"SubmittedByCode\": null,\r\n        \"SubmittedByName\": null,\r\n        \"LeadComeFrom\": \"\",\r\n }\r\n",
				};
				 
				$.ajax(settings).done(function (response) {
				  console.log(response);
				//var obj = jQuery.parseJSON(response);
				//alert(response.Message.Status);
				//console.log(settings);
				//console.log(response); 
				//return false;
				if(response.Message.Status =='Success'){
					//alert('Success');
					window.location.href = "thankyou.html";

					
				}
				 
				 
				});
				
				}); 
				
				
				return false;
            } 
        });
 })
