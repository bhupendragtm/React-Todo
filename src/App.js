import React from "react";
import Todo from "./component/todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Todo />
    </>
  );
}

export default App;
