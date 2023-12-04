import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return(
        <h1>
            ¡Great! you have completed {completed} of {total} tasks
        </h1>
    );
}

export {TodoCounter};