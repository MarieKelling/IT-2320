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
                success: function (RawData)
                {
                    alert(RawData)
                    var response = JSON.parse(RawData)
                    alert(response.Message)

                    if (response.Message == "Success") {
                        alert("Account has been successfully created!");
                    }
                    else
                    {
                        if (response.Username == "Invalid") {
                            alert("Username must be at least 6 characters long");
                        }
                        if (response.Username == "Exists") {
                            alert("This username is already taken");
                        }
                        if (response.Password == "Invalid") {
                            alert("Password must be at least 6 characters long");
                        }
                        if (response.EmailAdd == "Invalid") {
                            alert("Email must contain a '@' in order to be valid");
                        }
                        if (response.EmailCon == "Invalid") {
                            alert("You must enter a value for this field");
                        }
                        if (response.EmailCon == "Mismatch") {
                            alert("Your Emails do not match");
                        }
                    }
                }
            }
            );

    });

});