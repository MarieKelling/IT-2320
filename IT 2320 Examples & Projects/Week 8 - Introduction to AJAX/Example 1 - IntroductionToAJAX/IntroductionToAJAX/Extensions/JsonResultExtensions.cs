using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace IntroductionToAJAX.Extensions
{
    public static class JsonResultExtensions
    {
        public static JsonResult SerializeObject(this JsonResult result, object rawObject)      //Extension method
        {
            result.Data = new JavaScriptSerializer().Serialize(rawObject);          //Create JS serializer & pass it the object to be serialized
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;          //Configures result to allow get requests from client
            return result;
        }
    }
}