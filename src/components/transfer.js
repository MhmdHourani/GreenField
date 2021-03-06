import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import './CSS/withdraw.css';
let style = { width: 200, textAlign: 'left', marginLeft: 0 };

class Transfer extends React.Component {
    state = { sender: '', reciever: '', amount: '' };
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        let value = this.state.amount;
        axios
            .get('/transfer', {
                creditcard: this.state.sender,
                id: this.state.reciever,
                amount: this.state.amount,
            })
            .then(function (response) {
                console.log(response);
                alert(`Successfully transfered  ${value}$ `);
                console.log('Success');
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault();
        this.setState({
            sender: '',
            reciever: '',
            amount: '',
        });
    }
    render() {
        return (
            <div className='box2'>
                <h3> Transfer </h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label> Please enter your credit card number: </label>
                    <input
                        type='number'
                        name='sender'
                        value={this.state.sender}
                        onChange={this.handleChange.bind(this)}
                    ></input>

                    <label> Reciever's ID number: </label>
                    <input
                        type='number'
                        name='reciever'
                        value={this.state.reciever}
                        onChange={this.handleChange.bind(this)}
                    ></input>

                    <label> Amount of money you would like to transfer: </label>
                    <input
                        type='number'
                        name='amount'
                        value={this.state.amount}
                        onChange={this.handleChange.bind(this)}
                    ></input>

                    <button className='btn'>Tranfer</button>
                </form>
            </div>
        );
    }
}

export default Transfer;
