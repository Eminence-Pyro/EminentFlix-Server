const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1]; // Expecting: "Bearer <token>"

  if (!token) return res.status(401).json({ message: 'Access denied. No token.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save the payload to req.user
    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = verifyToken;
