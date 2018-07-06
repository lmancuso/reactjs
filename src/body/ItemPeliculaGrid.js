import React, { Component } from 'react';

class PeliculaPopular extends Component {
	render(){
		return(

<article className="col-md-2">
                            <a href="detalle.html" className="grid-item">
                                <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                                <span className="grid-item-body">
                                    <span className="grid-item-title">Thor: Ragnarok</span>
                                    <span className="grid-item-date">October 25, 2017</span>
                                </span>
                            </a>
                        </article>
		)
	}
}

export default PeliculaPopular;