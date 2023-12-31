import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Page, Button } from "../global/GlobalStyles"
import UserCard from "../global/UserCard"
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Student } from "../../redux/data/students_data"

//images
import search from "../../images/icons/search-white.svg"
import location from "../../images/icons/location-teal.svg"

// filter data
type Filter = {
    title: string,
    key: string,
    options: string[]
}

const filterData:Filter[] = [
    {
        title: 'Native language',
        key: 'nativeLanguage',
        options: [
            'German',
            'Mandarin',
            'Portuguese',
            'Spanish',
            'Turkish',
            'Ukrainian'
        ]
    },
    {
        title: 'Teacher',
        key: 'instructor',
        options: [
            'Márcia de Silva',
            'Steven Peters',
            'Ximena Flora',
        ]
    },
    {
        title: 'Country of residence',
        key: 'country',
        options: [
            'Brazil',
            'China',
            'Germany',
            'Spain',
            'Turkey',
            'Ukraine'
        ]
    }
]

const PageActions = styled.div`
    width:100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap:20px;
    margin-bottom:32px;
    padding-right:24px;
`

const SearchBar = styled.div`
        flex: 1;
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

const DirectoryPage = styled.div`
   display: flex;
   gap:24px;
`

const FilterList = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
`

const Filter = styled.div`
    border: 1px solid #DDE3EE;
    background: #FEFEFE;
    width:240px;
    padding:24px;
    fieldset{
        border:none;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
        padding-block-end: 0;
        span{
            display:block;
            margin:16px 0;
            &:last-of-type{
                margin-bottom:0;
            }
        }
    }
`

const StudentCardList = styled.ul`
   padding-inline-start:0;
   margin-block-start: 0;
   display: flex;
   flex-wrap:wrap;
   gap:24px;
`

function Students(){

    const students = useSelector((state: RootState) => state.students)

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchParam] = useState<string[]>(["name"]);
    const [filterParams, setFilterParam] = useState<string[]>([]);

    useEffect(()=>{
        filterStudents(searchStudents(students))
    },[searchTerm, filterParams])

    const searchStudents = (items:Student[]) =>  {
        return items.filter((item) => {
            return (
                item.name
                    .toString()
                    .toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) > -1
            );
        });
    }

    let count = 0

    const filterStudents = (items:Student[]) =>  {
        return items.filter((item) => {
            if(filterParams.length > 0){
                for(let i = 0; i < filterData.length; i++){
                    if(filterParams.includes(item[filterData[i].key as keyof Student])){
                        return item
                    }
                }
            }else{
                return item
            }
        });
    }

    const handleFilterSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
        let checked = e.target.checked
        if(checked){
            setFilterParam((prevState)=>{
                return [...prevState, e.target.value]
            });
        }else{
            setFilterParam((prevState)=>{
                let newState = [...prevState]
                newState.splice(newState.indexOf(e.target.value), 1)
                return newState
            });
        }
    }

    return <Page>
        <h1>Student directory</h1>
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
            <Button
                $primary
            >
               Register student
            </Button>
        </PageActions>
        <DirectoryPage>
            <FilterList>
                {
                    filterData.map((filter, index)=>{
                        return(
                            <Filter key={`filter-${index}`}>
                                    <fieldset>
                                        <legend>{filter.title}</legend>
                                        {
                                            filter.options.map((option, index)=>{
                                                return(
                                                    <span key={`option-${index}`}>
                                                        <input 
                                                            type="checkbox"
                                                            id={option}
                                                            name={filter.title.replace(/\s/g, '').toLowerCase()}
                                                            value={option}
                                                            onChange={handleFilterSelect}
                                                        />
                                                        <label htmlFor={option}>{option}</label>
                                                    </span>
                                                )
                                            })
                                        }
                                    </fieldset>  
                            </Filter>
                        )
                    })
                }    
            </FilterList>
            <StudentCardList>
                {
                    filterStudents(searchStudents(students)).map((student, index)=>{
                        return(
                            <UserCard user={student} key={index}/>
                            // <StudentCard key={index}>
                            //         <img
                            //             src={student.profilePhoto}
                            //         />
                            //         <p className='name'>{student.name}</p>
                            //         <p className='location'><img src={location}/>{student.location}</p>
                            //         <p className='level'>{student.level}</p>
                            //         <p className='course'>{student.course}</p>
                            // </StudentCard>
                        )
                    })
                }
            </StudentCardList>
        </DirectoryPage>
    </Page>
}

export default Students