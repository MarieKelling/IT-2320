var Home = {}                                                           //Scopes everything w/in the Home object

Home.Button1Click = function ()
{
    $.get("Home/GetMockResponseNoData", function (rawResponseData, status) //Params: url of controller - targets method on the controller, callback function
    {                                                                         //url: server call/ request
        alert(rawResponseData);                                               //function: ('GetMockResponseNoData' return value/string returned from server,
                                                                                                                                         //HTTP status code)
        var deserializedData = JSON.parse(rawResponseData);             //Deserializes raw JSON back into an object graph 
        var people = deserializedData.Data;                         //'Data' property holds the list of 2 people

        for (var i = 0; i < people.length; i++)
        {
            alert(people[i].Name);
            alert(people[i].Age);
        }
    });
}

Home.Button2Click = function ()
{
    $.ajax
    ({  //JSON
          url: "Home/GetResponseBasedOnZIPCode",          //Url of controller - targets method on controller; Method is called along w/ the info in 'data'

          data:                                         //JSON object
            {
                ZIPCode: $(".zip-code").val()           //Finds corresponding element in HTML & sends its value along w/ the method request above 
            },

          success:                                      //Executes if action is carried out correctly
          function (result)                             //Function executes upon return of the 'GetResponseBasedOnZIPCode' method
            {                                            
                alert(result);                          //Result - string data returned from server
            }
    });
}

$(document).ready(function ()
{
    $(".button1").click(Home.Button1Click);
    $(".button2").click(Home.Button2Click);



    //get method: targets controller url --> contacts given method --> when the method returns, invokes function (callback function)
      //ajax method: does all of the above & provides more detail w/ 'data'
        //data: parameterizes the get request; JSON contained w/in the data is called the 'payload' 
});