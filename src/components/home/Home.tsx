import {useEffect} from 'react'
import styled from 'styled-components';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

const HeroBanner = styled.div`
    background: linear-gradient(31deg, #05112A 0%, #1A2538 51.87%, #2A3B5B 100%);
    width:100%;
    height: 228px;
    color:white;
    padding: 40px 80px;
`


function Home(){

    const user = useSelector((state: RootState) => state.auth.user)

    useEffect(()=>{
        console.log(user)
    },[])

    return <>
       <HeroBanner>
            <h1>Welcome back, Márcia!</h1>
       </HeroBanner>
    </>
}

export default Home