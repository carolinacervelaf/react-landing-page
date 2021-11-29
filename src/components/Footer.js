import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Junte-se a nós, assinando nossa newsletter para receber nossas melhores opções de viagens!</p>
                <p className='footes-subscription-text'>Você pode deixar de receber a qualquer momento que quiser.</p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name='email' placeholder='Seu Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Inscreva-se</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Sobre Nós</h2>
                        <Link to='/'>Como Funciona</Link>
                        <Link to='/'>Depoimentos</Link>
                        <Link to='/'>Termos de Serviço</Link>
                    </div>
                </div>
            </div>
             <section className='social-media'>
                 <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo' to='/'>
                            PELO MUNDO <i class="fas fa-globe-americas"></i>
                        </Link>
                    </div>
                 </div>
                 <small className='website-rigths'>PELO MUNDO © 2021</small>
             </section>    
        </div>
    )
}

export default Footer
