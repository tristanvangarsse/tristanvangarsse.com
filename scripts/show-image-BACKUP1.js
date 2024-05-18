jQuery(function(){
  function random(n) {
      return Math.floor(Math.random() * n);
  }
  var transition_time = 500;
  var waiting_time = 200;
  var images = $('div#block img');
  var n = images.length;
  var current = random(n);
  images.hide();
  images.eq(current).show();
  
  //get the size of the container
  var boxHeight = document.getElementById('block').offsetHeight;
  var boxWidth = document.getElementById('block').offsetWidth;
  
  //range of possible image scales
  var objectMaxHeight = 300;
  var objectMinHeight = 300;
  
  var interval_id = setInterval(function () {
      images.eq(current).fadeOut(transition_time, function () {
          current = random(n);
          
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
          
          $domImage.css('top', generatedYLocation);
          $domImage.css('left', generatedXLocation);
          $domImage.fadeIn(transition_time);
      });
  }, 2 * transition_time + waiting_time);
})