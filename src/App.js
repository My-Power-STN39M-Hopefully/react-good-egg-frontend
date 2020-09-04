import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			incidents: [],
			officers: [],
		};
	}
	render() {
		return <div></div>;
	}
}

export default App;
