 var myPlaces = [];
    
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
       
        var geocoder = new google.maps.Geocoder();

        document.getElementById('enter').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }
              
       

      function geocodeAddress(geocoder, resultsMap) {
        var rating = $('#rating :selected').text();
        console.log(rating);
        var category = $('#category :selected').val();
        var address = $('#address').val();
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
            
            var infowindow = new google.maps.InfoWindow({
    content: '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+address+'</h1>'+
      '<div id="bodyContent">'+
      '<p><b>'+address+'</b>,  <b>Rating is '+rating+'</b>,' +
      ' <b>Category is '+category+'</b>'+
      '</div>'+
      '</div>'
  
  });
		  marker.addListener('click', function() {
    infowindow.open(map, marker);
      });
	
      
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }


 
      
