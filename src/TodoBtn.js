import "./styles/TodoBtn.css";

function TodoBtn({className}) {
    return(
        <button className={`add  ${className}`}></button>
    );
}

export {TodoBtn};