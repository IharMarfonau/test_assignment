require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected successfully to db'))
  .catch(err => console.error(err));

app.use('/api', require('./src/routes/routes'));

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
