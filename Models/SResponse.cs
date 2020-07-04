namespace Green.Models
{
    public class SResponse<T>
    {
        public T Data { get; set; }

        public bool Sucsses { get; set; } = true;

        public string Message { get; set; } = null;
    }


}