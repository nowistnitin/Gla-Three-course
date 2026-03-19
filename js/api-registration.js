var urlvar = 'https://glawebapi.glaonline.com/api/AdmissionRegistration/'
    //urlvar = 'https://localhost:44395/api/AdmissionRegistration/'

function LoadRegistrationForm(target, source, coursespecialization) {
    //setTimeout(function () {
        $('#' + target).html('<div style="text-align: center;"><img id="imgLoading_Email" src="https://onlinedemo.gla.ac.in/img/loading.svg" style="width: 40px;"><p>Loading Registration Form</p></div>');
    $.ajax({
        url: urlvar +'GetAdmissionRegistrationHTMLForm',
           // url: 'https://localhost:44395/api/AdmissionRegistrationForm/GetAdmissionRegistrationHTMLForm',

            crossOrigin: true,
        success: function (data) {
           
                

                var loc = document.location.hostname;
                

                //setTimeout(function () {
                $('#' + target).hide();
                $('#' + target).html(data);
                //}, 0);

               

               //if (source != 'masters-program') {
//    try {
//        LoadLoginPage(loc);
//    } catch (e) {

//    }
//}
//else {
//    $('#btnAlreadyRegistered').remove();
//}

                $('#hfSource').val(source);
                setTimeout(function () {
                    $('#' + target).show();

                }, 1000);
                //var Discipline = "NON ENGG.";

            function DisplayPrograms(coursespecialization) {
                 
                    $.ajax({
                        url: urlvar + 'GetOnlineProgram_LP?Specialization=' + coursespecialization,
                        crossOrigin: true,
                        success: function (data) {
                            $('#ddlSpecialization').html(data);
                            //AutoCompleteTextBox('txtCity', 'hfCity', '', 'https://glawebapi.gla.ac.in/api/AdmissionRegistration/GetCities', '::', 'CitySelected');

                            //AutoCompleteTextBox('txtCountry', 'hfCountry', '', 'https://glawebapi.gla.ac.in/api/AdmissionRegistration/GetCities', '::', 'CitySelected');
                        }
                    });
                }

                //function DisplayCourse(Degree) {
                  
                //    // $('#ddlProgram').html('<option>Loading Programs</option>');
                //    $.ajax({

                //        url: urlvar + 'AdmissionRegistration/GetOnlineCourse_LP?Degree=' + Degree,
                //        crossOrigin: true,
                //        success: function (data) {                          
                       
                //            $('#ddlCourse').html(data);
                //            var ShortName = $('#ddlCourse').val();
                         
                //            DisplaySpecializationStreamWise(ShortName);
                //        }
                //        ,
                //        error: function (xhr, ajaxOptions, thrownError) {
                //        }
                //    });
                //}


                //function DisplaySpecializationStreamWise(ShortName) {
                  
                //    // $('#ddlProgram').html('<option>Loading Programs</option>');
                //    $.ajax({

                //        url: urlvar + 'GetOnlineSpecializationStreamWise_LP?Course=' + ShortName,
                //        crossOrigin: true,
                //        success: function (data) {
                         
                //            $('#ddlSpecialization').html(data);

                         

                //        }
                //        ,
                //        error: function (xhr, ajaxOptions, thrownError) {
                //        }
                //    });
                //}


                //function DisplaySpecialization(Course) {
                //    // $('#ddlProgram').html('<option>Loading Programs</option>');
                //    $.ajax({

                //        url: urlvar + 'GetOnlineSpecialization_LP?Specialization=' + Course,
                //        crossOrigin: true,
                //        success: function (data) {
                        
                //            $('#ddlSpecialization').html(data);
                //            var Specialization = $('#ddlSpecialization').val();

                //            DisplayPrograms(Specialization);
                //        }
                //        ,
                //        error: function (xhr, ajaxOptions, thrownError) {
                //        }
                //    });
                //}

                //function DisplayAllProgram(source, coursespecialization) {
                //    // $('#ddlProgram').html('<option>Loading Programs</option>');
                //    $.ajax({

                //        url: urlvar + 'GetOnlineAllPrograms_LP?source=' + source + '&coursespecialization=' + coursespecialization,
                //        crossOrigin: true,
                //        success: function (data) {

                //            $('#ddlCourse').html(data);
                //        }
                //        ,
                //        error: function (xhr, ajaxOptions, thrownError) {
                //        }
                //    });
                //}

                function DisplayCountry(Code, target) {
                    $('#' + target).html('<option>Loading Country</option>');
                    $.ajax({
                        url: urlvar + 'GetOnlineStudentCountry?Code=' + source,
                        crossOrigin: true,
                        success: function (data) {
                            $('#' + target).html(data);
                        
                        }
                    });
                }

                function DisplayStates(Code, target) {
                    $('#' + target).html('<option>Loading State</option>');
                    $.ajax({
                        url: urlvar + 'GetOnlineStudentState?Code=' + Code,
                        crossOrigin: true,
                        success: function (data) {
                            $('#ddlState').html(data);


                        }
                    });
                }


                function DisplayCities(Code, target) {
                    $('#' + target).html('<option>Loading Cities</option>');
                    $.ajax({
                        url: urlvar + 'GetOnlineStudentCity?Code=' + Code,
                        crossOrigin: true,
                        success: function (data) {
                            $('#ddlCity').html(data);

                        }
                    });
                }
                setTimeout(function () {

                    //   DisplayPrograms('', 'ddlProgramInterested', source);

                    if (source != 'masters-program') {
                        $('#btnAlreadyRegistered').on('click', function (e) {
                            $('header').attr('style', 'z-index:1');
                            $('.loginPopup').addClass("swap");
                            $('body').addClass("noscroll");

                            e.preventDefault();
                        });
                    }


                    //  $('#ddlProgramInterested').change(function () {
                    var Discipline = $('#ddlProgram').val();
                    if (Discipline != 'Select Discipline') {
                        //CheckValidators();
                    }


                    //if (source == '' && coursespecialization == '') 
                    //{
                    //    DisplayAllProgram(source, coursespecialization);
                    //}
                    //  else if (source !== '') {
                    //    DisplaySpecialization(source);
                    //} else {
                    //    DisplayCourse(coursespecialization);
                    //}






                    //DisplayPrograms(Discipline, 'ddlDegree', source);
                    DisplayCountry('1', 'ddlCountry');
			
                    if (coursespecialization == '' || coursespecialization == null) {
                        DisplayPrograms('1');
                    } else {
                        DisplayPrograms(coursespecialization);
                    }
                   
                    //      });

                    //$('#txtCity').keypress(function () {
                    //    $('#hfCity').val('');
                    //});

                    //$('#txtCountry').keypress(function () {
                    //    $('#hfCountry').val('');
                    //});



                    //$("#ddlDegree").on('change', function () {
                    //    var Degree = $('#ddlDegree').val();
                   
                    //    DisplayCourse(Degree);

                    //});

                    $("#ddlCourse").on('change', function () {
                        var Course = $('#ddlCourse').val();
                     
                        DisplaySpecializationStreamWise(Course);

                    });
setTimeout(function () {
		    $("#ddlCountry").val('101');
 DisplayStates(101,'ddlState' );
}, 500);
                    $("#ddlCountry").on('change', function () {
                        var Country = $('#ddlCountry').val();

                        DisplayStates(Country,'ddlState' );

                    });



                    $("#ddlState").on('change', function () {
                        var State = $('#ddlState').val();

                        DisplayCities(State, 'ddlCity');

                    });

	setTimeout(function() {
$('#ddlDay').val("01");
$('#ddlMnt').val("01");
$('#ddlyear').val("1990");
    $("#divDOB").css('display', 'none');
    $('#divDate').css('display', 'none');
    $('#divMonth').css('display', 'none');
    $('#divYear').css('display', 'none');
}, 500);

                    $('#btnRegisterNow').click(function () {
                                                
                        try {
                            var actual_source = getParameterByName("type");
                            var utm_source = getParameterByName("utm_source");
                            var utm_campaign = getParameterByName("utm_campaign");
                            var utm_medium = getParameterByName("utm_medium");
                            

                            //if (actual_source != '' && actual_source != undefined && actual_source != '0') {
                            //    source = actual_source;
                            //}
                            if (utm_source != '' && utm_source != undefined && utm_source != '0') {
                                actual_source = utm_source + "~" + utm_medium + "~" + utm_campaign
                                source = actual_source;
                            }
                        } catch (e) {

                        }
                       
                        var Remarks = '';
                        Remarks = CheckTextValue('txtStudentName:input,txtEmailID:input,txtMobileNo:input');

                        if (Remarks == '') {
                            Remarks = CheckDropValue('ddlCountry,ddlState,ddlCity,ddlSpecialization,ddlDay,ddlMnt,ddlyear');
                            if (Remarks == '') {
                                if (IsEmail($('#txtEmailID').val())) {
                                    var MobileNo = $('#txtMobileNo').val();
                                    //  if (MobileNo.length == 10 && (MobileNo.substring(0, 1) == '4' || MobileNo.substring(0, 1) == '5' || MobileNo.substring(0, 1) == '6' || MobileNo.substring(0, 1) == '7'
                                    //|| MobileNo.substring(0, 1) == '8' || MobileNo.substring(0, 1) == '9')) {

                                    if (MobileNo.length == 10 && /^[4-9]/.test(MobileNo)) {
                                        if ($('#txtCity').val() != '') {
                                            var Name = $('#txtStudentName').val();
                                            var EmailId = $('#txtEmailID').val();
                                            var ProgramCode = $('#ddlSpecialization').val();
                                            //var ProgramName = $('#ddlProgram :selected').text();                                            
                                            var CityName = $('#ddlCity').val();
                                            var Day = $('#ddlDay').val();
                                            var Month = $('#ddlMnt').val();
                                            var Year = $('#ddlyear').val();
                                            var DOB = Month + '/' + Day + '/' + Year;
                                            var MobileOTP = $('#txtMobileOTP').val();
                                            var api_url = '';
                                         
                                      
                                            

 $.ajax({
     url: urlvar + 'PostJsonRegistrationFormOnline_LP?Name=' + Name +
         '&Day=' + Day +
         '&Month=' + Month +
         '&Year=' + Year +
         '&EmailId=' + EmailId +
         '&Mobile=' + MobileNo +
         '&ProgramCode=' + ProgramCode +
         '&source=' + source +
         '&City=' + CityName +
         '&MobileOTP=' + MobileOTP,
     crossOrigin: true,
                                               
                                                success: function (msg) {
                                                    var data = msg.d;
                                                    var val = msg.split('@@@@')[0];
                                                    var message = msg.split('@@@@')[1];
                                                    if (val == '1' || val == '0') {
                                                        if (val == '1') {
                                                            var autoLoginCode = msg.split('@@@@')[2]; //"QAEZD348VFWRRF4AUQGQEZOBXMUWGTV1";
                                                            sessionStorage.setItem("GLAOL_AutoLoginCode", autoLoginCode);
                                                            sessionStorage.setItem("EmailId", EmailId);
                                                            sessionStorage.setItem("MobileNo", MobileNo);
							    sessionStorage.setItem("FName", Name);

                                                            //Clear();
                                                            	//swal({
								//    type: 'success',
								//    title: 'Success!',
								//    text: 'Registration successful, please check your Email for userid and password',
								//    timer: 2000
								//});
								setTimeout(function () { alert('Registration successful, please check your Email for userid and password'); }, 2000);
                                                            setTimeout(function () {
                                                                window.location.href = 'thanks.html'
                                                            }, 2000)
                                                        } else {
                                                            swal('Error!', message, 'error');
                                                            $('#btnRegisterNow').prop('disabled', '');
                                                        }
                                                    } else {
                                                        swal('Error!', message, 'error');
                                                        $('#btnRegisterNow').prop('disabled', '');
                                                    }
                                                }, error: function (jqXHR, exception) {
                                                    $('#btnRegisterNow').prop('disabled', '');
                                                    if (jqXHR.responseText == 'Already Exist') {
                                                        alert('ERROR', 'Email Id or Mobile No already registered, please check and try again', 'error');
                                                    }
                                                }
                                            });
                                        }

                                    }
                                    else {
                                        var template = '<div class="mktoError"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg">Mobile No not valid</div></div>';

                                        $('#txtMobileNo').addClass('Validation-Req');
                                        $('#txtMobileNo').parent('div').append(template);
                                        alert('ERROR', 'Mobile No not valid', 'error');
                                        return false;
                                    }
                                }
                                else {
                                    var template = '<div class="mktoError"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg">Email Id not valid</div></div>';

                                    $('#txtEmailID').addClass('Validation-Req');
                                    $('#txtEmailID').parent('div').append(template);
                                    swal('ERROR', 'Email Id not valid', 'error');
                                    return false;
                                }
                            }
                            else {
                                swal('ERROR', 'Please Select ' + Remarks, 'error');
                                return false;
                            }
                        }
                        else {
                            swal('ERROR', 'Please Enter ' + Remarks, 'error');
                            return false;
                        }
                    });

$('#btnSignIn').click(function (event) {
    event.preventDefault();
    SignIn();
});



                    $("#btnSendOTP").click(function () {
                        //CheckValidators();
                        var MobileNo = $('#txtMobileNo').val();
                        var name = $('#txtStudentName').val();
                        var emailid = $('#txtEmailID').val();
                        var missingFields = [];

                        if (MobileNo.trim() === "") {
                            missingFields.push("Mobile No");
                        }
                        if (name.trim() === "") {
                            missingFields.push("Name");
                        }
                        if (emailid.trim() === "") {
                            missingFields.push("Email ID");
                        }

                        if (missingFields.length > 0) {
                            var msg = missingFields.join(" and ") + " cannot be blank.";
                            swal('Warning!', msg, 'error'); // or display it however you'd like
                            return;
                        }
                        if (MobileNo) {
                            if ($('#p_Error').text() == '') {
                                
                            
                                    $.ajax(
                                        {
                                            //url: urlvar + 'GetOnlineSpecialization_LP?Degree=' + Course,

                                            
                                            url: urlvar + 'SendOTP_OL?name=' + name + '&emailid=' + emailid + '&mobile=' + MobileNo,

                                            crossOrigin: true,
                                            success: function (msg) {
                                                var data = msg.d;
                                                var val = msg.split('@@@@')[0];
                                                var message = msg.split('@@@@')[1];
                                           
                                                if (val == '1' || val == '0') {
                                                    if (val == '1') {
                                                        document.getElementById("lblPrintMessage").innerHTML = message;
                                                        $('.otp-sec p').show();
                                                        $('#btnRegisterNow').show();
                                                        $('#btnSendOTP').hide();
                                                        $('#lnkbtnResendOTP').hide();
                                                        $('#divResendOTP').css("display", "flex");
                                                        $('#resendoptcontrol').css("display", "flex");

                                                        $('#txtStudentName').attr('disabled', 'disabled');
                                                        $('#txtEmailID').attr('disabled', 'disabled');
                                                        $('#txtMobileNo').attr('disabled', 'disabled');

                                                        var counter = 60;
                                                        var interval = setInterval(function () {
                                                            counter--;
                                                            if (counter <= 0) {
                                                            
                                                                clearInterval(interval);
                                                                $('.otp-sec p').hide();
                                                                $('#lnkbtnResendOTP').show();
                                                                return;
                                                            } else {
                                                                $('.otp-sec span').text(counter);
                                                            }
                                                        }, 1000);
                                                        swal({
                                                           
                                                            type: 'success',
                                                            title: 'Success!',
                                                            text: 'OTP Sent successfully, please check your Email or Mobile',
                                                            timer: 10000,
                                                     
                                                        });
                                                    } else {
                                                        swal('Error!', message, 'error');
                                                        $('#btnSendOTP').prop('disabled', '');
                                                    }
                                                } else {
                                                    swal('Error!', message, 'error');
                                                    $('#btnSendOTP').prop('disabled', '');
                                                }
                                            }
                                        });


                             

                                //}
                                //else {
                                //    $('#txtCity').addClass('required-field');
                                //    swal('ERROR', 'City not valid, please type your City & select from list', 'error');
                                //}
                            }
                            else {
                                swal('ERROR', 'Some details are invalid, check below message', 'error');
                            }
                        }
                        return false;
                    });

                    $("#lnkbtnResendOTP").click(function () {
                                var MobileNo = $('#txtMobileNo').val();
                                if (MobileNo) {
                                    var name = $('#txtStudentName').val();
                                    var emailid = $('#txtEmailID').val();
                                    $.ajax(
                                        {
                                            url: urlvar + 'ReSendLoginOTP_OL?name=' + name + '&emailid=' + emailid + '&mobile=' + MobileNo,

                                            crossOrigin: true,
                                            success: function (msg) {
                                               
                                                var data = msg.d;
                                                var val = msg.split('@@@@')[0];
                                                var message = msg.split('@@@@')[1];
                                             
                                                if (val == '1' || val == '0') {
                                                    if (val == '1') {
                                                    
                                                        document.getElementById("lblPrintMessage").innerH
                                                        TML = message;
                                                        $('.otp-sec p').show();
                                                        $('#btnRegisterNow').show();
                                                        $('#btnSendOTP').hide();
                                                        $('#lnkbtnResendOTP').hide();
                                                        $('#divResendOTP').css("display", "flex");
                                                        $('#resendoptcontrol').css("display", "flex");

                                                        var counter = 60;
                                                        var interval = setInterval(function () {
                                                            counter--;
                                                            if (counter <= 0) {
                                                              
                                                                clearInterval(interval);
                                                                $('.otp-sec p').hide();
                                                                $('#lnkbtnResendOTP').show();
                                                                return;
                                                            } else {
                                                                $('.otp-sec span').text(counter);
                                                                $('#lnkbtnResendOTP').hide();
                                                            }
                                                        }, 1000);
                                                        swal({
                                                            type: 'success',
                                                            title: 'Success!',
                                                            text: 'OTP Sent successfully, please check your Email or Mobile',
                                                            timer: 10000
                                                        });
                                                    } else {
                                                        swal('Error!', message, 'error');
                                                        $('#lnkbtnResendOTP').prop('disabled', '');
                                                    }
                                                } else {
                                                    swal('Error!', message, 'error');
                                                    $('#lnkbtnResendOTP').prop('disabled', '');
                                                }
                                            }
                                        });

                                }
                            else {
                                swal('ERROR', 'Some details are invalid, check below message', 'error');
                            }
                        return false;
                    });



                    const AlreadyRegisteredButton = document.getElementById('btnalreadyregistered');
                    // const loginForm = document.getElementById('div_loginform');
                    
                    var txtchng = document.getElementById('txt-change');
                    
                    AlreadyRegisteredButton.addEventListener('click', function () {

                        $('.api-regform').hide();
                        $('#div_loginform').show();
                        
                        //txtchng.innerHTML = "Log in";

                        return false;
                    });
                    const RegisteredButton = document.getElementById('btnregisternow');
                
                    RegisteredButton.addEventListener('click', function () {

                        $('.api-regform').show();
                        $('#div_loginform').hide();
                        
                        //txtchng.innerHTML = "Sign up";

                        return false;
                    });
                    $.event.special.inputchange = {
                        setup: function () {
                            var self = this, val;
                            $.data(this, 'timer', window.setInterval(function () {
                                val = self.value;
                                if ($.data(self, 'cache') != val) {
                                    $.data(self, 'cache', val);
                                    $(self).trigger('inputchange');
                                }
                            }, 20));
                        },
                        teardown: function () {
                            window.clearInterval($.data(this, 'timer'));
                        },
                        add: function () {
                            $.data(this, 'cache', this.value);
                        }
                    };



                    $('input[type="text"]').on('inputchange', function () {
                        if ($(this).attr('id') != 'txtEmailID') {
                            var template = '<div class="mktoError"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg">This field is required.</div></div>';
                            $(this).removeClass('Validation-Req');
                            $(this).parent('div').find('div[class="mktoError"]').remove();
                            var _text = $(this).val();
                            if (_text == '') {

                                $(this).addClass('Validation-Req');
                                $(this).parent('div').append(template);
                            }
                        }
                    });

                    $('#txtStudentName').bind("keypress", function (e) {
                        var regex = new RegExp("^[a-zA-Z ]+$");
                        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                        if (regex.test(str)) {
                            return true;
                        }
                        else {
                            e.preventDefault();
                            return false;
                        }
                    });

                    //$('#txtCity').bind("keypress", function (e) {
                    //    var regex = new RegExp("^[a-zA-Z ]+$");
                    //    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                    //    if (regex.test(str)) {
                    //        return true;
                    //    }
                    //    else {
                    //        e.preventDefault();
                    //        return false;
                    //    }
                    //});

                    //$('#txtCity').bind("keypress", function (e) {
                    //    var regex = new RegExp("^[a-zA-Z ]+$");
                    //    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                    //    if (regex.test(str)) {
                    //        return true;
                    //    }
                    //    else {
                    //        e.preventDefault();
                    //        return false;
                    //    }
                    //});

                    $('#txtMobileNo').bind("keypress", function (e) {
                        if (e.shiftKey || e.ctrlKey || e.altKey) {
                            e.preventDefault();
                        } else {
                            var key = e.keyCode;
                            if (!(key >= 48 && key <= 57)) {
                                e.preventDefault();
                            }
                        }
                    });

                    $('#txtEmailID').on('inputchange', function () {
                        var template = '<div class="mktoError"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg">Email Id not valid</div></div>';

                        $(this).removeClass('Validation-Req');
                        $(this).parent('div').find('div[class="mktoError"]').remove();
                        if (!IsEmail($(this).val())) {
                            $(this).addClass('Validation-Req');
                            $(this).parent('div').append(template);
                        }
                    });



                    var timer;
                    var delay = 400; // 0.4 seconds delay after last input

                    $('#txtEmailID').bind('input', function () {
                        $('#imgLoading_Email').show();
                        $('#imgLoading_Email_Ok').hide();
                        $('#p_Error').hide();
                        $('#p_Error').text('');
                        window.clearTimeout(timer);
                        timer = window.setTimeout(function () {
                            //insert delayed input change action/event here
                            var EmailID = $('#txtEmailID').val();
                            var Source = $('#hfSource').val();
                            CheckEmailMobile(EmailID, 'e', Source, 'imgLoading_Email');

                        }, delay);
                    });


                    $('#txtMobileNo').bind('input', function () {
                        $('#imgLoading_Mobile').show();
                        $('#imgLoading_Mobile_Ok').hide();
                        $('#p_Error').hide();
                        $('#p_Error').text('');
                        window.clearTimeout(timer);
                        timer = window.setTimeout(function () {
                            //insert delayed input change action/event here
                            var MobileNo = $('#txtMobileNo').val();
                            var Source = $('#hfSource').val();
                            CheckEmailMobile(MobileNo, 'm', Source, 'imgLoading_Mobile');

                        }, delay);
                    });

                }, 2500);

            }
        });
    //}, 500);

 

}

