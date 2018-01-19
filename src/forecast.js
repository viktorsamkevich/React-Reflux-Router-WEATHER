import React from "react";
import Reflux from "reflux";
import MyStore from "./store";

export default class Forecast extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = MyStore;
	}
	render() {
		if (this.state.forecastWeatherObj) {

			let arr = [];
			arr.push(this.state.forecastWeatherObj.list);

			let arrFiveDays = arr[0].filter(function (element) {
				return (element.dt_txt.slice(11, -6) === "12");
			});

			console.log(arr[0].length);
			console.log(arrFiveDays);

			let day = arrFiveDays.map( (item, index) => {
				let convDay = arrFiveDays[index].dt_txt.slice(0, -6) + "a.m.";
				let temp = (item.main.temp - 272.15).toFixed(1);
				let src = "../src/icons/" + item.weather[0].icon + ".png";
				return (
					<ul key={index}>
						<li><p>{convDay}</p><img src={src} alt=""/><p>{temp}</p></li>
					</ul>
				)
			}); // map end

			return (
				<div className="fiveDayForecast" id="fiveDayForecast">
					{day}
				</div>
			)
		}
				
		else { return (<div>{this.state.demoInfo}</div>) }
	}
}
