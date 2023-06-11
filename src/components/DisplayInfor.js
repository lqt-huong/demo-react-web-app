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
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}</span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {


                            return (
                                <div key={user.id} className={user.age < 18 ? "red" : "green"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )



                        })}


                    </div>
                }
            </div>

        )
    }
}

export default DisplayInfor;