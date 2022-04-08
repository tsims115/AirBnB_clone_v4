amenities = {};
$( document ).ready(function() {
    $('input').change(function() {
        if ($(this).is(':checked')) {
          console.log($('li input').attr('data-id'));
          var amenityId  = $('.popover input').attr('data-id');
          amenities.push(amenityId);
        } else {
            amenities.pop(amenityId);
        }
      });
});
