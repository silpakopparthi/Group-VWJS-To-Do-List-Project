import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
import Header from "./header";
import Info from "./Info";
//Parent component that hosts ToDoItem and ToDoList child components
function ToDoPage() {
  const [displayToDoItem, setDisplayToDoItem] = useState(false);
  //Array of tasks
  const [listItems, setlistItems] = useState([]);
  // Current editing item
  const [editingItem, setEditingItem] = useState({});
  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  //Flag to hold if the add new item button has to be shown
  const [showAddNewItemButton, setshowAddNewItemButton] = useState(true);
  //Defines navigation page
  const [navigatetoPage, setnavigatetoPage] = useState("home");
  //Holds info data
  //Function called from the child object to add a new item to the litsitems array
  const addItemtoList = (title, description, status, assignee, duedate) => {
    setDisplayToDoItem(false);
    //Display the add button again when a new item is added
    setshowAddNewItemButton(true);
    if (title !== "") {
      let itemObj = {
        itemID: Math.floor(Math.random() * 1000),
        title: title,
        description: description,
        status: status,
        assignee: assignee,
        duedate: duedate,
      };
      setlistItems([...listItems, itemObj]);
    }
  };

  const udpateItemList = (
    itemID,
    title,
    description,
    status,
    assignee,
    duedate
  ) => {
    setshowAddNewItemButton(true);
    const newItemList = listItems.map((item) => {
      if (item.itemID === itemID) {
        item.title = title;
        item.description = description;
        item.status = status;
        item.assignee = assignee;
        item.duedate = duedate;
      }
      return item;
    });
    setlistItems(newItemList);
  };

  //Remove deleted item from the listitems array
  const deleteItemFromList = (index) => {
    listItems.splice(index, 1);
    setlistItems([...listItems]);
  };

  //Sort listitems array based on status
  const sortItems = (sortdirection) => {
    if (sortdirection === "asc") {
      listItems.sort((a, b) => a.status.localeCompare(b.status));
    }
    if (sortdirection === "desc") {
      listItems.sort((a, b) => b.status.localeCompare(a.status));
    }
    setlistItems([...listItems]);
  };

  //Function that is called when the Add new item button is clicked
  const showToDoItem = (e) => {
    setEditingItem({});
    //Displays the form to add a new item
    setDisplayToDoItem(true);
    //Hides add new item button
    setshowAddNewItemButton(!showAddNewItemButton);
  };
  const navigatePage = (page) => {
    setnavigatetoPage(page);
  }

  return (
    <>
      <Header navigatePage={navigatePage} />
      <div className="todoPage">
        {navigatetoPage === "info" && (<Info />)}
        {/* Display add new item button if the showAddNewItemButton flag is true */}
        {navigatetoPage === "home" && showAddNewItemButton === true && (
          <button className="btnAddnewtask" onClick={showToDoItem}>
            Add New Task
          </button>
        )}
        {/* Display the add new item component to add a new item if the flag displayToDoItem is true */}
        {navigatetoPage === "home" && displayToDoItem === true && (
          <ToDoItem
            editingItem={editingItem}
            setEditingItem={setEditingItem}
            addItemtoList={addItemtoList}
            isEditing={isEditing}
            udpateItemList={udpateItemList}
            setDisplayToDoItem={setDisplayToDoItem}
            setIsEditing={setIsEditing}
          />
        )}
        {navigatetoPage === "home" && <ToDoList
          listItems={listItems}
          ondeleteItemFromList={deleteItemFromList}
          onsortItems={sortItems}
          setDisplayToDoItem={setDisplayToDoItem}
          setEditingItem={setEditingItem}
          setIsEditing={setIsEditing}
        />}
      </div>
    </>
  );
}
export default ToDoPage;
