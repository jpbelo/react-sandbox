import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './App.css';

const App = () => {
	return (
		<div className="App" >
			<HelloWorld name="Jim" />
			<HelloWorld name="Sally" />
		</div>
	);
};

export default App;
