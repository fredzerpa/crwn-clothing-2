import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

class SignUp extends Component {

    constructor() {
        super()
        this.state = initialState;
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {

        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('passwords don\'t match')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState(initialState);

        } catch (error) {
            console.error(error)
        }
    }

    render() {

        const { handleChange, handleSubmit } = this;
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>

                <h2 className='title'>I do not have an acount</h2>
                <span>Sign up with your email and password</span>

                <form
                    className='sign-up-form'
                    onSubmit={handleSubmit}>

                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        required
                        handleChange={handleChange}
                        label='Display Name'
                    />

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

                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        required
                        handleChange={handleChange}
                        label='Confirm Password'
                    />

                    <CustomButton
                        title='Sign up'
                        type='submit'
                    />

                </form>
            </div>
        )
    }
}

export default SignUp;