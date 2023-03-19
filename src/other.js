import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <>
      <div className="some">
        {/*<h3>Diego</h3>*/}
        <Person />
        <ul>
          <li>{<Person /> /*<a href="#">asdads</a>*/}</li>
          <li>
            <Message />
          </li>
        </ul>
      </div>
      <input type="text" name="" id="" />
    </>
  );
}

const Person = () => <h3>asdasd</h3>;
const Message = () => {
  return <a href="#">asdads</a>;
};

//<div><h1>wasaa</h1></div>
//React.createElement("h2", {}, "hello world")
//React.createElement("div",{},React.createElement("h2", {}, "hello world")
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<Greeting />);
