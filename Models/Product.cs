using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Green.Models
{
    public class Product
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        public string productName { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        public string description { get; set; }

        [Required(ErrorMessage = "Price is required.")]
        public float price { get; set; }

        [Required(ErrorMessage = "Image Path is required.")]
        public string imagePthUrl { get; set; }
        
        [Required(ErrorMessage = "Category is required.")]
        public string category { get; set; }
        


    }
}