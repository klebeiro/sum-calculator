import React from 'react';

class SumCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "0",
      num2: "0",
      sum: 0,
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const num1 = parseInt(this.state.num1);
    const num2 = parseInt(this.state.num2);
    if (isNaN(num1) || isNaN(num2)) {
      this.setState({ error: "Please enter a valid number" });
    } else {
      this.setState({ sum: num1 + num2, error: "" });
    }
  }

  render() {
    return (
      <section>
        <h1>{process.env.REACT_APP_TITLE || "Title .env placeholder"}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.handleChange}
          />
          <button type="submit">+</button>
          <p>{this.state.sum}</p>
          {this.state.error && <p className="error">{this.state.error}</p>}
        </form>
      </section>
    );
  }
}

export default SumCalculator;