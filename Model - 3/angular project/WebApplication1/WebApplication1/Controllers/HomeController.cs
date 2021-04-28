using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult callModel(string sendbrandname)
        {  
            var modelList = new List<dynamic>();
           
            try
            {
                using (System.Net.WebClient webClient = new System.Net.WebClient())
                {
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                    var json = webClient.DownloadString("https://www.huk24.de/pkw24/api/5/comfortsearch/models?manufacturer=" + sendbrandname + "&begin=2021-04-23");
                    object yourOjbect = new JavaScriptSerializer().DeserializeObject(json);
                    IList objList = (IList)yourOjbect;
                    IEnumerable<dynamic> listt = objList.Cast<dynamic>();
                    modelList = listt.ToList();
                }

                return Json(new { success = true, modelList }, JsonRequestBehavior.AllowGet);
            }
            catch(Exception e)
            {
                return Json(new { success = false, modelList }, JsonRequestBehavior.AllowGet);
            }
           
        }

        [HttpGet]
        public JsonResult callbrand()
        {
            var listofdata = new List<dynamic>();
           
            try
            {
                using (System.Net.WebClient webClient = new System.Net.WebClient())
                {
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                    var json = webClient.DownloadString("https://www.huk24.de/pkw24/api/5/comfortsearch/manufacturers");
                    object yourOjbect = new JavaScriptSerializer().DeserializeObject(json);
                    IList objList = (IList)yourOjbect;
                    IEnumerable<dynamic> listt = objList.Cast<dynamic>();
                    listofdata = listt.ToList();

                }

                return Json(new { success = true, listofdata }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, listofdata }, JsonRequestBehavior.AllowGet);
            }

        }


    }
}