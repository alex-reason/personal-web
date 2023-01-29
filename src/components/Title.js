const Title = ({ children, direction }) => {
    const finalClassName = direction === 'right' ? 'title title-right' : 'title';
    return (
        <div className='title__container'>
            <div className='title__margin'></div>

            <div className={finalClassName}>{children}</div>
        </div>
    )
};

export default Title;