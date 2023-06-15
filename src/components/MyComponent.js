import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import "./DisplayInfor.scss";
import logo from "./../logo.svg"
// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: '1', name: 'Josie', age: '16', address: 'hcm' },
//       { id: '2', name: 'Thiên Hương', age: '21', address: 'st' },
//       { id: '3', name: 'Max', age: '21', address: 'st' }
//     ]
//   }

//   handleAddNewUser = (userObj) => {
//     // let listUserNew = this.state.listUser;
//     // listUserNew.unshift(userObj);
//     // this.setState({
//     //   listUser: listUserNew
//     // })

//     this.setState({
//       listUser: [userObj, ...this.state.listUser]
//     })
//   }

//   handleDeleteUser = (userID) => {
//     let listUserClone = this.state.listUser;
//     listUserClone = listUserClone.filter(item => item.id !== userID);
//     this.setState({
//       listUser: listUserClone
//     })
//   }
//   //JXS
//   render() {

//     return (
//       <>
//         <div className="a">
//           <AddUserInfor
//             handleAddNewUser={this.handleAddNewUser}
//           />
//           <br />
//           {/* <img src={logo} /> */}
//           <DisplayInfor listUser={this.state.listUser}
//             handleDeleteUser={this.handleDeleteUser}

//           />
//         </div>
//         <div className="b">

//         </div>
//       </>
//     );
//   }
// }

const MyComponent = () => {

  const [listUsers, setListUser] = useState([
    { id: '1', name: 'Josie', age: '16', address: 'hcm' },
    { id: '2', name: 'Thiên Hương', age: '21', address: 'st' },
    { id: '3', name: 'Max', age: '21', address: 'st' }
  ])

  const handleAddNewUser = (userObj) => {

    setListUser([userObj, ...listUsers])
  }

  const handleDeleteUser = (userID) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter(item => item.id !== userID);
    setListUser(listUserClone)
  }

  return (
    <>
      <div className="a">
        <AddUserInfor
          handleAddNewUser={handleAddNewUser}
        />
        <br />
        {/* <img src={logo} /> */}
        <DisplayInfor listUser={listUsers}
          handleDeleteUser={handleDeleteUser}

        />
      </div>
      <div className="b">

      </div>
    </>
  );
}
export default MyComponent;
