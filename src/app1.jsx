import './index.css';
export function Displaytodo({todolist,deleteHandler}){

    return(
        <>
        <div>
            {todolist.map((todo, index) => (
                      <div key={index} className="todo-card">
                      <span className="todo-text">{todo}</span>
                      <button className="delete-btn" onClick={() => deleteHandler(index)}>delete</button></div>
                ))}
        </div>
        </>
    )
}