import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
/* firebase */
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ initialState })
        } catch (error) {
            console.log(error);
        }

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

                    <div className='buttons'>
                        <CustomButton
                            title='Sign in'
                            type='submit'
                        />

                        <CustomButton
                            onClick={signInWithGoogle}
                            title='Signin with google'
                            isGoogleSignIn
                        />
                    </div>


                </form>
            </div>
        )
    }
}

export default SignIn;