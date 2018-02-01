<%@ WebHandler Language="C#" Class="ShopCarList" %>
using System.Collections.Generic;
using System;
using System.Web;
using System.Web.SessionState;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;

public class ShopCarList : IHttpHandler ,IReadOnlySessionState{

    public void ProcessRequest (HttpContext context) {
        // context.Response.ContentType = "text/plain";
        //获取图书信息
        List<Model.ShopCar> ShopCar = (List<Model.ShopCar>)context.Session["ShopCar"];

        //创建json数据进行[序列化操作/反序列化操作]操作的对象
        DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(List<Model.ShopCar>));
        //把数据传给客户端
        serializer.WriteObject(context.Response.OutputStream, ShopCar);

    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}