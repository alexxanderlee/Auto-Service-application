import './Button.sass';

function Button({ children, onClickAction }) {
    return (
        <button onClick={onClickAction} className="btn">
            <span className="btn_text">{children}</span>
        </button>
    );
}

export default Button;