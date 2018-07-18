import React, { Component } from 'react';
import ItemPeliculaGrid from './ItemPeliculaGrid';
import Api from '.././api';

class PeliculasPopulares extends Component {

	constructor(props){
    super(props);
    this.api = new Api();
    this.state = {
      loading:true,
      error:false,
      comics: [],
    }
  }
  

  componentDidMount() {
    this.api.comicsPopular().then(response => {
      console.log(response.data.results);
      this.setState({
        comics: response.data.results,
        loading:false
      }) 
      
    })
}

	render(){
		return(
			<section className="items-section">
                <h5 className="items-section-title">Películas más Populares <a href="">Ver todas</a></h5>
                <div className="items-section-body">
                    <div className="row">
                        {this.state.comics.map(comic => <ItemPeliculaGrid link={comic.url} image={comic.thumbnail.path + "." + comic.thumbnail.extension} title={comic.title} date={comic.endYear} />)}
                    </div>
                </div>
            </section>
		)
	}
}

export default PeliculasPopulares;