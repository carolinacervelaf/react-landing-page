import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Dê uma olhada nesses destinos ÉPICOS!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItem src='images/img-1.jpg' text='Explore uma cachoeira escondida no interior da Floresta Amazônica' label='Aventura' path='/produtos'/>
                        <CardItem src='images/img-2.jpg' text='Viaje para as Ilhas de Bali em um Cruzeiro Privado' label='Luxuoso' path='/produtos'/>
                        <CardItem src='images/img-3.jpg' text='Ande pelo Deserto do Saara em um tour guiado, montado(a) em um camelo' label='Empolgante' path='/produtos'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
