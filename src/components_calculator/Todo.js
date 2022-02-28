import React, {useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

export default function Todo() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnChange = (event) => {
    //without onChange text becomes readonly. inorder to edit text in application, OnChange is must
    setResult(event.target.value);
  };

  const concat = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const remove = () => {
    setResult(result.slice(0, -1));
  };

  const validate = () => {
    setResult(eval(result));
  };

  return (
    <div>
     

      <div
        className="container mt-4 border border-primary"
        style={{ width: 35 + "%", backgroundColor: "cyan" }}
      >
        <div className="input-group  mb-3 ">
          <input
            type="text"
            value={result}
            onChange={handleOnChange}
            ref={inputRef}
            className="form-control-lg my-2"
            style={{ width: 100 + "%" }}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="container">
          <div className="row my-1 ">
            <button
              onClick={clear}
              id="clear"
              className="btn btn-outline-danger col-6 mx-0.8 py-3 "
            >
              Clear
            </button>
            <button
              onClick={remove}
              id="backspace"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              &larr;
            </button>
            <button
              onClick={concat}
              name="+"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              +
            </button>
          </div>
          <div className="row my-1 ">
            <button
              onClick={concat}
              name="7"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              7
            </button>
            <button
              onClick={concat}
              name="8"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              8
            </button>
            <button
              onClick={concat}
              name="9"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              9
            </button>
            <button
              onClick={concat}
              name="-"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              -
            </button>
          </div>
          <div className="row my-1 ">
            <button
              onClick={concat}
              name="4"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              4
            </button>
            <button
              onClick={concat}
              name="5"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              5
            </button>
            <button
              onClick={concat}
              name="6"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              6
            </button>
            <button
              onClick={concat}
              name="*"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              &times;
            </button>
          </div>
          <div className="row my-1 ">
            <button
              onClick={concat}
              name="1"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              1
            </button>
            <button
              onClick={concat}
              name="2"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              2
            </button>
            <button
              onClick={concat}
              name="3"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              3
            </button>
            <button
              onClick={concat}
              name="/"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              /
            </button>
          </div>
          <div className="row my-1 ">
            <button
              onClick={concat}
              name="."
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              .
            </button>
            <button
              onClick={concat}
              name="0"
              className="btn btn-outline-primary col-3 mx-0.8 py-3"
            >
              0
            </button>
            <button
              onClick={validate}
              id="result"
              className="btn btn-outline-success col-6 mx-0.8 py-3"
            >
              Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
