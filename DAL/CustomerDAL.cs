using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace DAL
{
    public class CustomerDAL
    {
        /// <summary>
        /// 添加用户的方法
        /// </summary>
        /// <param name="cus"></param>
        /// <returns></returns>
        public  int  InsertCustomer(Model.Customer cus)
        {
            return SQLHelp.ExecQuery("Insert into [Customer]([UserID],[LoginName],[PassWord]) values('" + cus.UserID + "','" + cus.LoginName + "','" + cus.PassWord + "')");
        }
        /// <summary>
        /// 方法: 登录
        /// </summary>
        /// <param name="whereStr"></param>
        /// <returns></returns>
        public Model.Customer  GetCustomer(string  whereStr)
        {
          
            Model.Customer customer = null ;
            if(SQLHelp.OpenConnection())
            {
                SqlDataReader dr = SQLHelp.ExecReader("select  * from   [Customer]  " + whereStr + "");
                if(dr!=null)
                {
                    while (dr.Read())
                    {
                        //customer.Add(new Model.Customer(dr["UserID"].ToString(), dr["LoginName"].ToString(), dr["[PassWord]"].ToString(), dr["CustomerName"].ToString(), (int)dr["State"], dr["Email"].ToString(), dr["Question"].ToString(), dr["Answer"].ToString(), (DateTime)dr["LoginTime"], dr["Phone"].ToString(), dr["QQMSN"].ToString(), (char)dr["Gender"], dr["Address"].ToString(), dr["Remark"].ToString()));
                        customer = new Model.Customer(dr["UserID"].ToString(), dr["LoginName"].ToString(), dr["PassWord"].ToString(), dr["CustomerName"].ToString(), (int)dr["State"], dr["Email"].ToString(), dr["Question"].ToString(), dr["Answer"].ToString(), (DateTime)dr["LoginTime"], dr["Phone"].ToString(), dr["QQMSN"].ToString(), dr["Gender"].ToString(), dr["Address"].ToString(), dr["Remark"].ToString(), dr["LoginInfo"].ToString());
                     
                    }
                }
                SQLHelp.CloseConnection();

            }
            return customer;
        }
    }
}
