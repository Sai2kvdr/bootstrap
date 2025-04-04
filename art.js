$(document).ready(function () {
    $("#signed").click(function () {
        $(".login").hide(); 
        $(".signup").show();
        $(".forgot").hide(); 
    });

    $("#loged").click(function(){
        $(".signup").hide();
        $(".login").show();
        $(".forgot").hide();
    });

    $(".first").click(function(){
    $("html, body").animate({ scrollTop: 0 } );
    });

    $(".forgot1").click(function(){
        $(".forgot").show();
        $(".login").hide();
    });
});

//its for home

// Form validation function for login
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    var isValid = true;


    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    if (email === "") {
        emailError.innerHTML = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "") {
        passwordError.innerHTML = "Please enter your password.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        alert("Login Successful!");
    }

    return isValid;
}

//its for sign page of home

let generatedOTP = "";

function generateOTP() {
    let email = document.getElementById("newemail").value;
    let emailError = document.getElementById("newemailError");
    let otpSuccess = document.getElementById("otpSuccess");
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    if (email === "") {
        emailError.innerHTML = "Please enter your email.";
        otpSuccess.innerHTML = "";
        return;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        otpSuccess.innerHTML = "";
        return;
    }


    emailError.innerHTML = "";
    generatedOTP = Math.floor(1000 + Math.random() * 9000);
    otpSuccess.innerHTML = "OTP sent successfully: " + generatedOTP;
    alert("Your OTP is: " + generatedOTP);
}

function validateSignupForm() {
    let email = document.getElementById("newemail").value;
    let otp = document.getElementById("otp").value;
    let password = document.getElementById("newpassword").value;

    let emailError = document.getElementById("newemailError");
    let otpError = document.getElementById("otpError");
    let passwordError = document.getElementById("newpasswordError");

    emailError.innerHTML = "";
    otpError.innerHTML = "";
    passwordError.innerHTML = "";

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    if (email === "") {
        emailError.innerHTML = "Please enter your email.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (otp === "") {
        otpError.innerHTML = "Please enter the OTP.";
        return false;
    } else if (otp != generatedOTP) {
        otpError.innerHTML = "Invalid OTP. Please try again.";
        return false;
    }

    if (password === "") {
        passwordError.innerHTML = "Please create a password.";
        return false;
    } else if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters.";
        return false;
    }

    alert("Signup Successful!");
    return true;
}

//its for validationin contact
    document.getElementById("eventForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("4name").value.trim();
        var email = document.getElementById("4email").value.trim();
        var date = document.getElementById("4date").value;
        var message = document.getElementById("4message").value.trim();

        if (name === "" || email === "" || message === ""){
            alert("Please fill out all required fields.");
            return;
        }

        alert("Thank you! Your event details have been submitted successfully.");
        document.getElementById("eventForm").reset();
    });

    
   //form for forgot 

   var generate = "";

   function generatedOTP2() {
       let email2 = document.getElementById("forgotemail").value;
       let forgoterror = document.getElementById("forgotemailError"); 
       let forgototp = document.getElementById("otpSuccessf");
       var emailPattern2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
   
       if (email2 === "") {
           forgoterror.textContent = "Please enter your email.";
           forgototp.innerHTML = "";
           return;
       } else if (!emailPattern2.test(email2)) {
           forgoterror.innerHTML = "Please enter a valid email address.";
           forgototp.innerHTML = "";
           return;
       }

    forgoterror.innerHTML="";
       generate = Math.floor(1000 + Math.random() * 9000);
       forgototp.innerHTML = "OTP sent successfully: " + generate;
       alert("Your OTP is: " + generate);
   }
   
   function validateforgotForm(){
    var email = document.getElementById("forgotemail").value;
    var otp = document.getElementById("forgototp").value;
    var password = document.getElementById("forgotpassword").value;

    var emailError = document.getElementById("forgotemailError");
    var otpError = document.getElementById("forgototpError");
    var passwordError = document.getElementById("forgotpasswordError");

    emailError.innerHTML = "";
    otpError.innerHTML = "";
    passwordError.innerHTML = "";

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    if (email === "") {
        emailError.innerHTML = "Please enter your email.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (otp === "") {
        otpError.innerHTML = "Please enter the OTP.";
        return false;
    } else if (otp != generate) {
        otpError.innerHTML = "Invalid OTP. Please try again.";
        return false;
    }

    if (password === "") {
        passwordError.innerHTML = "Please create a password.";
        return false;
    } else if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters.";
        return false;
    }

    alert("Signup Successful!");
    return true;

   }
