using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestAPICore.Models;
using RestAPICore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly BlogService _blogService;

        public BlogController(BlogService blogService)
        {
            _blogService = blogService;
        }

        /// <summary>
        /// Gets entire list of Blog Entries
        /// </summary>
        /// <remarks>Uses a MongoDB hosted on Azure</remarks>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<List<BlogModel>> Get() =>
            _blogService.Get();

        /// <summary>
        /// Gets a Blog Entry by ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id:length(24)}", Name = "GetBlog")]
        public ActionResult<BlogModel> Get(string id)
        {
            var blog = _blogService.Get(id);

            if (blog == null)
            {
                return NotFound();
            }

            return blog;
        }

        /// <summary>
        /// Add a Blog Entry (set id to null)
        /// </summary>
        /// <remarks>Uses a MongoDB hosted on Azure</remarks>
        /// <param name="blog"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<BlogModel> Create(BlogModel blog)
        {
            _blogService.Create(blog);

            return CreatedAtRoute("GetBlog", new { id = blog.Id.ToString() }, blog);
        }

        /// <summary>
        /// Update Blog Entry by ID
        /// </summary>
        /// <remarks>Uses a MongoDB hosted on Azure</remarks>
        /// <param name="id"></param>
        /// <param name="blogIn"></param>
        /// <returns></returns>
        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, BlogModel blogIn)
        {
            var blog = _blogService.Get(id);

            if (blog == null)
            {
                return NotFound();
            }

            _blogService.Update(id, blogIn);

            return NoContent();
        }

        /// <summary>
        /// Delete a Blog Entry by ID
        /// </summary>
        /// <remarks>Uses a MongoDB hosted on Azure</remarks>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var blog = _blogService.Get(id);

            if (blog == null)
            {
                return NotFound();
            }

            _blogService.Remove(blog.Id);

            return NoContent();
        }
    }
}
