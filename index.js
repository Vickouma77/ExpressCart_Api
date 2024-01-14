const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;



/*connect to MongoDB */
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  /*Middleware */
app.use(express.json());

/* Route Middleware */
app.use('/api/auth', authRoute);


/* Listen to the server */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
