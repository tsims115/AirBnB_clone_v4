let amenities = {};
$( document ).ready(function() {
    $('input').change(function() {
      let amenityId  = $(this).data('id');
      let amenityName = $(this).attr('data-name');
        if ($(this).is(':checked')) {
          amenities[amenityId] = ' ' + amenityName;
        } else {
            delete amenities[$(this).data('id')];
        }
        $('h4#dict').text(Object.values(amenities));
      });
});
