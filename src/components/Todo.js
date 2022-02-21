import React, { useState } from "react";
import { addtodo, deletetodo, removetodo } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import "./todo.css";

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoreducer.list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputdata}
              onChange={(event) => setinputdata(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => dispatch(addtodo(inputdata), setinputdata(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((ele) => (
              <div className="eachItem" key={ele.id}>
                <h3>{ele.data}</h3>

                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => dispatch(deletetodo(ele.id))}
                >
                  
                </i>
              </div>
            ))}
          </div>

          <div className="showItems">
            <button
              className="btn "
              data-sm-link-text="Remove All"
              onClick={() => dispatch(removetodo())}
            >
              <span> REMOVE ALL</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
