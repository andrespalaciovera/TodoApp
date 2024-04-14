import "./styles/Container.css";

function Container({children, className}){
    return(
        <div className={`position-absolute ${className}`}>
            {children}
        </div>
    )
}

export {Container}