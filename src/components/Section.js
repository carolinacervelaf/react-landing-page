import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
    return (
        <div className='section-container'>
            <h1>BORA VIAJAR?</h1>
            <p>O que você está esperando?</p>
            <div className='section-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>VAMOS COMEÇAR</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>VAMOS COMEÇAR</Button>
            </div>
        </div>
    )
}

export default Section
