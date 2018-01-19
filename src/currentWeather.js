import React from "react";
import Reflux from "reflux";
import MyStore from "./store";

export default class CurrentWeather extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = MyStore;
	}

	render() {
		let src = "../src/icons/" + this.state.currenWeatherObj.weather[0].icon + ".png";
		let tmp = (this.state.currenWeatherObj.main.temp - 272.15).toFixed(1);
		let pressure = this.state.currenWeatherObj.main.pressure;
		let wind = this.state.currenWeatherObj.wind.speed;
		
		let feels = ((1.04 * tmp + 2.0 * pressure / 10 - 0.65 * wind / 10 - 2.7) / 10).toFixed(1);
		
		let windDir = this.state.currenWeatherObj.wind.deg;
		if (windDir == 0 || windDir == 360) {
			windDir = "Noth";
		} else if (windDir == 90) {
			windDir = "East";
		} else if (windDir == 180) {
			windDir = "South";
		} else if (windDir == 270) {
			windDir = "West";
		} else {
			windDir;
		}

		return (
			<div className="curentWeather" id="curentWeather">
				<div className="city">
					<h1>{this.state.currenWeatherObj.name}, {this.state.currenWeatherObj.sys.country}</h1>
					<p>Update time: {}00:00</p>
				</div>
				<div className="temp">
					<img src={src} alt=""/>
					<h2>{tmp} °C</h2>
					<p>Feels like {feels} °C</p>
				</div>
				<div className="wind">
					<p className="windDirection">{windDir}</p>
					<p className="windSpeed">{wind} m/s</p>
				</div>				
			</div>
		)
	}
}
