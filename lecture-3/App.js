// Introduction to JSX
import React from "react";
import ReactDOM from "react-dom/client";

//Not developer Friendly, instead use JSX
const htmlHeading = React.createElement(
  "h1",
  { id: "htmlHeading" },
  "Namaste React"
);
// console.log(heading);

//---------------------------------------------- JSX - HTML-like Syntax ---------------------------------------------------
// const jsxHeading = <h1 id="heading">Namaste React</h1>;
//Normal React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React : Normal React Element
  </h1>
);

//--------------------------------------------------- React Component ---------------------------------------------------
//React Functional Component

//Component without return statement
const fn1 = () => true;

//Component With return statement
const fn2 = () => {
  return true;
};

//Component using Arrow Function
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

//Component using Normal  Function
const Title2 = function () {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
  );
};

//Normal React Element -> Not a Component

const element1 = <span>--React Element in Span--</span>;

const element2 = (
  <h1 className="head" tabIndex="5">
    {element1}
    Normal React Element (Not a Component)
  </h1>
);

const number = 10000;

//Component Composition - one compoenent another
const HeadingComponent = () => (
  <div id="container">
    <Title></Title>
    <Title />
    {Title()}
    <h2>{"javaScript inside JSX : " + number}</h2>
    {element2}
    <h1 className="heading" tabIndex="1">
      Namaste React : Functional Component
    </h1>
  </div>
);

// const HeadingComponent2 = () => {
//   <h1 className="heading" tabIndex="1">
//     Namaste React Functional Component
//   </h1>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);       // To renderReact Component
root.render(<HeadingComponent />); // To REnder Functional Compoenent
