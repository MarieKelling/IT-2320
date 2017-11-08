using System.Collections.Generic;
namespace IntroductionToAJAX.Mocks
{
    public static class MockResponse                //Object graph created on server side
    {
        public static object NameDataResponse       //List of 2 people
        {
            get
            {
                var people = new List<Person>();
                people.Add(new Person { Name = "Donnie", Age = 36 });
                people.Add(new Person { Name = "Michael", Age = 28 });

                return new
                {
                    Data = people                   //Returns object containing the list of 2 people 
                };
            }
        }

        public static object ZipCodeFormatGoodResponse
        {
            get
            {
                return new
                {
                    Message = "OK!"
                };
            }
        }

        public static object ZipCodeFormatErrorResponse
        {
            get
            {
                return new
                {
                    Error = "Your ZIP Code was not formatted properly."
                };
            }
        }
    }
}