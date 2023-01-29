const PortfolioShow = ({ data }) => {
    const renderedPortfolio = data.map(item => {
        return (
            <div className='portfolio-show__item reveal' key={item.id}>
                <div className='portfolio-show__img'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='portfolio-show__details'>
                    <a href={item.url} target='__blank'><h1 className='heading-link'>{item.title}</h1></a>
                    <p>{item.detail}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='portfolio-show'>
            {renderedPortfolio}
        </div>
    )
};

export default PortfolioShow;