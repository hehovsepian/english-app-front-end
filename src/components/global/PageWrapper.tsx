import Sidebar from "../global/Sidebar"
import Header from "../global/Header"
import Home from "../home/Home"
import styled from 'styled-components';

const Page = styled.div`
    background-color: white;
    width:100%;
    border-radius: 32px 0 0 0;
    min-height:100vh;
`

interface PageWrapperProps {
    page: string;
}

function PageWrapper({ page }: PageWrapperProps){

    const getPage = (page:string) => {
        if(page === "home"){
            return <Home/>
        }
    }


    return <>
        <Sidebar/>
        <Page>
            <Header/>
            <main>
                {getPage(page)}
            </main>
        </Page>
    </>
}

export default PageWrapper