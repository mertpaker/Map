 function initialize() {

  google.maps.visualRefresh = true;

  var polys = [];
  var labels = [];


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

    // Read the data from states.xml
      var request = GXmlHttp.create();
      request.open("GET", "states_tr.xml", true);
      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          console.log("Change");
          var xmlDoc = GXml.parse(request.responseText);
          // ========= Now process the polylines ===========
          var states = xmlDoc.documentElement.getElementsByTagName("state");

          // read each line
          for (var a = 0; a < states.length; a++) {
            // get any state attributes
            var label  = states[a].getAttribute("name");
            var colour = states[a].getAttribute("colour");
            // read each point on that line
            var points = states[a].getElementsByTagName("point");
            var pts = [];
            for (var i = 0; i < points.length; i++) {
               pts[i] = new GLatLng(parseFloat(points[i].getAttribute("lat")),
                                   parseFloat(points[i].getAttribute("lng")));
            }
            var poly = new google.maps.Polygon(pts,"#000000",1,1,colour,0.5,{clickable:false});
            polys.push(poly);
            labels.push(label);
            map.addOverlay(poly);
          }
          // ================================================           
        }
      }
      request.send(null)

  }

google.maps.event.addDomListener(window, 'load', initialize);