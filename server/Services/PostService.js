import Post from "../models/PostModel.js";
import fileServise from "./fileService.js";

class PostServise {
  async create(post, picture) {
    const fileName = fileServise.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("unknown id");
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("unknown id");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("unknown id");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostServise();
