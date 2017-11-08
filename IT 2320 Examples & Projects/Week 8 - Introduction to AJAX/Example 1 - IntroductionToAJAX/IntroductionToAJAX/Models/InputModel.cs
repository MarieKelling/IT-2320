namespace IntroductionToAJAX.Models
{
    public class InputModel
    {
        public string ZIPCode { get; set; }
    }
}

//This model mirrors the payload on the server
    //Automatically instantiates the zip code value in the object of type InputModel
        //Passes the JSON object graph w/in data to the object 'model'