using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
   public  class Book
    {
        public string  BookID { get; set; }
        public string PutawayPerson { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int  PublisherID { get; set; }
        public int  CategoryID { get; set; }
        public DateTime PublishDate { get; set; }
        public string  ISBN { get; set; }
        public string   WordsCount { get; set; }
        public string  Price { get; set; }
        public string   ContentDesc { get; set; }
        public string  AuthorDesc { get; set; }
        public int    Clicks { get; set; }
        public int    State{ get; set; }
    }
}
