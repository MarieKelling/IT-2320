using IntroductionToAJAX.Mocks;
using IntroductionToAJAX.Models;
using System.Web.Mvc;
using IntroductionToAJAX.Extensions;

namespace IntroductionToAJAX.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            HomeModel model = new HomeModel();          // Creates new HomeModel
            model.PageTitle = "Intro To AJAX";          // Sets the page title
            return View(model);                         // Sends model to client from server when the view loads
        }

        [HttpGet]
        public JsonResult GetMockResponseNoData()       // Returns raw JSON string
        {
            return new JsonResult().SerializeObject(MockResponse.NameDataResponse);   // Serializes 'NameDataResponse' & returns raw JSON of the 2 people
        }

        [HttpGet]
        public JsonResult GetResponseBasedOnZIPCode(InputModel model)   // Get method w/ info sent along w/ the request to server
        {                                                               // Model contains zip code value
            if (model.ZIPCode != null && model.ZIPCode.Length == 5)
            {
                return new JsonResult().SerializeObject(MockResponse.ZipCodeFormatGoodResponse);
            }

            return new JsonResult().SerializeObject(MockResponse.ZipCodeFormatErrorResponse);
        }
    }
}