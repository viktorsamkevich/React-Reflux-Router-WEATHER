const React = require("react");
const ReactDom = require("react-dom");
import WeatherWidget from "./app";

ReactDom.render(<WeatherWidget />, document.getElementById("reactcontainer"));
