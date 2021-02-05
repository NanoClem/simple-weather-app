import React, { useState } from 'react';
import env from "react-dotenv";
import { Weather } from './Weather';

// WEATHER API
const api = {
    key: env.API_KEY,
    url: env.URL
};


// FORMAT DATE
const dateFormat = (d) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let year  = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d);
    let month = new Intl.DateTimeFormat('en', {month: 'short'}).format(d);
    let date  = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(d); 
    let day   = days[d.getDay()];

    return `${day}, ${date} ${month} ${year}`;
}


// APP COMPONENT
const App = () => {

    // HANDLE CHANGES
    const [querry, setQuerry] = useState('');
    const [weather, setWeather] = useState({});

    // HANDLE ERRORS
    const handleErrors = response => {
        if (!response.ok)
            throw Error(response.statusText);
        return response.json();
    };

    // GET WEATHER
    const search = (event) => {
        if (event.key === "Enter" && querry !== '') {
            fetch(`${api.url}/weather?q=${querry}&units=metric&appid=${api.key}`)
                .then(handleErrors)
                .then(data => {
                    setWeather(data);
                    setQuerry('');
                }).catch(error => console.log(error));
        }
    }

    return (
        <div className="app">
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search a city..."
                        onChange={event => setQuerry(event.target.value)}
                        value={querry}
                        onKeyPress={search}
                    />
                </div>
                {/* WEATHER DATA */}
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateFormat(new Date())}</div>
                        </div>
                        <Weather weather={weather.weather[0].main} temperature={weather.main.temp}/>
                    </div>
                ) : ('')}
            </main>
        </div>
    );
}


// EXPORTS
export default App;
