const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

// Connect Mongoose to Database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-Network-API-18', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, err => { if (err) throw err;
        console.log('Connected to MongoDB 👌')
}); 

mongoose.set('debug', true); // Enable logging


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`📡 API server running on port ${PORT} 📡`);
    });
  });
  

