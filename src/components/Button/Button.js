import css from './Button.module.css';

const Button = ({children, click, ...props}) => {
    return (
        <div className={css.Button} onClick={click} {...props}>
            {children}
        </div>
    );
};

export {Button};
