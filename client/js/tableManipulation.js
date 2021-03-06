const axios = require('axios');
const mockData = [ [5, 3, 7, 2, 6, 4, 5, 9, 1, 2] , [3, 8, 11] ];

$( document ).ready(function() {
  $('#send').click(function(e) {
    // console.log('request about to send');
    // console.log($(".tower_columns").html());
    // console.log('e', $(".tower_columns").val());
    e.preventDefault();
    axios.post('/towerHeights', {
      tower_heights: $(this).val();
    }).then(function (res) {
      tableGenerator(mockData[0], mockData[1]);
    })
    .catch(function (err) {
      console.log(err);
    })
  })
})

function tableGenerator(heights, waterW) {
  const maxHeight = Math.max.apply(null, heights) + 1;
  const tableWidth = heights.length;

  for (let y = 0; y < maxHeight; y++) {
    $('table').append('<tr></tr>')
    for (let x = 0; x < tableWidth; x++) {
      $('table:last-child').append('<td></td>');
      if ( y <= heights[x]) {
        $('table:last-child').children('td.last').css("color", "gray");
      }
      if (y <= heights[x] && (x+1 === waterW[0] || x+1 === waterW[1]) {
        $('table:last-child').children('td.last').css("color", "black");
      }
      const sandwich = sandwichedOrNot(heights, x);
      if (sandwich && heights[x] <= sandwich) {
        $('table:last-child').children('td.last').css("color", "blue");
      }
    }
  }
}

function sandwichedOrNot(heights, i) {
  const left = [false];
  const right = [false];

  for (let x = 0; x < i+1; x++) {
    if (heights[x] > heights[i]) {
      left[0] = true;
      left.push(heights[x]);
    }
  }

  for (let x2 = i; x2 < heights.length; x2++) {
    if (heights[x2] > heights[i]) {
      right[0] = true;
      right.push(heights[x2]);
    }
  }
  if (left[0] && right[0]) {
    let min = Math.min(right[1], left[1]);
    return min;
  }
  return false;
}