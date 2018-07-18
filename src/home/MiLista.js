import React, { Component } from 'react';
import ItemPeliculaGrid from './ItemPeliculaGrid';

const MiLista = () => {
	return <section className="items-section">
                <h5 className="items-section-title">Mi Lista <a href="">Ver todas</a></h5>
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
}

export default MiLista;