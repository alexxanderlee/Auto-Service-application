import './Button.sass';

function Button({ children, onClickAction, type = 'button' }) {
    return (
        <button onClick={onClickAction} type={type} className="btn">
            <span className="btn_text">{children}</span>
        </button>
    );
}

export default Button;