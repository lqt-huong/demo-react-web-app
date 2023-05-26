import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUser:[
      {id:'1', name: 'Josie', age: '20', address: 'hcm'},
      {id: '2', name: 'Thiên Hương', age:'21', address: 'st' }
    ]
  }
  //JXS
  render() {

    return (
      <div>
        <UserInfor/>
        <br/>
        <hr/>
        <DisplayInfor listUser={this.state.listUser}/>
      </div>
    );
  }
}
export default MyComponent;
