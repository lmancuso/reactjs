import React, { Component } from 'react';
import MiLista from './MiLista';
import PeliculasPopulares from './PeliculasPopulares';
import SeriesPopulares from './SeriesPopulares';

class Body extends Component{
	render(){
		return(
			<main role="main">
    <div className="py-5 bg-light">
        <div className="container">
            
            <MiLista />

            <PeliculasPopulares />

            <SeriesPopulares />

            </div>
    </div>

</main>

		)
	}

}


export default Body;