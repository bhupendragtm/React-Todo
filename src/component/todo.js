import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import logo from "../logo.svg";
import "../App.css";
import axios from "axios";

// import * as FaBeer from "react-icons/fa";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [change, setChange] = useState(false);

  const addItem = (e) => {
    e.preventDefault(title);
    // if (!title) return "No Data";

    axios
      .post("http://localhost:8001/todos", {
        title,
      })
      .then((response) => {
        toast(`You have Toasted Title: '${title}'`);
        // window.location.reload(false);
        // window.location.replace;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8001/todos")
      .then((response) => {
        console.log(response);
        setItems(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [change]);

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:8001/todos/${id}`)
      .then((response) => {
        console.log(response);
        // window.location.reload(false);
        toast(`You Deleted id No: '${id}'`, {
          position: toast.POSITION.TOP_LEFT,
        });
        setChange(true);
      })
      .catch((error) => {
        console.log(error);
        const updateditems = items.filter((elem, index) => {
          return index !== id;
        });
        items(updateditems);
      });

    // console.log(id);
    // const updateditems = items.filter((elem, index) => {
    //   return index !== id;
    // });
    // setItems(updateditems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div class="App-header">
        <div class="logo-spin">
          <figure class="header">
            <img class="logo" src={logo} alt="logo" />
            <figcaption>Add Your List Here </figcaption>
          </figure>

          <div class="addItems">
            <input
              type="text"
              default="Add Items ..."
              vlaue={title}
              onChange={(e) => setTitle(e.target.value)}
              // onChange={(e) => setTitle(e.target.value)}
            />
            <button title="Add Item" onClick={addItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z" />
              </svg>
            </button>
          </div>

          <div class="showItems">
            {/* {items.map((elem, index) => {
              return (
                <div class="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <button title="Delete Item" onClick={() => deleteItem(index)}>
                    {" "}
                    Delete{" "}
                  </button>
                </div>
              );
            })} */}
            {items.map((item) => (
              <div class="eachItem">
                <h3>{item.title}</h3>
                <button title="Delete Item" onClick={() => deleteItem(item.id)}>
                  {" "}
                  Delete{" "}
                </button>
              </div>
            ))}
            <div class="eachItem">
              <h3>Apple</h3>
              <button title="Delete Item"> Delete </button>
            </div>
          </div>

          <div class="removeItems">
            <button
              class="clearButton"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>REMOVE ALL</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
