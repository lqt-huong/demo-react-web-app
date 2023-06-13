import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import "./DisplayInfor.scss";
import logo from "./../logo.svg"
class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: '1', name: 'Josie', age: '16', address: 'hcm' },
      { id: '2', name: 'Thiên Hương', age: '21', address: 'st' },
      { id: '3', name: 'Max', age: '21', address: 'st' }
    ]
  }

  handleAddNewUser = (userObj) => {
    // let listUserNew = this.state.listUser;
    // listUserNew.unshift(userObj);
    // this.setState({
    //   listUser: listUserNew
    // })

    this.setState({
      listUser: [userObj, ...this.state.listUser]
    })
  }
  //JXS
  render() {

    return (
      <>
        <div className="a">
          <AddUserInfor
            handleAddNewUser={this.handleAddNewUser}
          />
          <br />
          <img src={logo} />
          <DisplayInfor listUser={this.state.listUser}

          />
        </div>
        <div className="b">

        </div>
      </>
    );
  }
}
export default MyComponent;
