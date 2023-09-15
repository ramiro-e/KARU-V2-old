import jwt from 'jsonwebtoken';

export default function authMiddleware(handler) {
  return async (req, res) => {
    try {
      // Check if the authorization header is present in the request
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized.' });
      }

      // Extract the token from the authorization header
      const token = authHeader.split(' ')[1];

      // Get the secret key from the environment variable
      const secretKey = process.env.JWT_SECRET_KEY;

      // Verify the token using the secret key
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Invalid token.' });
        }

        // Attach the decoded token payload to the request object for later use
        req.user = decoded;

        // Check if the user has the isAdmin property set to true
        if (!decoded.isAdmin) {
          return res.status(403).json({ error: 'Forbidden. Only admins are allowed.' });
        }

        return handler(req, res);
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Server error.' });
    }
  };
}