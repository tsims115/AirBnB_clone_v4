$( document ).ready(function() {
  amenities = {};


  $.ajax({
    url: "http://0.0.0.0:5001/api/v1/places_search/",
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: '{}',
    success: function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        let guest;
        if (place.max_guest == 1) {
          guest = "guest";
        } else {
          guest = "guests";
        }
      $('section.places').append(
        `<article>\
        <div class="title_box">\
          <h2>${place.name}</h2>\
          <div class="price_by_night">$${place.price_by_night}</div>\
        </div>\
        <div class="information">\
          <div class="max_guest"> ${place.max_guest} ${guest}</div>\
          <div class="number_rooms"> ${place.number_rooms} Bedroom</div>\
          <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>\
        </div>\
        <div class="user">\
              </div>\
              <div class="description">${place.description} </div>\
      </article>`
        );
      }
    },
    error: function(){
      alert("Cannot get data");
    }
});

  $(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {

      if (status === 'success') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
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
