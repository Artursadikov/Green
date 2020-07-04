namespace Green.Models
{
    public class Product
    {
        public int id { get; set; }
        public string productName { get; set; }
        public string description { get; set; }
        public int price { get; set; }
        public string imagePthUrl { get; set; }
        public Category category { get; set; }
    }
}