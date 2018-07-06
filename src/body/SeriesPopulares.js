import React, { Component } from 'react';
import ItemPeliculaGrid from './ItemPeliculaGrid';

class SeriesPopulares extends Component {
	render(){
		return(
				<section className="items-section">
                <h5 className="items-section-title">Series más Populares <a href="">Ver todas</a></h5>
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

export default SeriesPopulares;