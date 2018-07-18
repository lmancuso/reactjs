import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Series from './series';
import Comics from './comics';

const Contenido = () => {

	<Switch>
		<Route exact path ='/' component={Home} />
		<Route exact path ='/series' component={Series} />
		<Route exact path ='/comics' component={Comics} />
	</Switch>

}
export default Contenido;