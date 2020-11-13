import React, {Component} from "react";
import "../styles/styles.css";
import {connect} from "react-redux";
import * as actionCreators from '../Redux/Actions/actions';
import {Link} from "react-router-dom";

class SignUp extends Component{

    state = {
        email : '',
        password : ''
    };



    render() {
        console.log(this.state.email);
        console.log(this.state.password);
        return (
            <>
                <div className="welcome">
                    <h3 style={{ color: "#005EB4", fontWeight: "bold" }}>Welcome!</h3>
                </div>

                <div className="form">
                    <div className="input-container">
                        <i className="fa fa-user icon"/>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={(e)=>this.props.handleChangeEmail(this.setState({email: e.target.value}))}
                        />
                    </div>

                    <div className="input-container">
                        <i className="fa fa-lock icon"/>
                        <input
                            className="input-field"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => this.props.handleChangePassword(this.setState({password:e.target.value}))}
                        />

                    </div>

                    <div className="remember">
                        <div className="me">
                            <input type="checkbox" />
                            <label style={{ marginLeft: 10 }}>
                                Remember me
                            </label>
                        </div>

                        <div>
                            <button className="log" onClick={()=>{this.props.submit({email:this.state.email, password:this.state.password})}}><Link to={'/lists'}>Log in</Link></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        email: state.email,
        password : state.password
    }
};
const mapDispatchToProp = (dispatch)=>{
    return{
        handleChangeEmail : (input)=>{dispatch({type : "HANDLE_CHANGE_EMAIL", payload: input})},
        handleChangePassword : (input)=>{dispatch({type : "HANDLE_CHANGE_PASSWORD", payload: input})},
        submit: (input)=>{dispatch(actionCreators.submit(input))},

    }
};

export default connect(mapStateToProps, mapDispatchToProp)(SignUp);
