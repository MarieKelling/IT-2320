$(document).ready(function ()
{
    $(".player-number-button").click(ButtonClick); 

});

ButtonClick = function ()
{
    $.ajax
        ({
            url: "Home/GetPlayerInformation",

            data:
            {
                PlayerNumber: $(".player-number-textbox-input").val()
            },

            success: function (RawData)
            {
                response = JSON.parse(RawData); 
                $(".output").html(response.PlayerName);     
            },

            error: function (RawData)
            {
                response = JSON.parse(RawData);
                if (response.PlayerNumber != 23 || response.PlayerNumber != 2 || response.PlayerNumber != 17)
                {
                    $(".output").html("Player not found"); 
                }
            }

        }); 

}




//His Solution: 

//$(document).ready(function () {

//    var textbox = $(".player-number-textbox-input");
//    var button = $(".player-number-button");
//    var output = $(".output");

//    button.click(function () {
//        $.ajax({
//            url: "Home/GetPlayerInformation",
//            data: { PlayerNumber: textbox.val() },
//            success: function (stringResponse) {
//                response = JSON.parse(stringResponse);
//                output.html(response.PlayerName);
//            }
//        });
//    });
//});