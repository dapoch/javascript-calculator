function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",









    e => {
      const { currentNumber, calc } = this.state;

      this.setState({
        currentNumber: currentNumber === "0" ? e.target.innerText : currentNumber + e.target.innerText,
        calc: calc + e.target.innerText });

    });_defineProperty(this, "handleDecimal",

    e => {
      const { currentNumber, calc } = this.state;
      this.setState({
        currentNumber: !currentNumber.includes(".") ? currentNumber + e.target.innerText : currentNumber,
        calc: calc + e.target.innerText });

    });_defineProperty(this, "handleOperation",

    e => {
      const { currentNumber, calc } = this.state;
      let lastPressed = calc.slice(-1);
      let prevLast = calc.slice(-2, -1);

      if ((lastPressed.includes("+") || lastPressed.includes("*") || lastPressed.includes("/") || lastPressed.includes("-")) && (prevLast.includes("+") || prevLast.includes("*") || prevLast.includes("/") || prevLast.includes("-"))) {
        this.setState({
          currentNumber: "0",
          calc: calc.slice(0, -2) + e.target.name });

      } else if (lastPressed.includes("+") || lastPressed.includes("*") || lastPressed.includes("/") || lastPressed.includes("-")) {
        this.setState({
          currentNumber: "0",
          calc: calc.slice(0, -1) + e.target.name });

      } else {
        this.setState({
          currentNumber: "0",
          calc: "(" + calc + ")" + e.target.name });

      }
    });_defineProperty(this, "handleMinus",

    e => {
      const { currentNumber, calc } = this.state;
      this.setState({
        currentNumber: "0",
        calc: calc.slice(-1) === "-" ? calc : calc + e.target.name });

    });_defineProperty(this, "handleEqual",

    e => {
      const { currentNumber, calc } = this.state;
      this.setState({
        currentNumber: eval(calc) });

    });_defineProperty(this, "handleClear",

    () => {
      this.setState({
        currentNumber: "0",
        calc: "" });


    });this.state = { currentNumber: "0", calc: "" };this.handleClick = this.handleClick.bind(this);this.handleClear = this.handleClear.bind(this);this.handleOperation = this.handleOperation.bind(this);}

  render() {
    return /*#__PURE__*/(

      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement("p", { style: { position: "absolute", top: 0 } }, JSON.stringify(this.state, null, 2)), /*#__PURE__*/

      React.createElement("div", { id: "display", className: "display" },

      this.state.currentNumber), /*#__PURE__*/

      React.createElement("button", { id: "clear", onClick: this.handleClear }, "AC"), /*#__PURE__*/
      React.createElement("button", { name: "/", id: "divide", onClick: this.handleOperation, className: "orange" }, "\xF7"), /*#__PURE__*/
      React.createElement("button", { name: "*", id: "multiply", onClick: this.handleOperation, className: "orange" }, "\xD7"), /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: this.handleClick }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: this.handleClick }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: this.handleClick }, "3"), /*#__PURE__*/
      React.createElement("button", { name: "+", id: "add", onClick: this.handleOperation, className: "orange" }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: this.handleClick }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: this.handleClick }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: this.handleClick }, "6"), /*#__PURE__*/
      React.createElement("button", { name: "-", id: "subtract", onClick: this.handleMinus, className: "orange" }, "\u2212"), /*#__PURE__*/
      React.createElement("button", { id: "seven", onClick: this.handleClick }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: this.handleClick }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: this.handleClick }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: this.handleClick }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", onClick: this.handleDecimal }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.handleEqual }, "=")));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));