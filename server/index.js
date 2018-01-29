const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = __dirname + '../client/public';
const { waterWalls, findMaxHeight, calculateWater } = require('../client/js/waterWallLogic.js');

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/towerHeights', (req, res) => {
  // console.log('hello there');
  console.log('req.body', req.body);
  // req.body format: { tower_heights: '1,2,3' }
  // let numbers = req.body.tower_heights.split(',');
  // numbers = numbers.map((num)=> {
  //   return parseInt(num)
  // });
  // console.log(numbers,'numbers');

  // const waterW = waterWalls(numbers);
  // console.log(waterW, 'waterW');

  // res.send({numbers: numbers, waterW: waterW});

  res.send({data: req.body});
})

app.listen(8080, () => {
  console.log('listening to port ' + 8080);
});