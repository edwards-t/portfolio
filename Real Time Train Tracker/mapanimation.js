// coordinates for all train stops between Hicksville and Penn Station
const trainStops = [
  [-73.5345086, 40.7441255], // Hicksville
  [-73.6399159, 40.740705], // Mineola
  [-73.7259332, 40.711781], // UBS Arena
  [-73.8078162, 40.7003552], // Jamaica
  [-73.9033816, 40.745598], // Woodside
  [-73.9948348, 40.7502771], // Penn Station
];

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ";

// creates map object
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-73.5345086, 40.7441255],
  zoom: 9,
});

// adds marker
let marker = new mapboxgl.Marker()
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);
// counter represents index of current train stop
let counter = 0;
function move() {
  // moves the marker, updates marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= trainStops.length) return;
    marker.setLngLat(trainStops[counter]);
    counter++;
    move();
  }, 1000);
}

if (typeof module !== "undefined") {
  module.exports = { move, counter, marker, trainStops };
}
