import "./styles/TodoItemDetail.css";

function TodoItemDetail({className, completed}) {
    return(
        <div className="detail-task">
            <input type="checkbox" name="item" value="Done"></input>
            <div>
                <p className = {className}>Urgent</p>
                <p className = {className}>Important</p>
            </div>
            <span>X</span>
        </div>
    );
}

export {TodoItemDetail};