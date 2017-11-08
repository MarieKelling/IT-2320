var Home = {}

Home.CreateButtonClick = function ()
{

    $.ajax
      ({
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
				
				alert(RawData);
                var response = JSON.parse(RawData);
                alert(response.Message);

                if (response.Message == "Success") {
                    alert("Account has been succesfully created!");
                }

                else 
				{
                    

                    if (response.Username == "Invalid") {
                        alert("Username must be at least 6 characters long")
                    }

                    if (response.Username == "Exists") {
                        alert("This username is already taken")
                    }

                    if (response.Password == "Invalid") {
                        alert("Password must be at least 6 characters long");
                    }

                    if (response.EmailAdd == "Invalid") {
                        alert("Email must contain a '@' in order to be valid");
                    }

                    if (response.EmailCon == "Invalid") {
                        alert("You must enter a value for this field")
                    }

                    if (response.EmailCon == "Mismatch") {
                        alert("Your Emails do not match");
                    }
                }
            }
      });
}

Home.LogInButtonClick = function () {

    $.ajax
       ({
            url: "Home/Login",
            data:
            {
                "Username": $(".username").val(),
                "Password": $(".password").val()
            },

            success: function (RawData)
            {
                var response = JSON.parse(RawData)

                if (response.Message == "Success") {
                    alert("Username and Password match with an account")
                }
                else {
                    alert("An error has ocurred...");

                    if (response.Username == "Invalid") {
                        alert("Username does not match an existing account");
                    }

                    if (response.Password == "Wrong") {
                        alert("Password does not match an existing account");
                    }
                }
            }
       });
}

Home.GetAccountInfo = function ()
{
    $.ajax
        ({
            url: "Home/GetAccountInformation",
            data:
            {
                "Username": $(".username").val()

            },

            success: function (RawData)
            {
                var response = JSON.parse(RawData)

                alert(response);
            }

        });
}

    $(document).ready(function () {

        $(".submitCreate").click(Home.CreateButtonClick);
        $(".submitLogIn").click(Home.LogInButtonClick);
        $(".infoButton").click(Home.GetAccountInfo);

    });
