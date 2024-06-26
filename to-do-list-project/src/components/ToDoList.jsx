import ToDoItem from "./ToDoItem";

function ToDoList({
  listItems,
  ondeleteItemFromList,
  onsortItems,
  setDisplayToDoItem,
  setEditingItem,
  setIsEditing,
}) {
  const editTask = (listItem) => {
    setEditingItem(listItem);
    setDisplayToDoItem(true);
    setIsEditing(true);
  };
  const viewTask = (listItem) => {
    setEditingItem(listItem);
    setDisplayToDoItem(true);
 };
  const deleteItem = (e) => {
    ondeleteItemFromList(e.currentTarget.dataset.itemindex);
  };
  const sortItems = (e) => {
    onsortItems(e.currentTarget.dataset.sortdirection);
  };

  const displaySidePanel = (e) => {
    console.log(e.target.dataset.itemid);
  };

  return (
    <>
    <div className="systemview">
      <div className="listItemsTable">
        <div className="listHeader">
          <span>ID</span>
          <span>Title</span>
          <span>Description</span>
          <span>Assigned to</span>
          <span>Due date</span>
          <span>
            Status{" "}
            <button
              className="sort-button"
              data-sortdirection="asc"
              onClick={sortItems}
            >
              <i className="fa fa-sort-asc"></i>
            </button>
            <button
              className="sort-button"
              data-sortdirection="desc"
              onClick={sortItems}
            >
              <i className="fa fa-sort-desc"></i>
            </button>
          </span>
          <span></span>
          <span></span>
        </div>
        {listItems.map((listItem, index) => {
          return (
            <div className="ListItems" key={index}>
              <span>{listItem.itemID}</span>
              <span>{listItem.title}</span>
              <span>{listItem.description}</span>
              <span>{listItem.assignee}</span>
              <span>{listItem.duedate}</span>
              <span>{listItem.status}</span>
              <span>
                <button
                  id="btnDelete"
                  data-itemid={listItem.itemID}
                  data-itemindex={index}
                  onClick={deleteItem}
                >
                  <i class="fa fa-trash-o"></i>
                </button>
              </span>
              <span>
                <button
                  id="btnEdit"
                  data-taskid={index}
                  onClick={() => {
                    editTask(listItem);
                  }}
                >
                  <i class="fa fa-edit"></i>
                </button>
              </span>
            </div>
          );
        })}
      </div>
      
      </div>
      <div className="mobileview">
      <div className="listItemsTable">
        <div className="listHeader">
          <span>Title</span>
          <span>Assignee</span>
          <span>
            Status{" "}
            <button
              className="sort-button"
              data-sortdirection="asc"
              onClick={sortItems}
            >
              <i className="fa fa-sort-asc"></i>
            </button>
            <button
              className="sort-button"
              data-sortdirection="desc"
              onClick={sortItems}
            >
              <i className="fa fa-sort-desc"></i>
            </button>
          </span>
          <span></span>
          <span></span>
        </div>
        {listItems.map((listItem, index) => {
          return (
            <div className="ListItems" key={index}>
              <span><a href="#" onClick={() => {
                  viewTask(listItem);
                }}>{listItem.title}</a></span>
              <span>{listItem.assignee}</span>
              <span>{listItem.status}</span>
              <span>
                <button
                  id="btnDelete"
                  data-itemid={listItem.itemID}
                  data-itemindex={index}
                  onClick={deleteItem}
                >
                  <i class="fa fa-trash-o"></i>
                </button>
              </span>
              <span>
                <button
                  id="btnEdit"
                  data-taskid={index}
                  onClick={() => {
                    editTask(listItem);
                  }}
                >
                  <i class="fa fa-edit"></i>
                </button>
              </span>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default ToDoList;
