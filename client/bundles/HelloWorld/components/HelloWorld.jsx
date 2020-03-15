import PropTypes from 'prop-types';
import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name, age: this.props.age };
  }

  updateName = (age) => {
    this.setState({ name });
  };

  updateAge = (age) => {
    this.setState({ age });
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}! You're {this.state.age} years old.
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
          <input
            id="age"
            type="text"
            value={this.state.age}
            onChange={(e) => this.updateAge(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
