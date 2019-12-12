const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const auth = require('./middlewares/auth');

const User = require('./models/User');

const app = express();
// const expressServer = app.listen(process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
require('dotenv').config({ path: path.resolve(__dirname + '/.env') });

app.post('/login', async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (!user) {
      return res.json({ err: 'User not found' });
    } else {
      const passwordsMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordsMatch) {
        const token = jwt.sign(
          {
            tokenUser: {
              userId: user._id
            }
          },
          process.env.SECRET,
          { expiresIn: '100hr' }
        );
        res.json({
          status: 'success',
          message: 'login sucessful',
          data: {
            token: token,
            email: user.email,
            username: user.username,
            userId: user._id,
            flashcards: user.flashcards
          }
        });
      } else if (!passwordsMatch) {
        return res.json({ err: 'Incorrect password' });
      }
    }
  });
});

app.post('/register', async (req, res) => {
  //   console.log('slash register', req.body);
  if (req.body.username.length < 4 || req.body.username.length > 12) {
    return res.json({ err: 'Username must be between 4 and 12 characters' });
  }
  if (req.body.password.length < 6) {
    return res.json({ err: 'Password must be at least 6 characters' });
  }
  if (req.body.password !== req.body.confirmPassword) {
    return res.json({ err: 'Passwords do not match' });
  }

  if (!req.body.email.includes('@') || !req.body.email.includes('.')) {
    return res.json({ err: 'Email input invalid' });
  }
  const hashedPW = await bcrypt.hash(req.body.password, 12);
  const alreadyExistingEmailUser = await User.findOne({
    email: req.body.email
  });
  console.log('alreadyExistingEmailUser', alreadyExistingEmailUser);
  if (alreadyExistingEmailUser) {
    return res.json({ err: 'User with this email already exists' });
  }
  const alreadyExistingUsernameUser = await User.findOne({
    username: req.body.username
  });
  if (alreadyExistingUsernameUser) {
    return res.json({ err: 'User with this username already exists' });
  }

  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: hashedPW,
    flashcards: req.body.cards
  });
  console.log('new user ', newUser);
  newUser.save().then(result => {
    res.send(result);
  });
});

app.post('/auth', async (req, res) => {
  if (req.tokenUser.userId === req.body.userId) {
    const foundUser = await User.findOne({ _id: req.tokenUser.userId });
    res.send(foundUser);
  } else {
    res.status(401).json({ err: 'Not authenticated' });
  }
});

app.post('/savecards', auth, async (req, res) => {
  //   console.log('req body: ', req.body);
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.tokenUser.userId },
    { $set: { flashcards: req.body } },
    { new: true, useFindAndModify: false }
  );
  return res.send({ updatedUser });
});

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));
//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join((__dirname = 'client/build/index.html')));
  });
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    app.listen(process.env.PORT || 8000);
  });
