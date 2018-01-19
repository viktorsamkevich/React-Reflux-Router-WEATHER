import React from "react";
import CurrentWeather from "./currentWeather";
import Forecast from "./forecast";
import Actions from "./actions";
import Reflux from "reflux";
import MyStore from "./store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class WeatherWidget extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = MyStore;
	}


	componentDidMount() {
		Actions.getWeather();
		Actions.getForecastWeather();
	}

	render() {
		if (this.state.currenWeatherObj) {

			return (
				/*<div>
					<CurrentWeather />
					<Forecast />			
				</div>*/
			
			<Router>
				<div>
					<div>Our pages: <Link to="/">Current Weather</Link> <Link to="/forecast">Forecast</Link></div>
					<Route exact path = "/" component={CurrentWeather} />
					<Route path = "/forecast" component={Forecast} />
				</div>
			</Router>
			)
		}

		else {
			return <p>{this.state.demoInfo}</p>
		}

		
	}
}


export default WeatherWidget;
