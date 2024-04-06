localStorage.setItem("eventname", "Test");
localStorage.setItem("eventdetails", "Location: somewhere<br>Date: today<br>Time: now");
localStorage.setItem("eventdesc", "Have fun");
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementById("driver").innerHTML = urlParams.get('driver');
  document.getElementById("carpooler").innerHTML = urlParams.get('carpooler');

  const event = urlParams.get('event');
  document.getElementById("eventname").innerHTML = localStorage.getItem(event);
  document.getElementById("eventdetails").innerHTML = "Location: " + localStorage.getItem(event+"address") + "<br>Date: " + localStorage.getItem(event+"date");
  document.getElementById("eventdesc").innerHTML = localStorage.getItem(event+"desc");
}

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 41.85, lng: -87.65 },
  });

  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService
  .route({
    origin: {
      query: "chicago, il",
    },
    destination: {
      query: "joplin, mo",
    },
    travelMode: google.maps.TravelMode.DRIVING,
  })
  .then((response) => {
    directionsRenderer.setDirections(response);
  })
  .catch((e) => window.alert("Directions request failed due to " + status));
}

//window.initMap = initMap;





/*var i = 1;
while (localStorage.getItem("user" + i) !== null) {
  document.getElementById("result").innerHTML += localStorage.getItem("user"+i) + " ";
  i++;
}
*/