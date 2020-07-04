using System.Collections.Generic;

namespace Green.Models
{
    public class Category
    {
        public int id { get; set; }
        public string fruit { get; set; }
        public string vegetables { get; set; }
        public string bread { get; set; }
        public string meat { get; set; }
        public string fish { get; set; }
        public List<Product> products { get; set; }
    }
}