import React, {Component} from "react";
import "../styles/styles.css";
import SignUp from "./SignUp";
import {connect} from 'react-redux';




class Background extends Component{
    render() {

        return (
            <>
                <div className="bgColor">
                    <SignUp />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state)=>{
return{
    ages: state.age,
    users : state.users,
    submitValues: state.submitValues
}
};
const mapDispatchToProp= (dispatch)=>{
    return{
        onAgeUp :()=> dispatch({type: "AGE_UP"}),
        onAgeDown : ()=>dispatch({type: "AGE_DOWN"}),
        listUsers: ()=>dispatch({type: "LIST_USERS"})
    }
};
export default connect(mapStateToProps, mapDispatchToProp)(Background);
