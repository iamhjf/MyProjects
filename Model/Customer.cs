using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Customer
    {
        public string   UserID { get; set; }
        public string  LoginName { get; set; }
        public string  PassWord { get; set; }
        public string CustomerName { get; set; }
        public int    State { get; set; }
        public string Email { get; set; }
        public string  Question{ get; set; }
        public string Answer { get; set; }
        public DateTime LoginTime { get; set; }
         public string   Phone { get; set; }
        public string QQMSN { get; set; }
        public  string  Gender { get; set; }
        public string Adderss { get; set; }
        public string Remark { get; set; }
        public string LoginInfo { get; set; }
        public  Customer()
        {

        }
        public Customer  (string  userid,string  loginname,string  password ,string   custoomername,int state,string Email,string   question,string  answer,DateTime  logintime,string phone,string qqmsn,string   gender,string  address,string remark,string  loginInfo)
        {
            this.UserID = userid;
            this.LoginName = loginname;
            this.PassWord = password;
            this.CustomerName = custoomername;
            this.State = state;
            this.Email = Email;
            this.Question = question;
            this.Answer = answer;
            this.LoginTime = logintime;
            this.Phone = phone;
            this.QQMSN = qqmsn;
            this.Gender = gender;
            this.Adderss = address;
            this.Remark = Remark;
            this.LoginInfo = loginInfo;
        }
    }
}
