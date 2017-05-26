function init() {

    // MODEL
    var model = {
        locations: [{
            title: 'Second Cup',
            address: '254 Edmonton St, Winnipeg, MB R3C 1R9, Canada',
            location: {
                lat: 49.891360,
                lng: -97.147091
            },
            visible: true,
            yelpBusinessId: 'the-second-cup-winnipeg-4'
        }, {
            title: 'Fools & Horses',
            address: '379 Broadway, Winnipeg, MB R3C 0T9, Canada',
            location: {
                lat: 49.887025,
                lng: -97.143937
            },
            visible: true,
            yelpBusinessId: 'fools-and-horses-coffee-winnipeg'
        }, {
            title: 'Thom Bargen Coffee & Tea',
            address: '64 Sherbrook Street, Winnipeg, MB R3G 1A3, Canada',
            location: {
                lat: 49.880751,
                lng: -97.159823
            },
            visible: true,
            yelpBusinessId: 'thom-bargen-coffee-and-tea-winnipeg'
        }, {
            title: 'The Fyxx Espresso Bar',
            address: '330 Portage Ave, Winnipeg, MB R3C 0C4, Canada',
            location: {
                lat: 49.892749,
                lng: -97.144874
            },
            visible: true,
            yelpBusinessId: 'the-fyxx-espresso-bar-winnipeg-3'
        }, {
            title: 'Starbucks - Graham Ave',
            address: '412 Graham Ave, Winnipeg, MB R3L 0L8, Canada',
            location: {
                lat: 49.890722,
                lng: -97.148077
            },
            visible: true,
            yelpBusinessId: 'starbucks-winnipeg-6'
        }, {
            title: 'Starbucks - Portage Ave',
            address: '201 Portage Avenue, 100, Winnipeg, MB R3B 3K6, Canada',
            location: {
                lat: 49.895732,
                lng: -97.139307
            },
            visible: true,
            yelpBusinessId: 'starbucks-winnipeg-2'
        }, {
            title: 'Tim Hortons - Portage Ave',
            address: '434 Portage Ave, Winnipeg, MB R3C 0C9, Canada',
            location: {
                lat: 49.891163,
                lng: -97.149130
            },
            visible: true,
            yelpBusinessId: 'tim-hortons-winnipeg-40'
        }, {
            title: 'Tim Hortons - Graham Ave',
            address: '240 Graham Ave, Winnipeg, MB R3C 0J7, Canada',
            location: {
                lat: 49.892648,
                lng: -97.139265
            },
            visible: true,
            yelpBusinessId: 'tim-hortons-winnipeg-22'
        }],
        styles: [{
            elementType: 'geometry',
            stylers: [{
                color: '#f5f5f5'
            }]
        }, {
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#616161'
            }]
        }, {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#f5f5f5'
            }]
        }, {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#bdbdbd'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#fe8d57'
            }]
        }, {
            featureType: 'landscape.man_made',
            elementType: 'geometry',
            stylers: [{
                color: '#ffe4c5'
            }]
        }, {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{
                color: '#c3e6c7'
            }]
        }, {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{
                color: '#eeeeee'
            }]
        }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#757575'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#6ed39a'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#757575'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#dadada'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#616161'
            }]
        }, {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        }, {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{
                color: '#e5e5e5'
            }]
        }, {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{
                color: '#eeeeee'
            }]
        }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#c9c9c9'
            }]
        }, {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#64a6d1'
            }]
        }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#555555'
            }]
        }]
    };

    var Location = function(value) {
        this.title = ko.observable(value.title);
        this.address = ko.observable(value.address);
        this.location = ko.observable(value.location);
        this.visible = ko.observable(value.visible);
        this.yelpBusinessId = ko.observable(value.yelpBusinessId);
    };


    // VIEWMODEL
    var ViewModel = function() {
        // Using SELF or THAT with
        // 'this' represents the binding context; while 'self' represents the ViewModel
        var self = this;
        self.yelpContent;

        self.getYelp = function(yelpBusinessId, marker) {

            var auth = {
                consumerKey: 'goxYSjljMSp8aNCRJDOddg',
                consumerSecret: 'menZBRN3-Y4sKUGxIWjer_Tkwvc',
                accessToken: 'ZwrLeAommiqybjmeE1eTeXw9SIC4QFqA',
                accessTokenSecret: 'dI8XWvruC7EbaoJj9BsIV_GuX14',
                serviceProvider: {
                    signatureMethod: 'HMAC-SHA1'
                }
            };

            var yelp_url = 'https://api.yelp.com/v2/business/' + yelpBusinessId;

            var parameters = {
                oauth_consumer_key: auth.consumerKey,
                oauth_consumer_secret: auth.consumerSecret,
                oauth_token: auth.accessToken,
                oauth_nonce: nonce_generate(),
                oauth_timestamp: Math.floor(Date.now() / 1000),
                oauth_signature_method: 'HMAC-SHA1',
                oauth_version: '1.0',
                callback: 'cb', // This is crucial to include for jsonp implementation in AJAX or else the oauth-signature will be wrong.
            };

            var encodedSignature = oauthSignature.generate('GET', yelp_url, parameters, auth.consumerSecret, auth.accessTokenSecret);
            parameters.oauth_signature = encodedSignature;

            var settings = {
                url: yelp_url,
                data: parameters,
                cache: true, // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
                dataType: 'jsonp',
                success: (function(result, textStatus, jqXHR) {
                    // console.log('success[' + result + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                    self.yelpContent = [];
                    yelpResult = result;

                    var yelpContentStr = '';

                    yelpContentStr += '<div class ="info">' +
                        '<h2 class="name">' + yelpResult.name + '</h2>' +
                        '<p class="categories">' + "<b>Categories: </b>" + yelpResult.categories[0][0].toString() + '</p>' +
                        '<p class="rating">' + "<b>Rating: </b>" + yelpResult.rating + '</p>' +
                        '<p class="location">' + "<b>Address: </b>" + yelpResult.location.address.toString() + '</p>' +
                        '<p class="phone">' + "<b>Phone: </b>" + yelpResult.display_phone + '</p>' +
                        '<p class="snippet">' + "<b>About: </b>" + yelpResult.snippet_text + '</p>' +
                        '<a href="' + yelpResult.url + '">' + 'See more on yelp' + '</a>' +
                        '</div>';

                    self.yelpContent.push(yelpContentStr);

                    populateInfoWindow(marker, self.largeInfoWindow);
                }),
                error: (function(jqXHR, textStatus, errorThrown) {
                    // console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                    alert("Problem occured!");
                })
            };
            // Send AJAX query via jQuery library.
            $.ajax(settings);
        }; // end self.getYelp

        // Constructor creates a new map
        self.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 49.8951,
                lng: -97.1384
            },
            zoom: 14,
            styles: model.styles,
            mapTypeControl: false
        });

        self.markers = [];
        self.largeInfoWindow = new google.maps.InfoWindow();

        // From list of hardcoded locations
        // Store values from locations array
        // This format makes it easier to connect markers to list items
        self.locationsList = ko.observableArray(model.locations);
        // Loop over all of the locations in locationsList,
        // Create and style a marker, set click event to open largeInfoWindow
        self.locationsList().forEach(function(location) {

            // Style the marker icon
            makeMarkerIcon = function(markerColor) {
                var markerImage = new google.maps.MarkerImage(
                    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
                    '|40|_|%E2%80%A2',
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(10, 34),
                    new google.maps.Size(21, 34));
                return markerImage;
            }
            // Default icon color
            var defaultIcon = makeMarkerIcon('2196f3');
            // Highlighted / hover icon color
            var highlightedIcon = makeMarkerIcon('FFFF24');

            var marker = new google.maps.Marker({
                position: location.location,
                map: self.map,
                title: location.title,
                animation: google.maps.Animation.DROP,
                icon: defaultIcon,
                visible: true,
                yelpBusinessId: location.yelpBusinessId
            });

            location.marker = marker;

            // Push the marker to our array of markers.
            self.markers.push(marker);

            // Event listener opens largeInfoWindow when marker clicked
            marker.addListener('click', function() {
                // Call 3rd party API to populateInfoWindow
                self.getYelp(this.yelpBusinessId, this);
            });

            // Two event listeners - one for mouseover, one for mouseout
            marker.addListener('mouseover', function() {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function() {
                this.setIcon(defaultIcon);
            });
            return marker;
        }); // end forEach creating markers for the locationsList

        // Open corresponding marker largeInfoWindow when location list item clicked
        this.currentLocation = ko.observable(this.locationsList()[0]);
        this.setLocation = function(clickedLocation) {
            self.currentLocation(clickedLocation);
            // Tie marker to location list view item
            google.maps.event.trigger(clickedLocation.marker, 'click');
        }; // end setLocation

        // Filter list items and map markers per user search
        self.query = ko.observable('');
        self.locationsList = ko.observableArray(model.locations);
        self.filterBySearch = ko.computed(function() {
            return ko.utils.arrayFilter(self.locationsList(), function(result) {
                //Match search with items in locationsList observable array
                var match = result.title.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
                if (match) { //If result is true, show correct marker based off users search
                    result.marker.setVisible(true);
                    result.visible = true;
                } else {
                    result.marker.setVisible(false); //hide markers that do not show users search results
                    result.visible = false;
                }
                return match;
            });
        }); // end filterBySearch

        // Open the largeInfoWindow at the marker
        populateInfoWindow = function(marker, infowindow) {

            // Check to make sure the infowindow is not already opened on this marker.
            if (infowindow.marker != marker) {
                // Clear the infowindow content to give the streetview time to load.
                infowindow.setContent('');
                infowindow.marker = marker;
                // Make sure the marker property is cleared if the infowindow is closed.
                infowindow.addListener('closeclick', function() {
                    infowindow.marker = null;
                });

                // Zoom the map
                self.map.setZoom(15);
                // Center on marker
                self.map.panTo(marker.position);
                // Marker bounce
                marker.setAnimation(google.maps.Animation.BOUNCE);
                // End marker bounce (1.4 seconds)
                setTimeout(function() {
                    marker.setAnimation(null);
                }, 1400);

                var streetViewService = new google.maps.StreetViewService();
                var radius = 50;
                // In case the status is OK, which means the pano was found, compute the
                // position of the streetview image, then calculate the heading, then get a
                // panorama from that and set the options
                getStreetView = function(data, status) {
                    if (status == google.maps.StreetViewStatus.OK) {
                        var nearStreetViewLocation = data.location.latLng;
                        var heading = google.maps.geometry.spherical.computeHeading(
                            nearStreetViewLocation, marker.position);
                        infowindow.setContent('<div id="contentWindow">' + '</div><div id="pano"></div><div id="yelpInfo">' + self.yelpContent.toString() + '</div>');
                        var panoramaOptions = {
                            position: nearStreetViewLocation,
                            pov: {
                                heading: heading,
                                pitch: 30
                            }
                        };
                        var panorama = new google.maps.StreetViewPanorama(
                            document.getElementById('pano'), panoramaOptions);
                    } else {
                        infowindow.setContent('<div>' + marker.title + '</div>' +
                            '<div>No Street View Found</div>');
                    }
                }
                // Use streetview service to get the closest streetview image within
                // 50 meters of the markers position
                streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);

                // Open the infowindow on the correct marker
                // self.getYelp(marker.yelpBusinessId, marker);
                infowindow.open(self.map, marker);
            }
        }; // end populateInfoWindow

    };


    // Make it go
    ko.applyBindings(new ViewModel());

    function nonce_generate(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

} // end init function, needed for google maps api
