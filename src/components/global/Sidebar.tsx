import {Link, useLocation} from "react-router-dom";
import styled from 'styled-components';


const Navigation = styled.nav`
    height:100vh;
    width:240px;
    padding-top:68px;
    padding-left:24px;
    display:flex;
    flex-direction:column;

    a{
        color:white;
        text-decoration:none;
        margin:18px;

        span{
            margin-left:8px;
        }
    }
`

function Sidebar(){

    let location = useLocation().pathname.split('/')[1]

    interface SidebarItem{
        name: string,
        icon: string
    }

    const data:SidebarItem[] = [
        {
            name: "Home",
            icon: "house"
        }, 
        {
            name: "Courses",
            icon: "graduation-cap",
        }, 
        {
            name: "Students",
            icon: "users",
        },     
    ]
    
    return (
        <Navigation>
        {
            data.map((item, index)=>{
                return (
                    <Link
                        key={index}
                        to={`/${item.name.toLowerCase()}`}
                        className={location === item.name.toLowerCase() ? 'active' : ''}
                    >
                        <i className={`fa-solid fa-${item.icon}`}></i>
                        <span>{item.name}</span>
                    </Link>
                )
            })
        }
        </Navigation>
    )
}

export default Sidebar