import React, { Component } from 'react';
import ItemPeliculaGrid from './ItemPeliculaGrid';

class PeliculasPopulares extends Component {
	render(){
		return(
			<section className="items-section">
                <h5 className="items-section-title">Películas más Populares <a href="">Ver todas</a></h5>
                <div className="items-section-body">
                    <div className="row">
                        <ItemPeliculaGrid />
                        <ItemPeliculaGrid />
                        <ItemPeliculaGrid />
                        <ItemPeliculaGrid />
                        <ItemPeliculaGrid />
                        <ItemPeliculaGrid />
                    </div>
                </div>
            </section>
		)
	}
}

export default PeliculasPopulares;