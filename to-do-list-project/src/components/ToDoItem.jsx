function ToDoItem({
  addItemtoList,
  editingItem,
  setEditingItem,
  isEditing,
  udpateItemList,
  setDisplayToDoItem,
  setIsEditing,
}) {
  const sendItem = (e) => {
    e.preventDefault();
    if (isEditing) {
      udpateItemList(
        editingItem.itemID,
        editingItem.title,
        editingItem.description,
        editingItem.status,
        editingItem.assignee,
        editingItem.duedate
      );
      setIsEditing(false);
      setDisplayToDoItem(false);
    } else {
      addItemtoList(
        editingItem.title,
        editingItem.description,
        editingItem.status,
        editingItem.assignee,
        editingItem.duedate
      );
    }
  };
  const cancelTask = () => {
    addItemtoList("", "", "", "", "");
  };

  return (
    <>
      <form onSubmit={sendItem}>
        <div className="newTaskItem">
          <div className="newTaskItemRow">
            <label for="txtTitle">
              Title<super>*</super>
            </label>
            <input
              className="taskItemControl"
              type="text"
              id="txtTitle"
              value={editingItem?.title}
              onChange={(e) => {
                setEditingItem({ ...editingItem, title: e.target.value });
              }}
              required
            ></input>
          </div>
          <div className="newTaskItemRow">
            <label for="txtDesc">Description</label>
            {/* <input type="text" id="txtDesc" value={description} onChange={(e)=>setDescription(e.target.value)}></input> */}
            <textarea
              className="taskItemControl"
              id="txtDesc"
              value={editingItem?.description}
              onChange={(e) =>
                setEditingItem({ ...editingItem, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="newTaskItemRow">
            <label for="ddlStatus">Status<super>*</super></label>
            <select
              className="taskItemControl"
              id="ddlStatus" required
              value={editingItem?.status}
              onChange={(e) =>
                setEditingItem({ ...editingItem, status: e.target.value })
              }
            >
              <option value=""></option>
              <option value="New">New</option>
              <option value="In progress">In progress</option>
              <option value="Completed">Completed</option>
              <option value="Review">Review</option>
            </select>
          </div>
          <div className="newTaskItemRow">
            <label for="ddlAssignee">
              Assigned to<super>*</super>
            </label>
            <select
              className="taskItemControl"
              id="ddlAssignee"
              value={editingItem?.assignee}
              onChange={(e) =>
                setEditingItem({ ...editingItem, assignee: e.target.value })
              }
              required
            >
              <option value=""></option>
              <option value="Venkata">Venkata</option>
              <option value="Wenting">Wenting</option>
              <option value="Jon">Jon</option>
              <option value="Samuel">Samuel</option>
            </select>
          </div>
          <div className="newTaskItemRow">
            <label for="dueDate">
              Due Date<super>*</super>
            </label>
            <input
              type="date"
              id="duedate"
              min={new Date().toJSON().slice(0, 10)}
              value={editingItem?.duedate}
              onChange={(e) =>
                setEditingItem({ ...editingItem, duedate: e.target.value })
              }
              required
            ></input>
          </div>
          <div className="newTaskItemRow">
            <input
              className="btnSave"
              type="submit"
              value={isEditing ? "Save" : "Submit"}
            />
            &nbsp;&nbsp;
            <button className="btnCancel" type="button" onClick={cancelTask}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ToDoItem;
