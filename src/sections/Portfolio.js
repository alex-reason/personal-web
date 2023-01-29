import PortfolioShow from '../components/PortfolioShow';
import Title from '../components/Title';
import { portfolioData } from '../assets/data';

const Portfolio = () => {
    return (
        <div id='portfolio' className='section portfolio'>
            <Title  direction='right'>Portfolio</Title>
            <PortfolioShow data={portfolioData} />
        </div>
    )
};

export default Portfolio;