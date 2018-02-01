using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
  public   class CustomerBLL
    {
        public   int  InsertCustomer(Model.Customer  cus)
        {
            if (!new Rule.CustomerRule().TestInsert(cus.LoginName))
            {
                return -3;
            }

            cus.PassWord = Encryption(cus.PassWord);
            return new DAL.CustomerDAL().InsertCustomer(cus);
        }
        public Model.Customer Login(string uid, string pwd)
        {
            pwd = Encryption(pwd);
            Model.Customer customer = new Model.Customer();
            Model.Customer cu = new DAL.CustomerDAL().GetCustomer(" where LoginName='" + uid + "'");

            if (String.IsNullOrEmpty(cu.LoginName))
            {
                customer.LoginInfo = "用户名不存在";
                return customer;
            }
            if (cu.PassWord != pwd)
            {
                customer.LoginInfo = "密码错误";
                return customer;
            }
            return cu;
        }

        /// <summary>
        /// 方法:对密码进行MD5加密
        /// </summary>
        /// <param name="pwd">原始密码</param>
        /// <returns>加密后的密码</returns>
        private   string   Encryption(string pwd)
        {
            System.Security.Cryptography.MD5CryptoServiceProvider md5 = new System.Security.Cryptography.MD5CryptoServiceProvider();
            byte[] bytes = System.Text.Encoding.UTF8.GetBytes(pwd);
            bytes = md5.ComputeHash(bytes);
            return BitConverter.ToString(bytes);
        }
    }
}
