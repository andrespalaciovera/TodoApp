import "./styles/TodoList.css";

function TodoList(props) {
    return(
        <ul className="todo-list-container">
            {props.children}
        </ul>
    );
}

export {TodoList};