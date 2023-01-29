import Button from '../components/Button';
import mirror from '../assets/mirror.png';

const Landing = () => {
    return (
        <div id='home' className='landing'>
            <div className='landing__item landing__description'>
                <h1>Creativity, Curiosity, Consistency. </h1>
                <p>
                    Looking for front-end web development or non-profit work. I welcome the opportunity to use my React and website development skills.
                </p>
                <Button filled><a href='#footer'>Reach out</a></Button>
            </div>

            <div className='landing__item landing__image'>
                <img src={mirror} alt='landing-flower' />
                <div className='shadow'></div>
            </div>
        </div>
    )
};

export default Landing;