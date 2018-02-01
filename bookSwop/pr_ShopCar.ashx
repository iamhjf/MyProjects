<%@ WebHandler Language="C#" Class="pr_ShopCar" %>
using System.Data.SqlClient;
using System;
using System.Web;
using System.Configuration;
 using System.Collections.Generic;
public class pr_ShopCar : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        //context.Response.ContentType = "text/plain";
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["SQL"].ToString());
        SqlDataAdapter da = new SqlDataAdapter();
        conn.Open();
        da.SelectCommand = new SqlCommand();
        da.SelectCommand.Connection = conn;
        da.SelectCommand.CommandText = " pr_ShopCar";
          
        da.SelectCommand.CommandType = System.Data.CommandType.StoredProcedure;
          da.SelectCommand.ExecuteReader();

        context.Response.Write(da);
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}