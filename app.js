import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import postRoutes from './routes/posts.js'; // Use relative paths for ES Modules

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files like CSS
app.use(express.static(path.join(process.cwd(), 'public')));  // Use process.cwd() for correct path resolution

// Routes
app.use('/posts', postRoutes);

// Home Route
app.get('/', (req, res) => {
    res.redirect('/posts');
});

// Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
