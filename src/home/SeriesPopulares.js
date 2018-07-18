import React, { Component } from 'react';
import ItemPeliculaGrid from './ItemPeliculaGrid';
import Api from '.././api';

class SeriesPopulares extends Component {

constructor(props){
    super(props);
    this.api = new Api();
    this.state = {
      loading:true,
      error:false,
      series: [],
    }
  }
  

  componentDidMount() {
    this.api.seriesPopular().then(response => {
      console.log(response.data.results);
      this.setState({
        series: response.data.results,
        loading:false
      }) 
      
    })
}
    /*this.swapi.traerPlaneta(1).then(response => {
      this.setState({
        planeta: response,
        loading:false,
        error:false
      })
    })
  }*/

	render(){
		return(
				<section className="items-section">
                <h5 className="items-section-title">Series más Populares <a href="">Ver todas</a></h5>
                <div className="items-section-body">
                    <div className="row">
                    {this.state.series.map(serie => <ItemPeliculaGrid link={serie.url} image={serie.thumbnail.path + "." + serie.thumbnail.extension} title={serie.title} date={serie.endYear} />)}
                    </div>
                </div>
            </section>
		)
	}
}
export default SeriesPopulares;