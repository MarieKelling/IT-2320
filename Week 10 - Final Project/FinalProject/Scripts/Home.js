var Home = {}

Home.CreateAccountClick = function ()
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
                
                var response = JSON.parse(RawData)
                //alert(response.Message);
                alert("Raw Data: " + RawData);


                if (response.Message == "Success") {
                    //alert("Account has been successfully created!");
                  
                    $(".output").append(response.Message + ": Congratulations! Account Successfully Created");
                    
                }
                else {
                    if (response.Username == "Invalid") {
                       
                        $(".output").append(response.Message + ": Username must be at least 6 characters long");
                    }
                    if (response.Username == "Exists") {
                        
                        $(".output").append(response.Message + ": This username is already taken");
                    }
                    if (response.Password == "Invalid") {
                       
                        $(".output").append(response.Message + ": Password must be at least 6 characters long");
                    }
                    if (response.EmailAdd == "Invalid") {
                       
                        $(".output").append(response.Message + ": Email must contain a '@' in order to be valid");
                    }
                    if (response.EmailCon == "Invalid") {
                        
                        $(".output").append(response.Message + ": You must enter a value for this field");
                    }
                    if (response.EmailCon == "Mismatch") {
                        $(".output").append(response.Message + ": Your Emails do not match");
                    }
                }
            }
        });

}; 

Home.LoginClick = function ()
{
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
                alert(response.Message);
                alert("Raw Data: " + RawData);

                if (response.Message == "Success") {
                    alert("Username and Password match with an account")
                }
                else
                {
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

Home.AccountInfoClick = function ()
{
    $.ajax
        ({
            url: "Home/GetAccountInformation",
            data:
            {
                "Username": $(".getInfoTextbox").val() 

            },

            success: function (RawData)
            {
                var response = JSON.parse(RawData);
                alert(response.Message);
                alert("Raw Data: " + RawData);
                alert("JSON Payload of Account Information: " + response.Payload); 
                

                //var Username = response.Username;
                //var Password = response.Password;
                //var Email = response.EmailAdd;
                
            }

        });
}

$(document).ready(function ()
{
    $(".createButton").click(Home.CreateAccountClick);
    $(".loginButton").click(Home.LoginClick); 
    $(".getInfoButton").click(Home.AccountInfoClick);
}); 