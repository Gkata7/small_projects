// $(document).ready(function(){
//   var long;
//   var lat;
//   var temp;
//   // To get location of weather(longitude and latitude)
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(position){
//       long = "long=" + position.coords.longitude;
//       lat = "lat=" + position.coords.latitude;
//       $("#data").html("latitude: " + lat + "<br>longitude: " + long);
//     });
//   }
//
//   var api = "http://api.openweathermap.org/data/2.5/weather?lat=:lat+&lon=:long&appid=06ca135e1b172b2bc2dfe6db7cf7b952";
//   // var api = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=06ca135e1b172b2bc2dfe6db7cf7b952";
//
//   $.getJSON(api, function(data){
//     var weatherType = data.weather[0].description;
//     var kelvin = data.main.temp;
//     var windspeed = data.wind.speed;
//     var city = data.name;
//
//     console.log(city);
//     console.log(api);
//   });
// });

$(document).ready(function(){
  var fahrenheit,celsius;
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
  var apiKey = API KEY;
  // getLatLong function will a call to geoip api to recieve user's location.
  getLatLong();

  // Latitude and Longitude for the weather
  function getLatLong(){
    // .ajax() function takes in a url, type, dataType, success:
    $.ajax({
      url: "https://geoip-db.com/json", // url = end point of the URL from the api
      type: "GET", // type = It's a get post, to recieve info
      dataType: "json", // dataType = data recieved from the Ajax call.
      success: function(data){ // success = what spits out when the search is successful
        var lat = data.latitude;
        var long = data.longitude;
        $(".city").html(data.city);
        $(".country").html(data.country);
        weatherUrl += "?lat="+lat+"&lon="+long+"&APPID="+apiKey+"&units=metric";
        getWeather();
      },
      // create an alert if the user types in a undefined location or one that doesn't exist.
      error: function(err) {
        alert("Something isn't right, please try again");
        console.log(err);
      }
    });
  }
  // get data's weather from user's location
  function getWeather(){
    $.ajax({
      url: weatherUrl,
      type: "GET",
      dataType: "json",
      success: function(data){
        var tempature = data.main.temp;
        celsius = tempature;
        fahrenheit = celsius*1.8+32;
        var icon = data.weather[0].icon;
        var weatherDetail = data.weather[0].main+" , "+data.weather[0].description;
        $(".weatherDetail").html(weatherDetail); // updates weathe description
        $(".icon").attr("src", "http://openweathermap.org/img/w/'+icon+'.png"); // update the icon based on weather location
        $(".temp").html(tempature+"&#8451"); // updates the tempature
      },
      error: function(err){
        alert("Something isn't right, please try again");
        console.log(err);
      }
    });
  }

});
