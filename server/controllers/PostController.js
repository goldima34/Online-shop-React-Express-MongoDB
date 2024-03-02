import PostServise from "../Servises/PostServise.js"

class PostController {
    async create(req, res) {
        try {
            const post = await PostServise.create(req.body, req.files.picture)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostServise.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostServise.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostServise.update(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostServise.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController()