import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h3>asdasd</h3>
        <ul>
          <li>
            <a href="#">asdads</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
//<div><h1>wasaa</h1></div>
//React.createElement("h2", {}, "hello world")
//React.createElement("div",{},React.createElement("h2", {}, "hello world")
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
