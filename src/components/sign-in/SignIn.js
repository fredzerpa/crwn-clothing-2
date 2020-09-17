import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './SignIn.scss';

const initialState = {
    email: '',
    password: ''
}

class SignIn extends Component {


    constructor(props) {
        super(props)
        this.state = initialState;
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState(initialState)
    }

    render() {

        const { email, password } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
            <div className='sign-in'>

                <h2>I already have an account</h2>

                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>

                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        required
                        handleChange={handleChange}
                        label='Email'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        required
                        handleChange={handleChange}
                        label='Password'
                    />

                    <CustomButton
                        title='Submit Form'
                        type='submit'
                    />

                </form>
            </div>
        )
    }
}

export default SignIn;