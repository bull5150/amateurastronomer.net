using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace RestAPICore.Models
{
    public class BlogModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string createDate { get; set; }
        public string imageURL { get; set; }
        public string blogTitle { get; set; }
        public string blogDescription { get; set; }
        public string blogEntry { get; set; }
    }
    public class BlogSubscriptionListModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? f_name { get; set; }
        public string? l_name { get; set; }
        public string email { get; set; }
        public int? age { get; set; }
        public string? phone { get; set; }
        public string? city { get; set; }
        public string? state { get; set; }
        public string? country { get; set; }
    }
}
