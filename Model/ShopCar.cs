using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
   public class ShopCar
    {
       public ShopCar() { }
        public ShopCar(string  bybookid,string   title ,string author,string  byswopperson,string  myboookid,string  mytitle)
        {
            this.ByBookID = bybookid;
            //this.Cover = cover;
            this.Title = title;
            this.Author = author;
            this.BySwopPerson = byswopperson;
            this.MyBookID = myboookid;
            this.MyBookID = myboookid;
        }
        /// <summary>
        /// 属性：被交换的图书
        /// </summary>
        public string ByBookID { get; set; }

        ///// <summary>
        ///// 属性：图书封面
        ///// </summary>
        //  public string Cover { get; set; }
        
        /// <summary>
        /// 属性：书名
        /// </summary>
        public  string Title { get; set; }
        /// <summary>
        /// 作者
        /// </summary>
        public string Author { get; set; }
      
        /// <summary>
        /// 属性:被交换的图书的主人
        /// </summary>
        /// 
        public string BySwopPerson { get; set; }
        /// <summary>
        /// 交换的图书
        /// </summary>
        public string MyBookID { get; set; }
        /// <summary>
        /// 属性:
        /// </summary>
        public string MyTitle { get; set; }
    }
}
