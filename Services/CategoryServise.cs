using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Green.Context;
using Green.Models;
using Microsoft.EntityFrameworkCore;

namespace Green.Services
{
    public class CategoryServise : ICategory
    {
        private readonly Greencontext _greencontext;

        public CategoryServise(Greencontext greencontext)
        {
            _greencontext = greencontext;

        }


        public async Task<SResponse<List<Category>>> AddNewCategory(Category newCategory)
        {
            SResponse<List<Category>> serviceResponse = new SResponse<List<Category>>();

            List<Category> dbCategory = await _greencontext.Categories.ToListAsync();


            //  newProduct.User = await_greencontext.Products.FindAsync(newProduct.User.Id);

            await _greencontext.Categories.AddAsync(newCategory);
            await _greencontext.SaveChangesAsync();
            serviceResponse.Data = dbCategory;
            return serviceResponse;
        }

        public async Task<SResponse<List<Category>>> DeleteCategory(int id)
        {
            SResponse<List<Category>> serviceResponse = new SResponse<List<Category>>();
            try
            {
                // Product product = await _greencontext.Products.Include(c => c.comments).FirstOrDefaultAsync(c => c.Id == id);
                Category category = await _greencontext.Categories.FirstOrDefaultAsync(c => c.id == id);

                if (category != null)
                {
                    _greencontext.Categories.Remove(category);
                    await _greencontext.SaveChangesAsync();

                    List<Category> dbCategory = await _greencontext.Categories.ToListAsync();
                    serviceResponse.Data = dbCategory;
                }
                else
                {
                    serviceResponse.Sucsses = false;
                    serviceResponse.Message = "Category not found!";
                }
            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }

        public async Task<SResponse<List<Category>>> GetAllCategories()
        {
            SResponse<List<Category>> serviceResponse = new SResponse<List<Category>>();
            List<Category> dbCategory = await _greencontext.Categories.ToListAsync();

            serviceResponse.Data = dbCategory;
            return serviceResponse;
        }

        public async Task<SResponse<Category>> GetCategoryById(int id)
        {
            SResponse<Category> serviceResponse = new SResponse<Category>();
            Category dbCategory = await _greencontext.Categories.FirstOrDefaultAsync(c => c.id == id);
            serviceResponse.Data = dbCategory;
            return serviceResponse;
        }

        public async Task<SResponse<Category>> UpdateCategory(Category UpdateCategory, int id)
        {
            SResponse<Category> serviceResponse = new SResponse<Category>();
            try
            {
                Category category = await _greencontext.Categories.FirstOrDefaultAsync(c => c.id == UpdateCategory.id);

               category.bread = UpdateCategory.bread;
               category.fish = UpdateCategory.fish;
               category.fruit = UpdateCategory.fruit;
               category.meat = UpdateCategory.meat;
               category.vegetables = UpdateCategory.vegetables;


                _greencontext.Categories.Update(category);
                await _greencontext.SaveChangesAsync();

                serviceResponse.Data = category;


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