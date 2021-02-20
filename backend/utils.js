//defines some utility functions like generate token
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',//key to encrypt the data and generated token
    {
      expiresIn: '30d',
    }
  );
};