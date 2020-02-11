const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Movie = require('./backend/models/movie');
var cors = require('cors');

// ************************ DB Connection ************************

var dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auto_reconnect: true
};
mongoose.connect("mongodb+srv://bz:bz@cluster0-li9qp.mongodb.net/sample_mflix?retryWrites=true&w=majority", dbOptions);
mongoose.connection.on('connected', function () {
  console.log("Connected to DB");
})
mongoose.connection.on('error', function (err) {
  console.log("Error while connecting to DB: " + err);
})
// ************************ DB Connection ************************



const app = express()
app.use(cors());






// ****** Body Parser *******
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
// ****** Body Parser ********





// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/api/movies', (req, res) => {
  Movie.find({}, null, {
    limit: 30
  }, (err, movies) => {
    if (err) {
      console.log('Error while finding movies:' + err);
      res.json({
        err: err
      });
    } else {
      res.json(movies);
    }
  })
});













// *********************** Backend Routes **********************









// ******************** Express Server *************************

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
