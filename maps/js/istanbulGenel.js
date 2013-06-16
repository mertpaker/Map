 function initialize() {

  google.maps.visualRefresh = true;

  // Defining variables that need to be available to some functions
  var map, infoWindow; 


    // Map styles.
    var styles = [
      {
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
          { "visibility": "on" },
          { "color": "#ff0080" }
        ]
      }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});



    // Creating a map
    var options = {  
      zoom: 9,
      center: new google.maps.LatLng(41.00, 29.02),  
      //mapTypeId: google.maps.MapTypeId.HYBRID  
      //mapTypeId: google.maps.MapTypeId.ROADMAP
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']}
    };  
    
    map = new google.maps.Map(document.getElementById('map'), options);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var borderLayer = new google.maps.KmlLayer({
      url: 'http://localhost/map/maps/js/iller.kml'    });

    borderLayer.setMap(map);

    // Adding a marker to the map
    /*var marker = new google.maps.Marker({
      position: new google.maps.LatLng(39.92, 32.85),
      map: map,
      title: 'marker title'
    });*/
    
    
    /*google.maps.event.addListener(marker, 'click', function() {
    
      // Creating the div that will contain the detail map
      var detailDiv = document.createElement('div');
      detailDiv.style.width = '200px';
      detailDiv.style.height = '200px';
      document.getElementById('map').appendChild(detailDiv);
      
      // Creating MapOptions for the overview map
      var overviewOpts = {
        zoom: 14,
        center: marker.getPosition(),
        mapTypeId: map.getMapTypeId(),
        disableDefaultUI: true
      };
      
      var detailMap = new google.maps.Map(detailDiv, overviewOpts);
      
      // Create a marker that will show in the detail map
      var detailMarker = new google.maps.Marker({
        position: marker.getPosition(),
        map: detailMap,
        clickable: false
      });
      
      // Check to see if an InfoWindow already exists
      if (!infoWindow) {
        infoWindow = new google.maps.InfoWindow();
      }
      
      // Setting the content of the InfoWindow to the detail map
      infoWindow.setContent(detailDiv);
      
      // Opening the InfoWindow
      infoWindow.open(map, marker);
    
    });*/
  
  }

google.maps.event.addDomListener(window, 'load', initialize);