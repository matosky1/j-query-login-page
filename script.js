$(document).ready(function(){
    $("#loginform").submit(function(event){
        // Prevent form submission
        event.preventDefault();

        // Reset error messages
        $(".error").text("");

        // Remove any previous error styles
        $("#password").removeClass("error-input");

        // Fetch input values
        var username = $("#username").val();
        var password = $("#password").val();

        // Simple validation
        if(username.trim() === "") {
            $("#usernameError").text("Please enter a username.");
            return;
        }
        if(password.trim() === "") {
            $("#passwordError").text("Please enter a password.");
            return;
        }

        // Check password length
        if (password.length < 5) {
            $("#passwordError").text("Password must be at least 5 characters.");
            $("#password").addClass("error-input"); 
            return;
        } else {
            
            $("#correctPassword").text("Correct Password: " ); 
        }
    });
});
