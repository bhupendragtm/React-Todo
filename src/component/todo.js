import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
// import * as FaBeer from "react-icons/fa";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updateditems);
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
            <figcaption>Add Your List Here !</figcaption>
          </figure>

          <div class="addItems">
            <input
              type="text"
              placeholder="Add Items ..."
              vlaue={inputData}
              onChange={(e) => setInputData(e.target.value)}
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
            {items.map((elem, index) => {
              return (
                <div class="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <button title="Delete Item" onClick={() => deleteItem(index)}>
                    {" "}
                    Delete{" "}
                  </button>
                </div>
              );
            })}
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
