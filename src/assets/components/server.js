// server.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Define the API proxy
const apiProxy = createProxyMiddleware('/images', {
  target: 'http://images.asos-media.com',
  changeOrigin: true,
});

// Use the API proxy for requests matching /images
app.use('/images', apiProxy);

// Serve your React app (assuming your build is in the 'build' folder)
app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
