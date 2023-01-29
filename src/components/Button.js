import className from 'classnames';

const Button = ({children, normal, filled, ...rest}) => {
    const buttonType = className(rest.className, 'button', {
        'button--normal': normal,
        'button--filled': filled
    });
    
    return (
        <button {...rest} className={buttonType}>{children}</button>
    );
};

// optional check to see if only one type of button is true at a time
Button.propTypes = {
    checkVariation: ({ normal, filled }) => {
        const count = Number(!!normal)
            + Number(!!filled)

        if (count > 1) {
            return new Error('only one among normal and filled could be true');
        };
    }
};

export default Button;