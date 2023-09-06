import Sidebar from "../global/Sidebar"
import Header from "../global/Header"
import Home from "../home/Home"
import Courses from "../courses/Courses"
import Students from "../students/Students"
import styled from 'styled-components';


const Main = styled.div`
    background-color: white;
    width:100%;
    border-radius: 32px 0 0 0;
    height:100vh;
    overflow:auto;
`

interface PageWrapperProps {
    page: "home" | "courses" | "students";
}

function PageWrapper({ page }: PageWrapperProps){

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
            default:
                return <Home/>
          }
    }


    return <>
        <Sidebar/>
        <Main>
            <Header/>
            <main>
                {getPage()}
            </main>
        </Main>
    </>
}

export default PageWrapper