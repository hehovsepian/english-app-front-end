import { useEffect, useState } from "react"
import Sidebar from "../global/Sidebar"
import Header from "../global/Header"
import Home from "../home/Home"
import Courses from "../courses/Courses"
import Students from "../students/Students"
import Profile from "../profile/Profile"
import { Navigate } from "react-router-dom";
import styled from 'styled-components';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'



const Main = styled.div`
    background-color: #F7F9FD;
    width:100%;
    border-radius: 32px 0 0 0;
    height:100vh;
    overflow:auto;
`

interface PageWrapperProps {
    page: "home" | "courses" | "students" | "profile"
}

function PageWrapper({ page }: PageWrapperProps){

    const signedin = useSelector((state: RootState) => state.auth.signedin)

    const getPage = () => {
        switch(page) {
            case "home":
              return <Home/>
              break;
            case "courses":
                return <Courses/>
              break;
            case "students":
                return <Students/>
              break;
            case "profile":
                return <Profile/>
              break;  
            default:
                return <Home/>
          }
    }

    if(signedin){
        return (
            <>
                <Sidebar/>
                <Main>
                    <Header/>
                    <main>
                        {getPage()}
                    </main>
                </Main>
            </>
        )
    }else{
     return (
        <Navigate to="/signin" />
        )
    }
    
}

export default PageWrapper