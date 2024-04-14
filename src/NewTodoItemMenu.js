import "./styles/NewTodoItemMenu.css";

function NewTodoItemMenu({className}){
    return(
        <div className="menu-wrapper">
            <div className="menu">
            <input type="text" placeholder="Task Name"/>
            <div className="inner-container">
                <div className="most-inner-container">
                    <span>
                        <input type="checkbox" id="impotant" />
                        <label htmlFor="impotant">Important</label>
                    </span>
                    <span>
                        <input type="checkbox" id="urgent" />
                        <label htmlFor="urgent">Urgent</label>
                    </span>
                </div>
                <button>V</button>
            </div>
            </div>
        </div>
    )
}

export {NewTodoItemMenu}