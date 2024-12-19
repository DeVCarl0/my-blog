let posts = [];

export const Post = {
    getAll: () => posts,
    create: (title, content) => {
        const post = { id: posts.length + 1, title, content };
        posts.push(post);
        return post;
    },
    getById: (id) => posts.find(post => post.id === parseInt(id)),
    update: (id, title, content) => {
        const post = Post.getById(id);
        if (post) {
            post.title = title;
            post.content = content;
        }
        return post;
    },
    delete: (id) => {
        posts = posts.filter(post => post.id !== parseInt(id));
    }
};

export default Post;
