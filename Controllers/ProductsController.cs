
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
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await productService.GetAllProducts());
        }



    }
}