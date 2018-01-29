$( document ).ready(function() {
    $("button").click(function(e) {
      console.log('request about to send');
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/towerHeights",
      data: {
        tower_heights: $("#tower_columns").val()
      },
      contentType: "text",
      success: function (data) {
        console.log('data received :' + data);
      },
      error: function(xhr, textStatus, error) {
      console.log(xhr.statusText);
      console.log(textStatus);
      console.log(error);
      }
    })
    })
  })
