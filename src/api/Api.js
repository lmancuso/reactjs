import axios from 'axios';

const API_KEY = '0daa2b9c9b9d09226956bea825b1ed5c';

class Api{
	constructor(){
		this.axios = axios.create({
			baseURL: 'https://gateway.marvel.com',
			params: {
				apikey: API_KEY,
				limit: '6',
			},
		})
	}

	seriePopular = () => {
		return this.axios.get('/v1/public/series').then(response => {
			return response.data
		})
	}

	getPeople = (numero) => {
		return this.axios.get(`/people/${numero}`).then(response => {
			return response.data
		})
	}

	listVehicle = () => {
		return this.axios.get('/vehicles').then(response => {
			return response.data.results
		})
	}

	getVehicle = (numero) => {
		return this.axios.get(`/vehicles/${numero}`).then(response => {
			return response.data
		})
	}
}

export default Api;