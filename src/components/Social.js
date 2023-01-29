const Social = ({data}) => {
    const renderedSocial = data.map(social => {
        return (
            <a href={social.url} target='__blank' className=''>
                <div className='social__icon heading-link'>{social.icon}</div>
            </a>    
        )
    })

    return (
        <div className='social'>
            {renderedSocial}   
        </div>
    )
};

export default Social;