<%@ WebHandler Language="C#" Class="Insert" %>

using System;
using System.Web;
using BLL;
public class Insert : IHttpHandler {

    public void ProcessRequest(HttpContext context) {

        string sa = context.Request["userids"];
        string se = context.Request["pwds"];
       
        Model.Customer cust = new Model.Customer();
        cust.UserID = Guid.NewGuid().ToString();
        cust.LoginName = sa;
        cust.PassWord = se;
        CustomerBLL customer = new CustomerBLL();
        int count = customer.InsertCustomer(cust);
        context.Response.Write(count);

     


    }

    public bool IsReusable {
        get {
            return false;
        }
    }


}