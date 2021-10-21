using RestAPICore.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace RestAPICore.Services
{
    public class BlogSubscriptionService
    {
        private readonly IMongoCollection<BlogSubscriptionListModel> _blogs;

        public BlogSubscriptionService(IBlogSubscribeListModel settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _blogs = database.GetCollection<BlogSubscriptionListModel>(settings.BlogSubscribeListCollectionName);
        }

        public List<BlogSubscriptionListModel> Get() =>
            _blogs.Find(blog => true).ToList();

        public BlogSubscriptionListModel Get(string id) =>
            _blogs.Find<BlogSubscriptionListModel>(blog => blog.Id == id).FirstOrDefault();

        public BlogSubscriptionListModel Create(BlogSubscriptionListModel blog)
        {
            _blogs.InsertOne(blog);
            return blog;
        }

        public void Update(string id, BlogSubscriptionListModel blogIn) =>
            _blogs.ReplaceOne(blog => blog.Id == id, blogIn);

        public void Remove(BlogSubscriptionListModel blogIn) =>
            _blogs.DeleteOne(blog => blog.Id == blogIn.Id);

        public void Remove(string id) =>
            _blogs.DeleteOne(blog => blog.Id == id);
    }
}
