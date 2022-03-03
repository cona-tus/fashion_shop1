"use strict";

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.56353484183652, lng: 126.9783009492541 },
    zoom: 20,
  });
}

initMap();
