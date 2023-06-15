import React from "react";

// class DisplayInfor extends React.Component {
//     state = {
//         isShowListUser: true
//     }




//     render() {
//         const { listUser } = this.props;

//         return (
//             <div className="display-infor-container">

//                 {this.state.isShowListUser &&
//                     <>
//                         {listUser.map((user) => {

//                             return (

//                                 <div key={user.id} className={user.age < 18 ? "red" : "green"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     <hr />

//                                 </div>
//                             )



//                         })}


//                     </>
//                 }
//             </div>

//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props;
    return (
        <div className="display-infor-container">

            {true &&
                <>
                    {listUser.map((user) => {

                        return (

                            <div key={user.id} className={user.age < 18 ? "red" : "green"}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                <hr />

                            </div>
                        )

                    })}


                </>
            }
        </div>

    )

}

export default DisplayInfor;