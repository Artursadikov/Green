using System.Collections.Generic;
using System.Threading.Tasks;
using Green.Models;

namespace Green.Services
{
    public interface ICategory
    {
        Task<SResponse<List<Category>>> GetAllCategories();
        Task<SResponse<Category>> GetCategoryById(int id);
        Task<SResponse<List<Category>>> AddNewCategory(Category newCategory);
        Task<SResponse<Category>> UpdateCategory(Category UpdateCategory, int id);
        Task<SResponse<List<Category>>> DeleteCategory(int id);
    }
}