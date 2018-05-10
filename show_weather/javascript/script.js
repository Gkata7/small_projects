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
      url: "https://geoip-db.com/json/", // url = end point of the URL from the api
      type: "GET", // type = It's a get post, to recieve info
      dataType: "json", // dataType = data recieved from the Ajax call.
      success: function(data){ // success = what spits out when the search is successful
        var lat;
        var long = data.longitude;
        $(".city").html(data.city);
        $(".state").html(data.state);
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
        var weatherDetail = data.weather[0].main+", "+data.weather[0].description;
        $(".weatherDetail").html(weatherDetail); // updates weather description
        $(".iconPic").attr("src", "http://openweathermap.org/img/w/"+icon+".png"); // update the icon based on weather location
        $(".temp").html(tempature+"&#8451;"); // updates the tempature
      },
      error: function(err){
        alert("Something isn't right, please try again");
        console.log(err);
      }
    });
  }

  $(".toggle .btn").click(function(){
    if($(".toggle").attr("id") == "c"){
      $(".temp").html(fahrenheit+"&#8457;");
      $(".toggle").attr("id", "f");
    } else if($(".toggle").attr("id") == "f"){
      $(".temp").html(celsius+"&#8451;");
      $(".toggle").attr("id", "c");
    }
  });

});
