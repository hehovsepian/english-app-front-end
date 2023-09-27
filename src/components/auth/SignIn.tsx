import {useEffect, useRef} from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../../redux/authSlice'
import { Button } from "../global/GlobalStyles"

const AuthPage = styled.div`
    width:100%;
    color:white;
`

const Form = styled.form`
    width:80%;
    margin: 0 auto;
`

const Input = styled.div`
    margin: 24px 0;
    label{
        font-size: 18px;
        font-weight: 600;
    }
    input{
            border-radius: 4px;
            border: 1px solid #919191;
            background: #FFF;
            height: 48px;
            width:100%;
            margin: 8px 0;
    }
`

const SignInButton = styled(Button)`
    width:100%
`

function SignIn(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const signedin = useSelector((state: RootState) => state.auth.signedin)

    const emailRef = useRef<HTMLInputElement | null>(null)

    const handleSubmitSignin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(emailRef.current){
            dispatch(signin(emailRef.current.value))
        }
        navigate("/onboarding?step=1");
    }

    if(!signedin){
    return (
        <AuthPage>
            <Form onSubmit={handleSubmitSignin}>
                <h1>Hi there!</h1>
                <Input>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        ref={emailRef}
                    />
                </Input>
                <Input>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                    />
                </Input>
                <p>or <a className='gradient-text'>create an account</a></p>
                <SignInButton
                    $primary
                    type="submit"
                >
                    Sign In
                </SignInButton>
            </Form>
        </AuthPage>
    )
    }else{
        return (
             <Navigate to="/onboarding?step=1" />
        )
    }
}

export default SignIn