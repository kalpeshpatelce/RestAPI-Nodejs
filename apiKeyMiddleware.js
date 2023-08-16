// apiKeyMiddleware.js
const validApiKeys = ['1af8c38c-398a-4244-b281-051bc6d994af', 'bdf63bd7-7eab-4e7b-9c97-e0298c2e5dbc', /* ... */];

function validateApiKey(req, res, next) {
    console.log(req);
  const apiKey = req.headers['x-api-key'];
  console.log(apiKey);

  if (!apiKey || !validApiKeys.includes(apiKey)) {
    return res.status(401).json({ error: 'Invalid API key.' });
  }

  next();
}

module.exports = validateApiKey;
