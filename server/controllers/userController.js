const bcrypt = require('bcrypt');
const client = require('../db'); // mongodb client
const jwt = require('jsonwebtoken');
const generateId = require('../utils/generateId');

function generateJwt(id, email, role) {
  const jwtToken = jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
  );
  return jwtToken;
}

class UserController {
  async signup(req, res, next) {
    if (req.method !== 'POST') {
      return next(new Error(`Error: ${req.method} request is not supported`));
    }

    // POST request handler
    // default role for new signup
    const ROLE = 'user';

    // get required signup info from request
    const { email, password } = req.body;

    // check if form fields are filled
    if (!email || !password) {
      return next(new Error('No email or password specified'));
    }

    try {
      // check if specified email already exists (must be unique)
      const collection = client.db('idol').collection('users');
      const query = { email: email };
      const checkEmail = await collection.findOne(query);
      if (checkEmail) {
        throw new Error('User with specified email already exists');
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 5);

      // insert new user into database
      const id = await generateId();
      const user = {
        _id: id,
        email: email,
        password: hashedPassword,
        role: ROLE
      };
      const insertUser = await collection.insertOne(user);

      res.json({ message: `Successful sign up: ${email}` });
    } catch(err) {
      next(err);
    } finally {
      return;
    }
  }

  async login(req, res, next) {
    if (req.method !== 'POST') {
      return next(new Error(`Error: ${req.method} request is not supported`));
    }

    // POST request handler
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new Error('No email or password specified'));
    }

    try {
      // get user from database
      const collection = client.db('idol').collection('users');
      const query = { email: email };
      const user = await collection.findOne(query);
      if (!user) {
        throw new Error('No user found with specified email');
      }

      // check if passwords match
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        throw new Error('Wrong password');
      }

      // generate token with info about user
      const token = generateJwt(user._id, user.email, user.role);

      res.json({ token });
    } catch(err) {
      next(err);
    } finally {
      return;
    }
  }
}

module.exports = new UserController();
