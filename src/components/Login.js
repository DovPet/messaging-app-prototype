import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = e => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch(err => alert(err.message))
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://smartandroid.fr/wp-content/uploads/2020/09/envoyer-message-groupe2.png" alt="" />
                <h1>Sign in to the APP</h1>
                <p>Prototype message APP</p>
                <SigninButton 
                    variant="contained" 
                    onClick={signIn}>
                    Sign in with Google
                </SigninButton>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;

`
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
 }
`

const SigninButton = styled(Button)`
    margin-top: 20px !important;
    background-color: var(--slack-color) !important;
`