fetch('https://api.openweathermap.org/data/2.5/weather?id=1733047&appid=0b14fe91eb0548e67cc8956d170f24cc')
    .then(function (response) {
        // API call successful!
        return response.json();
    }).then(function (data) {
        // JSON response
        document.getElementById("stateName").innerText = data.name;
        if ((Math.round(data.main.temp-273.15)).toFixed(2) < 25){
            document.getElementById("lowTemp").innerText = (Math.round(data.main.temp-273.15)).toFixed(2) + "°C";
            var x = document.createElement("IMG");
            x.setAttribute("src", "tempCold.png");
            document.body.appendChild(x);
        } else if ((Math.round(data.main.temp-273.15)).toFixed(2) < 35){
            document.getElementById("midTemp").innerText = (Math.round(data.main.temp-273.15)).toFixed(2) + "°C";
            var x = document.createElement("IMG");
            x.setAttribute("src", "tempWarm.png");
            document.body.appendChild(x);
        } else if ((Math.round(data.main.temp-273.15)).toFixed(2) < 40 || (Math.round(data.main.temp-273.15)).toFixed(2) > 40){
            document.getElementById("highTemp").innerText = (Math.round(data.main.temp-273.15)).toFixed(2) + "°C";
            var x = document.createElement("IMG");
            x.setAttribute("src", "tempHot.png");
            document.body.appendChild(x);
        };
        document.getElementById("weather").innerText = data.weather[0].main;
        // console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Error', err);
    });