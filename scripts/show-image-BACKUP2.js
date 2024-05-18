jQuery(function() {
  function random(n) {
      return Math.floor(Math.random() * n);
  }

  var transition_time = 1000;
  var waiting_time = 20;
  var images = $('div#block img');
  var n = images.length;

  images.hide();
  images.eq(random(n)).show();

  //get the size of the container
  var boxHeight = document.getElementById('block').offsetHeight;
  var boxWidth = document.getElementById('block').offsetWidth;

  //range of possible image scales
  var objectMaxHeight = 450;
  var objectMinHeight = 350;

  setInterval(function() {
      var current = random(n);

      //gets reference to selected image
      var $domImage = images.eq(current);

      //generates random heights and widths for the image to be shown in
      var generatedHeight = 
          Math.floor(
              Math.random() * (objectMaxHeight - objectMinHeight)
          ) + objectMinHeight;

      // assigns values to the image
      $domImage.css('height', generatedHeight); 
      $domImage.css('width', "auto"); 

      var imageAutoWidth = $domImage.width();

      var generatedYLocation = Math.floor(
          Math.random() * (boxHeight - generatedHeight + 1)
      ) + 0;

      var generatedXLocation = Math.floor(
          Math.random() * (boxWidth - imageAutoWidth)
      ) + 0;

      $domImage.css({
          'top': generatedYLocation,
          'left': generatedXLocation,
          'position': 'absolute'
      });

      // Show the image
      $domImage.fadeIn(transition_time);
  }, 2 * transition_time + waiting_time);
});
