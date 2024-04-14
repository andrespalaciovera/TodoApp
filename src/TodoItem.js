import "./styles/TodoItem.css"

function TodoItem({text, completed, children, priority, className}) {
    return(
      <li className={`${className}`}>
        <div className={`item-list important-urgent ${priority}`}>
          <input type="checkbox" name="item" value="Done"></input>
          <p>{text}</p>
          {children}
        </div>
      </li>
    );
}

export {TodoItem};