import React, { useEffect, useState } from "react";

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
    const [isShowListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowListUser);
    }

    useEffect(() => {

        if (listUser.length === 0) {
            alert('You deleted all the users')
        }
        console.log(">> call me useEffect")
        setTimeout(() => {
            document.title =
                'Demo React'
        }, 3000)
    },
        [listUser]
    )

    useEffect(() => { },)

    console.log(">>> call me render")
    return (
        <div className="display-infor-container">
            <div><span onClick={() => handleShowHideListUser()}>
                {isShowListUser === true ? "Hide list users" : "Show list users"}
            </span></div>
            {isShowListUser &&
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