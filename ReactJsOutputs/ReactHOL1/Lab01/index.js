// 1. ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById("root"));

// 2.a. ReactDOM.render(<p>Hi, my name is Mahesh</p>, document.getElementById("root"));

// 2.b. Yes, we can use querySelector() instead of getElementById()
// ReactDOM.render(<p>Hi, my name is Mahesh</p>, document.querySelector("#root"));

// 3.
ReactDOM.render(
  <div>
    <h1>React Features</h1>
    <ul>
      <li>JSX</li>
      <li>Compoinents</li>
      <li>Virtual DOM</li>
      <li>Simplicity</li>
      <li>Performance</li>
    </ul>
  </div>,
  document.getElementById("root")
);
