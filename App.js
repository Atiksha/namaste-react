/**
 *  <div id="parent">
        <div id="child1">
            <h1> heading h1</h1>
            <h2> heading h2</h2>
        </div>
        <div id="child2">
            <h1> heading h1</h1>
            <h2> heading h2</h2>
        </div>
    </div>
 */

const heading1 = React.createElement(
  "h1",
  { id: "heading", xvz: "abc" },
  "Hello World from React!!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "In h1 tag"),
    React.createElement("h2", {}, "In h2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "In h1 tag"),
    React.createElement("h2", {}, "In h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading1);
root.render(parent);
