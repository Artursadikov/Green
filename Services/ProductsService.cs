using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Green.Context;
using Green.Models;
using Microsoft.EntityFrameworkCore;

namespace Green.Services
{
    public class ProductsService : IProduct
    {
        private readonly Greencontext _greencontext;

        public ProductsService(Greencontext greencontext)
        {
            _greencontext = greencontext;

        }

        public async Task<SResponse<List<Product>>> AddNewProduct(Product newProduct)
        {
            SResponse<List<Product>> serviceResponse = new SResponse<List<Product>>();

            List<Product> dbProduct = await _greencontext.Products.ToListAsync();


            //  newProduct.User = await_greencontext.Products.FindAsync(newProduct.User.Id);

            await _greencontext.Products.AddAsync(newProduct);
            await _greencontext.SaveChangesAsync();
            serviceResponse.Data = dbProduct;
            return serviceResponse;
        }

        public async Task<SResponse<List<Product>>> DeleteProduct(int id)
        {
            SResponse<List<Product>> serviceResponse = new SResponse<List<Product>>();
            try
            {
                // Product product = await _greencontext.Products.Include(c => c.comments).FirstOrDefaultAsync(c => c.Id == id);
                Product product = await _greencontext.Products.FirstOrDefaultAsync(p => p.id == id);

                if (product != null)
                {
                    _greencontext.Products.Remove(product);
                    await _greencontext.SaveChangesAsync();

                    List<Product> dbProduct = await _greencontext.Products.ToListAsync();
                    serviceResponse.Data = dbProduct;
                }
                else
                {
                    serviceResponse.Sucsses = false;
                    serviceResponse.Message = "Product not found!";
                }
            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }

        public async Task<SResponse<List<Product>>> GetAllProducts()
        {
            SResponse<List<Product>> serviceResponse = new SResponse<List<Product>>();
            List<Product> dbProduct = await _greencontext.Products.ToListAsync();

            serviceResponse.Data = dbProduct;
            return serviceResponse;
        }

        public async Task<SResponse<Product>> GetProductById(int id)
        {
            SResponse<Product> serviceResponse = new SResponse<Product>();
            Product dbProduct = await _greencontext.Products.FirstOrDefaultAsync(c => c.id == id);
            serviceResponse.Data = dbProduct;
            return serviceResponse;
        }

        public async Task<SResponse<List<Product>>> GetProductByCategory(string category)
        {
            SResponse<List<Product>> serviceResponse = new SResponse<List<Product>>();
            List<Product> dbProduct = await _greencontext.Products.Where(c => c.category == category).ToListAsync();
           
            serviceResponse.Data = dbProduct;
           
            return serviceResponse;
        }

        public async Task<SResponse<Product>> UpdateProduct(Product UpdateProduct, int id)
        {
            SResponse<Product> serviceResponse = new SResponse<Product>();
            try
            {
                Product product = await _greencontext.Products.FirstOrDefaultAsync(p => p.id == UpdateProduct.id);

                product.productName = UpdateProduct.productName;
                product.category = UpdateProduct.category;
                product.imagePthUrl = UpdateProduct.imagePthUrl;
                product.description = UpdateProduct.description;
                product.price = UpdateProduct.price;


                _greencontext.Products.Update(product);
                await _greencontext.SaveChangesAsync();

                serviceResponse.Data = product;


            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }


    }
}
