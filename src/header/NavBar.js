import React, { Component } from 'react';
import Header from './Header';
import BusquedaForm from './BusquedaForm';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
					<a className="navbar-brand" href="#">React Movie DB APP</a>
		            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
		                <span className="navbar-toggler-icon"></span>
		            </button>
		            

            <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav mr-auto">
                    <li>
                    <NavLink className='nav-link' exact to='/'> Home </NavLink>
                    </li>
                    <li>
                    <NavLink className='nav-link' exact to='/peliculas'> Peliculas </NavLink>
                    </li>
                    <li>
                    <NavLink className='nav-link' exact to='/comics'> Comics </NavLink>
                    </li>
                    <li>
                    <NavLink className='nav-link' exact to='/favoritos'> Favoritos </NavLink>
                    </li>
                </ul>
                <BusquedaForm />
            </div>
					</div>
				</nav>
}

export default NavBar;