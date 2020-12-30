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

        [HttpGet]
        [Route("hardcoded")]
        public ActionResult<List<AABlogModel>> GetAABlogList()
        {
            List<AABlogModel> blogList = new List<AABlogModel>();
            AABlogModel blog = new AABlogModel();
            blog.Id = new Guid().ToString();
            blog.createDate = "2020-12-29";
            blog.blogTitle = "The Convergence";
            blog.blogEntry = "";
            blog.blogDescription = "Got some decent pics of the Convergence, had some issues with the scope and camera though...";
            blog.imageURL = "https://lh3.googleusercontent.com/tYrnx8ewKty0wdwd0rJU9Sky-P8fm4fJXIIGrvQxWhvXZQh-HYURH5TJYaEp8hxiU6v806jQWT3mvK9K32i6OvqQEj_aNk_x4Bx5CR5uxoiTUPijVCaCo8e33q0d7kqeCZIPHOp49PQ";
            blogList.Add(blog);
            blog = new AABlogModel();
            blog.Id = new Guid().ToString();
            blog.createDate = "2020-12-29";
            blog.blogTitle = "Going after Saturn";
            blog.blogEntry = "";
            blog.blogDescription = "I clearly failed but at least I got some good pics of the moon!  Things to do next time...";
            blog.imageURL = "https://lh3.googleusercontent.com/59lkjKqteKi0ydhF2a2s9nXRxR7hG_cNXymtyHWH2_5miTW3gD1zj3NVZjRAoTOJxGxuUaO7dZ_V0ePNpCerTCOrwhfwE27YAGR5AOnVdxZe8CEhCMj_rDBs-V2Vbsj-wcgPxkasfpU";
            blogList.Add(blog);
            blog = new AABlogModel();
            blog.Id = new Guid().ToString();
            blog.createDate = "2020-12-29";
            blog.blogTitle = "Moon..Again!";
            blog.blogEntry = "";
            blog.blogDescription = "Got some time to take the new scope out and look at the moon...";
            blog.imageURL = "https://lh3.googleusercontent.com/VUAk3iCJMmScD_kpTA4DQvu-yBj6P44ACDDd0fJlBs0oc9g2NgYu9MOJV8RL_ydE0aUagwZukU6OMcIeW1Vcupou0RJCFOcAcoHK7oMcMa2v8AUWD9hlkjr2Q7fILuhA2HrmOky4uGs";
            blogList.Add(blog);
            blog = new AABlogModel();
            blog.Id = new Guid().ToString();
            blog.createDate = "2020-12-29";
            blog.blogTitle = "First Time at the Park";
            blog.blogEntry = "";
            blog.blogDescription = "I wouldnt recommend taking expensive scope to a local park...";
            blog.imageURL = "https://lh3.googleusercontent.com/JVDGex_Tt9NlEzJz6WetHDdCgLF0H88wIO_yULS0lwJY98I8yaFHkMuoQldVRlOtZMYSBugpotOfv6cZ5aqX5hl3HsVJBt4S1JObysEUzV36iuHNAzlPxjPjgWW6r_tyfypy2QoQ-e0";
            blogList.Add(blog);
            blog = new AABlogModel();
            blog.Id = new Guid().ToString();
            blog.createDate = "2020-12-29";
            blog.blogTitle = "Moon!";
            blog.blogEntry = "";
            blog.blogDescription = "Baby's first step.  Bought a travel scope to try out and see if I like doing this...";
            blog.imageURL = "https://lh3.googleusercontent.com/8e8CuOC4X8HTKJhFVEXz9mifzghM0lHM4_MO69xZPWOPOacfG-aU3UuKtvTjYs5vLrkvxBnu3JEKSkt1AvFIgxsbwiAbkGtp3RXALg8X-PEiTkEoYl0IxHks6bkm6Vz6Vs9H-0_6krw";
            blogList.Add(blog);

            return blogList;
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
