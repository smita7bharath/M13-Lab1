// app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// __dirname workaround for ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve everything in /public as static assets
app.use(express.static(path.join(__dirname, 'public')));

// Root route → send back public/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
