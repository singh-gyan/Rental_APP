require('dotenv').config();
const path = require('path');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
let arr = [];
let refreshTokens = [];

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res, next) => {
  res.json({ message: 'Hoi Finally connected!!' });
});
app.post('/login', async (req, res, next) => {
  if (req.body) {
    const email = req.body.email;
    const user = { user: email };
    const password = req.body.password;
    const auth = arr.find(cred => cred.email === email);
    console.log(auth);
    if (auth) {
      if (await bcrypt.compare(password, auth.password)) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '1d',
        });
        console.log(accessToken);
        // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        // refreshTokens.push(refreshToken);
        res.json({
          accessToken: accessToken,
          //   refreshToken: refreshToken,
          message: 'Looged in looser',
        });
      }
      res.status(202).send();
    } else
      res.json({
        message: 'You are not a valid user. Try signing up!!',
        existingUser: false,
      });
  } else
    res.json({
      message: 'You are not a valid user. Try signing up!!',
      existingUser: false,
    });
});

app.get('/users', authenticateToken, (req, res) => {
  console.log('authenti');
  res.json({ message: 'authenticated' });
});
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post('/signup', async (req, res, next) => {
  if (req.body) {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    const auth = arr.find(
      cred => cred.email === email && cred.password === hashedPassword
    );
    if (auth) {
      res.json({ message: 'The email id already exists' });
      res.status(401).send();
    } else {
      arr = [...arr, { email: email, password: hashedPassword }];
      console.log(arr);
      res.json({ message: 'Welcome new user!!!' });
      // res.json(req.body)
      res.status(201).send();
    }
    res.status(201).send();
  } else res.status(401).send();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(3001, console.log('Listening to port 3001...'));
