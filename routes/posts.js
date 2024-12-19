import Post from '../models/post.js'; // Use relative path to import the model

const express = await import('express'); // Dynamically import express in ES Module

const router = express.Router();

// View all posts
router.get('/', (req, res) => {
    const posts = Post.getAll();
    res.render('index', { posts });
});

// Create a new post
router.get('/new', (req, res) => {
    res.render('create');
});

router.post('/', (req, res) => {
    const { title, content } = req.body;
    Post.create(title, content);
    res.redirect('/posts');
});

// Edit a post
router.get('/:id/edit', (req, res) => {
    const post = Post.getById(req.params.id);
    res.render('edit', { post });
});

router.put('/:id', (req, res) => {
    const { title, content } = req.body;
    Post.update(req.params.id, title, content);
    res.redirect('/posts');
});

// Delete a post
router.delete('/:id', (req, res) => {
    Post.delete(req.params.id);
    res.redirect('/posts');
});

export default router; // Export the router for use in app.js
