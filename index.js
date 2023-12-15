const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


/* Connect to MongoDB */
try {
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Successfully connected to MongoDB.");
  });
} catch (error) {
  console.log("Error connecting to MongoDB.");
}



/* Listen to the server */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
