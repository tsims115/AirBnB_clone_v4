$( document ).ready(function() {
  amenities = {};

  $(function () {
    $.get('https://swapi-api.hbtn.io/api/people/5/?format=json', function (data, status) {

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
