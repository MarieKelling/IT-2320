var Home = {}

Home.AppendToOutput = function (preMessage, postMessage) {
    $(".output").append("<div>" + preMessage + ": " +  postMessage + "</div>");
}

Home.CreateAccountClick = function () 
{
    $(".output").empty();

    $.ajax
        ({
            url: "Home/CreateAccount",
            data:
            {
                "Username": $(".username-create").val(),
                "Password": $(".password-create").val(),
                "EmailAdd": $(".emailadr-create").val(),
                "EmailCon": $(".emailcon-create").val()
            },
            success: function (RawData)
            {
                var response = JSON.parse(RawData)
                //alert("Raw Data: " + RawData);

                if (response.Message == "Success") {
                    Home.AppendToOutput(response.Message, "Congratulations! Account Successfully Created");
                    Home.ShowAccount()
                }
                else {
                    if (response.Username == "Invalid") {
                        Home.AppendToOutput(response.Message, "Username must be at least 6 characters long");
                    }
                    if (response.Username == "Exists") {
                        Home.AppendToOutput(response.Message, "This username is already taken");
                    }
                    if (response.Password == "Invalid") {
                        Home.AppendToOutput(response.Message, "Password must be at least 6 characters long");
                    }
                    if (response.EmailAdd == "Invalid") {
                        Home.AppendToOutput(response.Message, "Email must contain a '@' in order to be valid");
                    }
                    if (response.EmailCon == "Invalid") {
                        Home.AppendToOutput(response.Message, "You must enter a value for this field");
                    }
                    if (response.EmailCon == "Mismatch") {
                        Home.AppendToOutput(response.Message, "Your Emails do not match");
                    }
                }
            }
        });
};

Home.LoginClick = function ()
{
    $(".output").empty();

    $.ajax
        ({
            url: "Home/Login",
            data:
            {
                "Username": $(".usernameLog").val(),
                "Password": $(".passwordLog").val()
            },
            success: function (RawData)
            {
                var response = JSON.parse(RawData)
                //alert("Raw Data: " + RawData);

                if (response.Message == "Success") {
                    Home.AppendToOutput(response.Message, "You have successfully logged in");
                    Home.ShowAccount()
                    Home.AccountInfoDisplay();
                }
                else
                {
                    if (response.Username == "Invalid") {
                        Home.AppendToOutput(response.Message, "Username does not match an existing account");
                    }

                    if (response.Password == "Wrong") {
                        Home.AppendToOutput(response.Message, "Password does not match an existing account");
                    }
                }
            }
        });
}

Home.AccountInfoDisplay = function ()
{
    $(".account-name").append($(".usernameLog").val());
}

Home.AccountInfoClick = function ()
{
    $(".output").empty();

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
                var payload = JSON.parse(response.Payload);
                Home.AppendToOutput(response.Message, "JSON Payload of Account Information: Username - " + payload.account.username + "<br/>" +
                                                                                           "Password - " + payload.account.password + "<br/>"); 
            }
        });
}

Home.AddUpdateClick = function () {

    $(".output").empty();  

    $.ajax({

        url: "Home/AddOrUpdateElement", 

        data: 
        {
            "Username": $(".username").val(),
            "ElementName" : $(".addElementName").val(),
            "ElementValue": $(".addElementValue").val()
        
        },

        success: function (RawData)
        {
            var response = JSON.parse(RawData);
            //alert("Raw Data: " + RawData);

            if (response.Message == "Success") {
                Home.AppendToOutput(response.Message, "Account has been successfully updated");
            }
            else  {
                Home.AppendToOutput(response.Message, "Username does not exist or was not entered in the correct format, Element Name cannot contain spaces");
            }
        }

    });

}

Home.ShowAccount = function () {
    $(".home").hide();
    $(".accountInfo").show();
}

$(document).ready(function ()
{
    $(".create-button").click(Home.CreateAccountClick);
    $(".login-button").click(Home.LoginClick); 
    $(".add-button").click(Home.AddUpdateClick); 
    //$(".getInfoButton").click(Home.AccountInfoClick);

    $(".home").show();
    $(".accountInfo").hide();
});