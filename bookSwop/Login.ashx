<%@ WebHandler Language="C#" Class="Login" %>
using System.Web.SessionState;
using System;
using System.Web;
using System.Collections.Generic;


public class Login : IHttpHandler ,IRequiresSessionState{

    public void ProcessRequest (HttpContext context) {
        // context.Response.ContentType = "text/plain";


        string UserName = context.Request["UserNames"];
        string Pwd = context.Request["Pwds"];
        Model.Customer cu = new BLL.CustomerBLL().Login(UserName, Pwd);
        if (string.IsNullOrEmpty(cu.LoginInfo))
        {
            context.Response.Write("登录成功!");
            cu.PassWord = null;
            //保存用户登录状态
            context.Session["Customer"]=cu;
            //创建购物车
            context.Session["ShopCar"] = new List<Model.ShopCar>();

        }
        else
        {
            context.Response.Write(cu.LoginInfo);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}