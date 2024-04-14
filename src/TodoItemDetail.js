import "./styles/TodoItemDetail.css";

function TodoItemDetail({className, completed}) {
    return(
        <div className={`detail-task display-none ${className}`}>
            <span className="close">X</span>
            <span>
                <input type="checkbox" name="item" value="Done"></input>
                <h4>Done</h4>
            </span>
            <div>
                <h4 className = {className}>Urgent</h4>
                <h4 className = {className}>Important</h4>
            </div>
        </div>
    );
}

export {TodoItemDetail};