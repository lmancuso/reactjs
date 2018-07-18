import axios from 'axios';

const API_KEY = '0daa2b9c9b9d09226956bea825b1ed5c';

class Api{
	constructor(){
		this.axios = axios.create({
			baseURL: 'https://gateway.marvel.com',
			params: {
				apikey: API_KEY,
			},
		})
	}

	seriesPopular = () => {
		return this.axios.get('/v1/public/series?limit=6').then(response => {
			return response.data
		})
	}

	getPeople = (numero) => {
		return this.axios.get(`/people/${numero}`).then(response => {
			return response.data
		})
	}

	comicsPopular = () => {
		return this.axios.get('/v1/public/comics?limit=6').then(response => {
			return response.data
		})
	}

	getVehicle = (numero) => {
		return this.axios.get(`/vehicles/${numero}`).then(response => {
			return response.data
		})
	}
}

export default Api;