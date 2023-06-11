
import React from 'react';

class AddUserInfor extends React.Component {
  state = {
    name: "Josie",
    address: "hcm",
    age: 21,
  };
  handleClick = (event) => {
    console.log(">>>Click me my button");
    console.log("My name is", this.state.name);
    this.setState({
      name: "Thiên Hương",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleMouseOver(event) {
    console.log(event);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }
  handleOnsubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor((Math.random() * 100) + 1) + '-random',
      name: this.state.name,
      age: this.state.age
    });

  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnsubmit(event)}>
          <label>Your name:</label>
          <input type="text" onChange={(event) => this.handleOnChangeInput(event)} />

          <br />
          <label>Your age:</label>
          <input type="text" onChange={(event) => this.handleOnChangeAge(event)} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddUserInfor;