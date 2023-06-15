
import React, { useState } from 'react';

// class AddUserInfor extends React.Component {
//   state = {
//     name: "Josie",
//     address: "hcm",
//     age: 21,
//   };
//   handleClick = (event) => {
//     console.log(">>>Click me my button");
//     console.log("My name is", this.state.name);
//     this.setState({
//       name: "Thiên Hương",
//       age: Math.floor(Math.random() * 100 + 1),
//     });
//   };
//   handleMouseOver(event) {
//     console.log(event);
//   }

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value
//     })
//   }

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value
//     })
//   }
//   handleOnsubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor((Math.random() * 100) + 1) + '-random',
//       name: this.state.name,
//       age: this.state.age
//     });

//   }

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnsubmit(event)}>
//           <label>Your name:</label>
//           <input type="text" onChange={(event) => this.handleOnChangeInput(event)} />

//           <br />
//           <label>Your age:</label>
//           <input type="text" onChange={(event) => this.handleOnChangeAge(event)} />
//           <br />
//           <button>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

const AddUserInfor = (props) => {
  // const [user, setUser] = useState({
  //   name: "",
  //   address: "hcm",
  //   age: '',
  // })
  const [name, setName] = useState('');
  const [address, setAddress] = useState('HCM');
  const [age, setAge] = useState('');

  const handleOnChangeAge = (event) => {
    setAge(event.target.value)
  }

  const handleOnsubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor((Math.random() * 100) + 1) + '-random',
      name: name,
      age: age
    });

  }
  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnsubmit(event)}>
        <label>Your name:</label>
        <input type="text" onChange={(event) => handleOnChangeInput(event)} />

        <br />
        <label>Your age:</label>
        <input type="text" onChange={(event) => handleOnChangeAge(event)} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddUserInfor;