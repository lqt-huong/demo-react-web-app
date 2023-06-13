import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })

    }

    render() {
        const { listUser } = this.props;

        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}</span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUser.map((user) => {

                            return (

                                <div key={user.id} className={user.age < 18 ? "red" : "green"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                    <hr />

                                </div>
                            )



                        })}


                    </>
                }
            </div>

        )
    }
}

export default DisplayInfor;