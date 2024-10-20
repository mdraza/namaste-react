const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { className: "txt" }, "Hello world from React!"),
    React.createElement("h2", { className: "txt2" }, "Hello world from React!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { className: "txt" }, "Hello world from React!2"),
    React.createElement(
      "h2",
      { className: "txt2" },
      "Hello world from React!2"
    ),
  ]),
]);

console.log(parent); // return Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
