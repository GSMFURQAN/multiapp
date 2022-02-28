import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <div className="card-group">
        <Link
          className={`nav-link card  mx-3 bg-${props.mode} `}
          id="gradient-border"
          to="/Textform"
        >
          <img
            src="notepad.png"
            width="60"
            height="220"
            className="card-img-top px-5"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Text Utility</h5>
            <p className="card-text">
              Convert your text to Small case or Upper case with one click and
              Remove Extra spaces from the lines
            </p>
          </div>
        </Link>

        <Link
          className={`nav-link card  mx-3 bg-${props.mode} `}
          id="gradient-border"
          to="/Calculator">
          <img
            src="calculator.png"
            width="60"
            height="220"
            className="card-img-top px-5"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Calculator &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </h5>
            <p className="card-text">
                Yep! A simple calculator</p>
          </div>
        </Link>
        <Link
          className={`nav-link card  mx-3 bg-${props.mode} `}
          to="/TodoList"
          id="gradient-border"
        >
          <img
            src="todo.png"
            width="60"
            height="220"
            className="card-img-top px-5"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Todo &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h5>
            <p className="card-text">Create, Edit and Delete your todo lists</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
