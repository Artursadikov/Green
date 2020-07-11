using System;
using System.Collections.Generic;

namespace Green.Models
{
    public class Product
    {
        public int id { get; set; }
        public string productName { get; set; }
        public string description { get; set; }
        public float price { get; set; }
        public string imagePthUrl { get; set; }
        public string category { get; set; }

        public static implicit operator Product(List<Product> v)
        {
            throw new NotImplementedException();
        }
    }
}