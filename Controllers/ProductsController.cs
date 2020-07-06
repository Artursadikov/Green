
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Green.Context;
using Green.Models;
using Green.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Green.Controllers
{

    // [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {


        private readonly IProduct productService;

        public ProductsController(IProduct productService)
        {
            this.productService = productService;


        }


        [AllowAnonymous]
        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await productService.GetAllProducts());
        }


        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> AddNewProduct(Product newProduct)
        {
            return Ok(await productService.AddNewProduct(newProduct));
        }

        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(Product UpdateProduct, int id)
        {

            SResponse<Product> serviceResponse = await productService.UpdateProduct(UpdateProduct, id);

            if (serviceResponse.Data == null)
            {
                return NotFound(serviceResponse);
            }

            return Ok(serviceResponse);

        }


        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            SResponse<List<Product>> serviceResponse = await productService.DeleteProduct(id);

            if (serviceResponse.Data == null)
            {
                return NotFound(serviceResponse);
            }

            return Ok(serviceResponse);
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            return Ok(await productService.GetProductById(id));
        }

    }
}