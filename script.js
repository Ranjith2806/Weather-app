document.getElementById("btn").addEventListener("click", function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
  
        document.getElementById("latitude").innerHTML = latitude;
        document.getElementById("longitude").innerHTML = longitude;
      });
    } else {
      document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
  });
  