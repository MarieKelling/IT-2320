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
                "Username": $(".username").val(),
                "Password": $(".password").val(),
                "EmailAdd": $(".emailadr").val(),
                "EmailCon": $(".emailcon").val()
            },
            success: function (RawData)
            {
                var response = JSON.parse(RawData)
                alert("Raw Data: " + RawData);

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
                "Username": $(".username").val(),
                "Password": $(".password").val()
            },
            success: function (RawData)
            {
                var response = JSON.parse(RawData)
                alert("Raw Data: " + RawData);

                if (response.Message == "Success") {
                    Home.AppendToOutput(response.Message, "You have successfully logged in");
                    Home.ShowAccount()
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
                alert("Raw Data: " + RawData);
                Home.AppendToOutput(response.Message, "JSON Payload of Account Information: " + response.Payload); 
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
            alert("Raw Data: " + RawData);

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
    $(".createButton").click(Home.CreateAccountClick);
    $(".loginButton").click(Home.LoginClick); 
    $(".getInfoButton").click(Home.AccountInfoClick);
    $(".addButton").click(Home.AddUpdateClick); 

    $(".home").show();
    $(".accountInfo").hide();
});