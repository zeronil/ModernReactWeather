'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

    renderWeather (cityData) {

        console.log(cityData);

        const cityName = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={Date.now()}>

                <td><GoogleMap lat={lat} lon={lon} /></td>

                <td>
                    <Chart data={temp} color="#FF0000" units="K" />
                </td>

                <td>
                    <Chart data={pressure} color="#008800" units="hPa" />
                </td>

                <td>
                    <Chart data={humidity} color="#0000AA" units="%" />
                </td>

            </tr>
        );
    }

    render () {
        return (
            <table className="table table-hover">

                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>

                <tbody>
                {this.props.weather.map(city => this.renderWeather(city))}
                </tbody>

            </table>
        );
    }
}

function mapStateToProps ({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
