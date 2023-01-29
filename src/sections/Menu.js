const Menu = ({ menuItems }) => {
    const renderedMenu = menuItems.map(item => {
        return (
            <a className='menu__sub heading-link' href={item.href} key={item.label}>
                {item.label}
            </a>
        )
    });

    return (
        <div className='menu'>
            <a className='menu__main heading-link' href='#home' key='home'>Alexandra</a>
            <div>
                {renderedMenu}
            </div>
        </div>
    )
};

export default Menu;