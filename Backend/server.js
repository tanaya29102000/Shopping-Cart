

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Contact = require('./Contact');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
// Connect to MongoDB
mongoose.connect('mongodb+srv://tanaya:tanaya29@tanaya.0ez5r.mongodb.net/?retryWrites=true&w=majority&appName=tanaya', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create the User model
const User = mongoose.model('User', userSchema);


app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation: Ensure all fields are filled
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: 'Please fill in all fields' });
  }

  try {
    // Create a new Contact instance and save it to the database
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(200).json({ msg: 'Message sent and saved successfully!' });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});



// Register Route
app.post('/api/auth/register', async (req, res) => {
  const { email, username, password } = req.body;

  // Hash the password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({ email, username, password: hashedPassword });
    await user.save();
    res.status(200).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ msg: 'Error registering user', error: err.message });
  }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    // Return success without JWT (just a message for simplicity)
    res.status(200).json({ 
      user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
     msg: 'Login successful' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));