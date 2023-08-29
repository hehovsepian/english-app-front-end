import {useEffect} from 'react'
import styled from 'styled-components';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../../redux/authSlice'
import { PrimaryButton } from "../global/GlobalStyles"

const AuthPage = styled.div`
    width:100%;
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

function SignIn(){

    const signedin = useSelector((state: RootState) => state.auth.signedin)

    useEffect(()=>{
        console.log(signedin)
    },[])

    const handleSubmitSignin = () => {

    }

    return (
        <AuthPage>
            <Form onSubmit={handleSubmitSignin}>
                <h1>Hi there!</h1>
                <Input>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                    />
                </Input>
                <Input>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="text"
                    />
                </Input>
                <p>or <a className='gradient-text'>create an account</a></p>
                <PrimaryButton
                    $primary
                    type="submit"
                >
                    Sign In
                </PrimaryButton>
            </Form>
        </AuthPage>
    )
}

export default SignIn