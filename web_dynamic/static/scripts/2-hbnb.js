$( document ).ready(function() {
  amenities = {};

  $(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {

      if (status === 'success') {
        $('#api_status').addClass('available');
      }

    });
  });


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
