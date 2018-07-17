import React, { Component } from 'react';

class ItemPeliculaGrid extends Component {
	render(){
		return(

<article className="col-md-2">
                            <a href="{this.props.link}" className="grid-item">
                                <img src="{this.props.image}" alt="Movie Image" className="img-fluid" />
                                <span className="grid-item-body">
                                    <span className="grid-item-title">{this.props.title}</span>
                                    <span className="grid-item-date">{this.props.date}</span>
                                </span>
                            </a>
                        </article>
		)
	}
}

export default ItemPeliculaGrid;