$(document).ready(function () {

    $(".submit").click(function () {

        $.ajax
        (
            {
                url: "Home/CreateAccount",
                data:
                {
                    "Username": $(".username").val(),
                    "Password": $(".password").val(),
                    "EmailAdd": $(".emailadr").val(),
                    "EmailCon": $(".emailcon").val()
                },
                success: function (result) {

                    var response = JSON.parse(result)
                        
                    if (response.Message == "Success") {
                        // Do Good Things
                        alert("Good");
                    }
                    else {
                        alert("Bad");
                        if (response.EmailAdd == "Invalid") {
                            alert("Your e-mail address is in an invalid format");
                        }
                        if (response.EmailCon == "Mismatch") {
                            alert("Your e-mail confirmation does not match.");
                        }
                    }
                }
            }
        );

    });

});