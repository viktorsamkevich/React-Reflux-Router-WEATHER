import React from "react";
import Reflux from "reflux";
import Actions from "./actions";
import myFetch from "./myfetch";

export default class MyStore extends Reflux.Store {
	constructor() {
		super();
		this.state = {
			currenWeatherObj: null,
			forecastWeatherObj: null,
			demoInfo: "Loading data"			
		}
		this.listenables = Actions;
	}

	onGetWeather() {
		let url = "https://api.openweathermap.org/data/2.5/weather?id=625144&appid=468c8d57ebb44cc2e9adb6ec9fe5cb07";
		myFetch.myGet(url).then(result => {
			console.log(result);
			this.setState({currenWeatherObj: result})
		})
	}

	onGetForecastWeather() {
		let url = "https://api.openweathermap.org/data/2.5/forecast?id=625144&appid=468c8d57ebb44cc2e9adb6ec9fe5cb07";
		myFetch.myGet(url).then(result => {
			console.log(result);
			this.setState({forecastWeatherObj: result})
		})
	}
}
