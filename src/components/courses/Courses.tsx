import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Page, Button } from "../global/GlobalStyles"
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Course } from "../../redux/data/courses_data"

//images
import search from "../../images/icons/search-white.svg"
import filter from "../../images/icons/filter-dark.svg"
import star from "../../images/icons/star.svg"

const PageActions = styled.div`
    width:100%;
    // display: flex;
    // align-items: flex-start;
    // justify-content: space-between;
    margin-bottom:32px;
    // padding-right:24px;
`

const SearchBar = styled.div`
        flex: 0.8;
        border-radius: 100px;
        border: 1px solid var(--ui-elements-border-01, #DFE1E1);
        background: var(--ui-elements-field, #FFF);
        height: 48px;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position:relative;
        input[type="search"]{
            background-color: transparent;
            border:none;
            padding: 4px 4px 4px 24px;
            height:100%;
            width:100%;
            border-radius: 100px;
        }  
        button{
            background-color: #9E007E;
            width: 32px;
            height: 32px;
            border-radius:32px;
            display: flex;
            align-items: center;
            justify-content: center;
            position:absolute;
            right:8px;
            top:6px;
            cursor:pointer;
        }  
`

const CourseCardList = styled.ul`
   padding-inline-start:0;
   display: flex;
   flex-wrap:wrap;
   gap:24px;
`

const CourseCard = styled.div`
   background-color:white; 
   border: 1px solid #DDE3EE;
   padding:24px;
   flex-basis:400px;
   border-radius:8px;
   .star{
        width:100%;
        display: flex;
        justify-content: flex-end;;
    }
   .card-footer{
        display: flex;
        width:100%;
        justify-content: flex-end;
    }
`

function Courses(){

    const courses = useSelector((state: RootState) => state.courses)

    const [searchTerm, setSearchTerm] = useState('')
    const [searchParam] = useState(["name"]);

    useEffect(()=>{
        (searchCourses(courses))
    },[searchTerm])

    const searchCourses = (items:Course[]) => {
        return items.filter((item) => {
            //if (item.region == filterParam) {
                // return searchParam.some((newItem) => {
                    return (
                        item.name
                            .toString()
                            .toLowerCase()
                            .indexOf(searchTerm.toLowerCase()) > -1
                    );
                // });
            //} 
            // else if (filterParam == "All") {
            //     return searchParam.some((newItem) => {
            //         return (
            //             item[newItem]
            //                 .toString()
            //                 .toLowerCase()
            //                 .indexOf(q.toLowerCase()) > -1
            //         );
            //     });
            // }
        });
    }

    return <Page>
        <h1>Courses</h1>
        <PageActions>
            <SearchBar>
                <input 
                    type="search"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                <button>
                    <img src={search}/>
                </button>
            </SearchBar>
            {/* <Button>
                Filter
                <img src={filter} className="icon-right"/>
            </Button> */}
        </PageActions>
        <CourseCardList>
            {
                searchCourses(courses).map((course, index)=>{
                    return(
                        <CourseCard key={index}>
                             <button className="star">
                                <img src={star}/>
                            </button>
                            <h2>{course.name}</h2>
                            {/* <div className="course-students">
                                <img src={usersIcon}/>
                                <div>
                                    {
                                        filteredUsers.map((user, index)=>{
                                            return (
                                                <Avatar key={index} user={user} size='small' outline="white"/>
                                            ) 
                                        })
                                    }
                                </div>
                            </div> */}
                            <div className="performance">
                                <p>Students in this course are <br/> performing
                                <span className="teal bold"> Above level </span>
                                </p>
                                {/* <Icon icon="trending-up" size="18"/> */}
                            </div>
                            {/* <p>Course duration: {getDate(course.lessons[0].date)} - {getDate(course.lessons[course.lessons.length - 1].date)}</p> */}
                            <p>Assigned course book: <strong>{course.book}</strong></p>
                            {/* <CourseProgressBar value="70"/> */}
                            <div className="card-footer">
                                <Button
                                    $primary
                                >
                                    Go to course
                                </Button>
                                {/* <Link className="primary" to={"/course/"+course.id}>
                                    Go to course
                                </Link>  */}
                            </div>
                        </CourseCard>
                    )
                })
            }
        </CourseCardList>
    </Page>
}

export default Courses