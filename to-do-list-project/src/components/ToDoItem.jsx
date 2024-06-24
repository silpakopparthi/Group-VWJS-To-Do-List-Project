import { useState } from "react";
function ToDoItem({ addItemtoList }){
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [status, setStatus] = useState("New");
const [assignee, setAssignee] = useState("");
const [duedate, setDuedate] = useState("currentDate");
    const sendItem = ()=>{
        addItemtoList(title, description, status,assignee,duedate);
    }
    const cancelTask = ()=>{
        addItemtoList("","","","","");
    }
    
    return(
    <>
    <div className="newTaskItem">
        <div className="newTaskItemRow">
        <label for="txtTitle">Title</label>
        <input className="taskItemControl" type="text" id="txtTitle" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
        </div>
        <div className="newTaskItemRow">
        <label for="txtDesc">Description</label>
        {/* <input type="text" id="txtDesc" value={description} onChange={(e)=>setDescription(e.target.value)}></input> */}
        <textarea className="taskItemControl" id="txtDesc" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        <div className="newTaskItemRow">
        <label for="ddlStatus">Status</label>
        <select className="taskItemControl" id="ddlStatus" onChange={(e)=>setStatus(e.target.value)}>
        <option value="New">New</option>
        <option value="In progress">In progress</option>
        <option value="Completed">Completed</option>
        <option value="Review">Review</option>
        </select>
        </div>
        <div className="newTaskItemRow">
        <label for="ddlAssignee">Assigned to</label>
        <select className="taskItemControl" id="ddlAssignee" onChange={(e)=>setAssignee(e.target.value)}>
            <option value=""></option>
            <option value="Venkata">Venkata</option>
            <option value="Wenting">Wenting</option>
            <option value="Jon">Jon</option>
            <option value="Samuel">Samuel</option>
        </select>
        </div>
        <div className="newTaskItemRow">
        <label for="dueDate">Due Date</label>
        <input type="date" id="duedate" value={duedate} onChange={(e)=> setDuedate(e.target.value)}></input>
        </div>
        <div className="newTaskItemRow">
        <button className="btnSave" type="button" onClick={sendItem}>Save</button>
        &nbsp;&nbsp;
        <button className="btnCancel" type="button" onClick={cancelTask}>Cancel</button>
        </div>
        {/* <button type="button" onClick={addItem}>Add</button> */}
        {/* <label for="txtTitle">Title</label>
        <input type="text"value=""></input> */}
    </div>
    </>
    )
}

export default ToDoItem;