require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const supabase = require('./services/supabase');

const app = express();
const port = 3001;

async function checkIfEmailExists(email) {
  const { data, error } = await supabase.auth.getUserByEmail(email);

  if (error) {
    throw new Error('Error checking email existence');
  }

  return data !== null;
}

app.use(bodyParser.json());
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Backend API is working!' });
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      if (error.code === 429) {
        return res.status(429).json({ message: 'Too many requests' });
      } else {
        console.log(error)
        return res.status(400).json({ message: 'Error registering user' });
      }
    } else {
      return res.status(200).json({ message: 'User registered successfully', user });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return res.status(400).json({ message: 'Error logging in', error });
    }

    console.log(user, session)
    return res.status(200).json({ message: 'User logged in successfully', user, session });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});