const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = __dirname + '../client/public';

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log('listening to port ' + 8080);
});