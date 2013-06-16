
function initialize() {
  var istanbul = new google.maps.LatLng(40.875696,29.624207);
  var mapOptions = {
    zoom: 7,
    center: istanbul,
    mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	//
	//var ctaLayer = new google.maps.KmlLayer({
	//url: '/cta.kml'
	//url: 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml'
	//url: 'http://mertpaker.com/maps/data/iller.kml'
	//url: 'http://www.mertpaker.com/maps/data/cta.kml'
	//url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss.kml'
	//url: '../georss.kml'
	//});
	
	//var myLayer = new google.maps.KmlLayer('http://commondatastorage.googleapis.com/mertpaker.com%2Fcta.kml');

	var myLayer = new google.maps.KmlLayer('http://commondatastorage.googleapis.com/mertpaker.com%2Filler.kml');	


	

	myLayer.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);