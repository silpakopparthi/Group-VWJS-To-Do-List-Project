import { useState } from "react";
function ToDoItem({ addItemtoList }){
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [status, setStatus] = useState("New");
const [assignee, setAssignee] = useState("");
const [duedate, setDuedate] = useState();
    const sendItem = (e)=>{
        e.preventDefault();
        addItemtoList(title, description, status,assignee,duedate);
    }
    const cancelTask = ()=>{
        addItemtoList("","","","","");
    }
    
    return(
    <>
    <form onSubmit={sendItem}>
    <div className="newTaskItem">
        <div className="newTaskItemRow">
        <label for="txtTitle">Title<super>*</super></label>
        <input className="taskItemControl" type="text" id="txtTitle" value={title} onChange={(e)=> setTitle(e.target.value)} required></input>
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
        <label for="ddlAssignee">Assigned to<super>*</super></label>
        <select className="taskItemControl" id="ddlAssignee" onChange={(e)=>setAssignee(e.target.value)} required>
            <option value=""></option>
            <option value="Venkata">Venkata</option>
            <option value="Wenting">Wenting</option>
            <option value="Jon">Jon</option>
            <option value="Samuel">Samuel</option>
        </select>
        </div>
        <div className="newTaskItemRow">
        <label for="dueDate">Due Date<super>*</super></label>
        <input type="date" id="duedate" min={new Date().toJSON().slice(0, 10)} value = {duedate} onChange={(e)=>setDuedate(e.target.value)} required></input>
        </div>
        <div className="newTaskItemRow">
        <input className="btnSave" type="submit"></input>
        &nbsp;&nbsp;
        <button className="btnCancel" type="button" onClick={cancelTask}>Cancel</button>
        </div>
    </div>
    </form>
    </>
    )
}

export default ToDoItem;