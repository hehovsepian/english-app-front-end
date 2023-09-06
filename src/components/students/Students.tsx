import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Page, Button } from "../global/GlobalStyles"
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Student } from "../../redux/data/students_data"

//images
import search from "../../images/icons/search-white.svg"
import location from "../../images/icons/location-teal.svg"

//filter data
export interface Filter{
    title: string,
    options: string[]
}

const filterData = [
    {
        title: 'Native language',
        options: [
            'German',
            'Mandarin',
            'Portuguese',
            'Spanish',
            'Turkish',
            'Ukrainian'
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

`

const Filter = styled.div`
    border: 1px solid #DDE3EE;
    background: #FEFEFE;
    width:240px;
    min-height:350px;
    padding:24px;
    fieldset{
        border:none;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        span{
            display:block;
            margin:16px 0;
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

const StudentCard = styled.div`
   background: #122142;    
   color:white;
   padding:24px;
   width:300px;
   border-radius:8px;
   text-align:center;
   cursor:pointer;
   &>img{
    width:100px;
    height:100px;
   }
   .name{
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
   }
   .location{
        display:flex;
        align-items: center;
        justify-content: center;
        color:#0CC0AD;
        font-weight: 500;
        img{
            margin-right:8px;
        }
   }
   .level{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        margin:0;
   }
   .course{
        font-weight: 400;
        color: $textMuted;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        margin:0;
        color:#989BA3;
   }
   &:hover{
    background:#0b1a3b;
   }
`

function Students(){

    const students = useSelector((state: RootState) => state.students)

    const [searchTerm, setSearchTerm] = useState('')
    const [searchParam] = useState(["name"]);
    const [filterParams, setFilterParam] = useState<string[]>([]);

    useEffect(()=>{
        (searchStudents(students))
    },[searchTerm])

    const searchStudents = (items:Student[]) =>  {
        return items.filter((item) => {
            if (filterParams.includes(item.nativeLanguage)) {
                return searchParam.some(() => {
                    return (
                        item.name
                            .toString()
                            .toLowerCase()
                            .indexOf(searchTerm.toLowerCase()) > -1
                    );
                });
            } else if (filterParams.length === 0) {
                return searchParam.some(() => {
                    return (
                        item.name
                            .toString()
                            .toLowerCase()
                            .indexOf(searchTerm.toLowerCase()) > -1
                    );
                });
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
                    searchStudents(students).map((student, index)=>{
                        return(
                            <StudentCard key={index}>
                                    <img
                                        src={student.profilePhoto}
                                    />
                                    <p className='name'>{student.name}</p>
                                    <p className='location'><img src={location}/>{student.location}</p>
                                    <p className='level'>{student.level}</p>
                                    <p className='course'>{student.course}</p>
                            </StudentCard>
                        )
                    })
                }
            </StudentCardList>
        </DirectoryPage>
    </Page>
}

export default Students