function AutoCompleteTextBox(source, target, targetfull, servicepath, splitter, ref_fn) {
    try {


        $('#txtCity').autocomplete({

            source: function (request, response) {
                $.ajax({
                    url: servicepath,
                    crossOrigin: true,
                    dataType: 'json',
                    data: {
                        Prefix: request.term
                    },
                    success: function (data) {
                        response($.map(data, function (item) {
                            return {
                                //div: item.split('-')[0],
                                label: item.split('::')[0],
                                val: item.split('::')[1],
                                // value: item.split('-')[1]

                            }

                        }))
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
            },
            select: function (e, i) {
                if (target != '') {
                    $("#" + target).val(i.item.val);
                }
                if (targetfull != '') {
                    $("#" + targetfull).val(i.item.label);
                }
                if (ref_fn != '') {
                    window[ref_fn]($(this).attr('id'));
                }
            },
            minLength: 3
        });
    } catch (e) {

    }
}



function CheckEmailMobile(data, type, Source, target) {


    $('#' + target + '_Ok').attr('title', '');
    $.ajax({

        
        url: urlvar + 'CheckEmailMobile_LP?data=' + data + '&type=' + type + '&Source=direct',
        crossOrigin: true,
        success: function (msg) {
            $('#' + target).hide();

            $('#' + target + '_Ok').show();
            if (msg == 'ok') {
                if (type == 'e') {

                    setTimeout(function () {
                        if (!IsEmail(data)) {
                           
                            $('#' + target + '_Ok').attr('src', 'https://glawebapi.glaonline.com/Images/cross-tick.png');
                        }
                        else {
                            
                            $('#' + target + '_Ok').attr('src', 'https://glawebapi.glaonline.com/Images/green-tick.png');

                        }
                    }, 500);


                }
                else if (type == 'm') {
                    if (data.length == 10) {
                       
                        $('#' + target + '_Ok').attr('src', 'https://glawebapi.glaonline.com/Images/green-tick.png');

                    }
                    else {
                        
                        $('#' + target + '_Ok').attr('src', 'https://glawebapi.glaonline.com/Images/cross-tick.png');

                    }
                }


            }
            else {
                if (data != '') {
                    $('#p_Error').text(msg);
                    $('#p_Error').show();
                    $('#' + target + '_Ok').attr('title', msg);
                   
                    $('#' + target + '_Ok').attr('src', 'https://glawebapi.glaonline.com/Images/cross-tick.png');

                }
                else {
                    $('#p_Error').text('');
                    $('#p_Error').hide();
                    $('#' + target + '_Ok').attr('title', '');
                    $('#' + target + '_Ok').hide();
                }
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        }
    });
}
function IsEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function CheckTextValue(txtbox) {
    var remarks = '';
    for (var i = 0; i < txtbox.split(',').length; i++) {
        var data = txtbox.split(',')[i];
        var id = data.split(':')[0];
        var type = data.split(':')[1];
        if ($(type + '[id*="' + id + '"]').val() == '') {
            $(type + '[id*="' + id + '"]').addClass('Validation-Req');
            
            var template = '<div class="mktoError"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg">This field is required.</div></div>';
            if ($(type + '[id*="' + id + '"]').parent('div').html().indexOf('mktoError') == -1) {
                //if (id != 'txtMobileNo') {
                //    $(type + '[id*="' + id + '"]').parent('div').append(template);
                //}
                //else { $(type + '[id*="' + id + '"]').parent('div').parent('div').append(template); }
                $(type + '[id*="' + id + '"]').parent('div').append(template);
            }
            if (remarks == '') {
                remarks = $(type + '[id*="' + id + '"]').attr('data-validation');
            }
            else {
                remarks = remarks + "," + $(type + '[id*="' + id + '"]').attr('data-validation');
            }

        }
        else {
            $(type + '[id*="' + id + '"]').removeClass('Validation-Req');

            $(type + '[id*="' + id + '"]').parent('div').find('div[class="mktoError"]').remove();
        }
    }
    return remarks;
}

function CheckDropValue(dropdown) {
    var remarks = '';
    for (var i = 0; i < dropdown.split(',').length; i++) {

        var id = dropdown.split(',')[i];
        if ($('select[id="' + id + '"]').val() == '0' || $('select[id="' + id + '"]').val() == '' || $('select[id="' + id + '"]').val() == 'undefined'
            || $('select[id="' + id + '"]').val() == 'null' || $('select[id="' + id + '"]').val() == 'Select' || $('select[id="' + id + '"]').val() == 'Select Discipline') {



            $('select[id="' + id + '"]').addClass('Validation-Req');
            if (remarks == '') {
                remarks = $('select[id="' + id + '"]').attr('data-validation');
            }
            else {
                remarks = remarks + "," + $('select[id="' + id + '"]').attr('data-validation');
            }

        }
        else {
            $('select[id="' + id + '"]').removeClass('Validation-Req');
        }
    }
    return remarks;
}

function CitySelected() {
    var CityIdFull = $('#hfCity').val();


    $('#hfCity').val(CityIdFull.split(':')[0]);
}
function CheckValidators() {
    setTimeout(function () {
        var Day = $('#ddlDate').val();
        var Month = $('#ddlMnt').val();
        var Year = $('#ddlyear').val();

        if (Day == '0' || Month == '0' || Year == '0') {
            //   $('.dob-inp').addClass('required-field');
            if (Day == '0') {
                $('#span_dob').text('Select Day');
            }
            else if (Month == '0') {
                $('#span_dob').text('Select Month');
            }
            else if (Year == '0') {
                $('#span_dob').text('Select Year');
            }
        }
        else {
            $('.dob-inp').removeClass('required-field');
            $('#span_dob').text('');
        }
    }, 200);

}

//$(document).ready(function () {
//    $('#btnSignIn').click(function (event) {
//       // event.preventDefault();
//alert('222');
//        SignIn();
//    });
//});
function LoadLoginPage(location) {
    //alert('rdgd')
    var login_elem = document.createElement('div');
    login_elem.className = "userLoginFrom";
    login_elem.style = "display:none";
    $('body').append(login_elem);
    setTimeout(function () {
        $.ajax({

            url: urlvar + 'GetLoginHTMLForm',
            crossOrigin: true,
            success: function (data) {

                

                setTimeout(function () {

                    $('.userLoginFrom').show();

                    $('#closePopup').on('click', function (e) {
                        $('.loginPopup').removeClass("swap");
                        $('body').removeClass("noscroll");
                        $('header').attr('style', 'z-index:99999');
                        e.preventDefault();
                    });


                    $('#btnSignIn').click(function () {
                        SignIn();
                    });

                    $("#txtPassword").keydown(function (e) {
                        if (e.keyCode == 13) {
                            SignIn();
                        }
                    });
                }, 500);
            }
        });
    }, 500);
}
function SignIn() {

    var username = $('#txtUserId').val();
    var password = $('#txtPassword').val();

    $(".login-fields-error").remove();

    if (username.length < 1) {
        $('#txtUserId').after('<span class="login-fields-error">Enter User Id</span>');
        document.getElementById("txtUserId").style.borderColor = "red";
    }
    else {
        document.getElementById("txtUserId").style.borderColor = "#ddd";
    }

    if (password.length < 1) {
        $('#txtPassword').after('<span class="login-fields-error">Enter Password</span>');
        document.getElementById("txtPassword").style.borderColor = "red";
    }
    else {
        document.getElementById("txtPassword").style.borderColor = "#ddd";
    }

    console.log('userid', username)
    console.log('Password', password)

    if (username != '' && password != '') {
        setTimeout(function () {
            $.ajax({

                url: urlvar + 'ValidateUserLogin?UserId=' + username + '&Password=' + password,
                crossOrigin: true,
                success: function (data) {

                    console.log('data', data)
                    var bj = jQuery.parseJSON(data);
                    var url = bj.RedirectURL;

                    var response = bj.Response;
                    if (url != '') {
                        window.location.href = url;
                    }
                    else {
                        p_LoginError.innerText = response;
                        alert('ERROR', 'User Id or Password not valid, please check and try again', 'error');
                    }
                }
            });
        }, 500);
     
    }
}

$(document).ready(function () {
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 0.5);
    };

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
 

    /* $('#divResendOTP').hide(); // Initially hide the div
    ; // Initially hide the div*/
    //$('#btnRegisterNow').hide();
});