import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
       res.status(401).json({ message: 'Invalid token' });
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
