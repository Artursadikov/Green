using System.Collections.Generic;
using System.Threading.Tasks;
using Green.Models;

namespace Green.Services
{
    public interface IProduct
    {
        Task<SResponse<List<Product>>> GetAllProducts();
        Task<SResponse<Product>> GetProductById(int id);
        Task<SResponse<List<Product>>> AddNewProduct(Product newProduct);
        Task<SResponse<Product>> UpdateProduct(Product UpdateProduct, int id);
        Task<SResponse<List<Product>>> DeleteProduct(int id);
         Task<SResponse<List<Product>>> GetProductByCategory(string category);

    }
}