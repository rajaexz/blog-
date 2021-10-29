
  
const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body:String,
    created_at: { type: Date, required: true, default: new Date() }
},

);



const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;
