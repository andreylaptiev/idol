const bcrypt = require('bcrypt');
const client = require('../db'); // mongodb client
const jwt = require('jsonwebtoken');

function generateJwt(email, role) {
  const jwtToken = jwt.sign(
    { email, role },
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
  );
  return jwtToken;
}

class UserController {
  async signup(req, res, next) {
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
      const user = { email: email, password: hashedPassword, role: ROLE };
      const insertUser = await collection.insertOne(user);

      // generate users token
      const token = generateJwt(user.email, user.role);

      res.json({ token });
    } catch(err) {
      next(err);
    } finally {
      return;
    }
  }

  async login(req, res, next) {
    // GET request handler
    if (req.method === 'GET') {
      res.send('login page');
      return;
    }

    // POST request handler
    if (req.method === 'POST') {
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

        // generate users token
        const token = generateJwt(user.email, user.role);

        res.send({ token });
      } catch(err) {
        next(err);
      } finally {
        return;
      }
    }
  }

  async checkAuth() {}
}

module.exports = new UserController();
