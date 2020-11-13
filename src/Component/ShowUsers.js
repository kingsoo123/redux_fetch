import React from "react";
import "../styles/styles.css";
import Background from "./Background";

function ShowUsers() {
    return(
        <>
            <p>Hello world</p>
            <Background />
            <button onClick={this.props.onAgeUp}>Add up</button>
            <button onClick={this.props.onAgeDown}>Subtract down</button>
            <button onClick={this.props.listUsers}  className="log">List User</button>
            {console.log(this.props.ages)}
            {this.props.users}
            <p>{this.props.ages}</p>
        </>
    )
}

export default ShowUsers;