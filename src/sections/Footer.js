import Social from '../components/Social';
import { socialData } from '../assets/data';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer__top'>
                <div className='footer__left'>
                    <Social data={socialData} />
                </div>
                <div className='footer__right'>
                    <h1>Stay in Touch</h1>
                    <p>momai.pyth@gmail.com</p>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>© Copyright 2023 by Alexandra R.</p>
            </div>
        </div>
    )
};

export default Footer;