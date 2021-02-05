import React, {Component} from 'react';


export class Weather extends Component {

    render() {
        return (
            <div className="weather-box">
                <div className="temperature">{Math.round(this.props.temperature)}°C</div>
                <div className="weather">{this.props.weather}</div>
            </div>
        );
    }
}