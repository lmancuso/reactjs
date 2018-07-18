import React, { Component } from 'react';
import MiLista from './MiLista';
import ComicsPopulares from './ComicsPopulares';
import SeriesPopulares from './SeriesPopulares';

class Home extends Component{
	render(){
		return(
			<main role="main">
    <div className="py-5 bg-light">
        <div className="container">
            
            <MiLista />

            <ComicsPopulares />

            <SeriesPopulares />

            </div>
    </div>

</main>

		)
	}

}


export default Home;