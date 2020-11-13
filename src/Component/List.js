import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../Redux/Actions/actions';

class List extends Component {
    state = {
        users : [{}]
    };

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>  {
                   this.setState({
                       users : [...json]
                   });
                this.props.listUsers(this.state.users);
                }
            )
    };
    render() {
        return (
            <div className="container">
                <div className="card">
                    <img src="#" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">User Details</h5>
                        <p className="card-text">Email:{this.props.submitValues.email}</p>
                        <p className="card-text">Password:{this.props.submitValues.password} </p>
                    </div>
                </div>
                {this.props.users.map(user=>{
                    return(
                        <div key={user.id}>
                            <li>
                                {user.name}
                            </li>
                        </div>
                        )

                })}
            </div>
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


const mapDispatchToProp = (dispatch)=>{
    return{
        listUsers: (input)=>{dispatch(actionCreators.listUsersAsync(input))}
    }
};

export default connect(mapStateToProps, mapDispatchToProp)(List);