amenities = {};
$( document ).ready(function() {
    $('input').change(function() {
        if ($(this).is(':checked')) {
          var amenityId  = $(this).attr('data-id');
          var amenityName = $(this).attr('data-name');
          amenities[amenityName] = amenityId;
          console.log(amenities);
          $('h4#dict').text(amenities);
        } else {
            delete amenities.AmenityName;
            console.log(amenities)
            $('h4#dict').text(amenities);
        }
      });
});

