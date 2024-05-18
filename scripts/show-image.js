jQuery(function() {
  function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var images = $('div#block img');

  images.each(function(index) {
      var $domImage = $(this).clone();

      // Generate random height for the image between 300 and 450 pixels
      var generatedHeight = random(300, 450);
      var generatedWidth = 'auto'; // Let the width adjust proportionally

      $domImage.css({
          'height': generatedHeight,
          'width': generatedWidth,
          'position': 'absolute'
      });

      // Calculate random position
      var generatedYLocation = random(0, $('#block').height() - generatedHeight);
      var generatedXLocation = random(0, $('#block').width() - $domImage.width());

      $domImage.css({
          'top': generatedYLocation,
          'left': generatedXLocation
      });

      $('#block').append($domImage); // Append the cloned image to the container
  });
});
