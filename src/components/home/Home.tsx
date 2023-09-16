import {useEffect} from 'react'
import styled from 'styled-components';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { InterestsList, Interest, PalBadge } from "../global/GlobalStyles"

//images
import pal from "../../images/pal.svg"
import selfStudy1 from "../../images/self-study-1.png"
import star from "../../images/icons/star-yellow.svg"
import tyler from "../../images/tyler.png"
import florence from "../../images/florence.png"
import test from "../../images/test.svg"
import badge from "../../images/PEIC-logo.svg"

const HomePage = styled.div`
    position:relative;
    top:-100px;
`

const HeroBanner = styled.div`
    background: linear-gradient(31deg, #05112A 0%, #1A2538 51.87%, #2A3B5B 100%);
    width:100%;
    height: 228px;
    color:white;
    padding: 40px 80px;
`

const InterestsCard = styled.div`
        width:calc(100% - 160px);
        background: #000A31;
        border: 4px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin: 30px auto;
        padding:50px 16px 16px 16px;
        z-index: 2;
        position: relative;
        h2{
            font-size:16px;
            color:white;
            margin: 0;
            margin-bottom:16px;
        }
`

const Section = styled.div`
    padding: 0 16px;
    margin:32px auto;
    width: calc(100% - 160px);
    h3{
        font-size: 28px;
        font-weight: 400;
        display: flex;
        align-items: center;
        span{
            background-color: var(--teal);
            height:34px;
            width:34px;
            border-radius: 34px;
            font-size: 20px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right:16px;
        }
    }

     .self-study-card{
        border-radius: 8px;
        border: 1px solid var(--border-color);
        background: white;
        overflow: hidden;
        padding:16px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        &>div{
            display:flex;
            gap:16px;
            align-items: center;
        }
        .image-container{
            width:70px;
            height:70px;
            overflow: hidden;
            img{
                object-fit: cover;
                width:100%;
            }
        }
        .tag{
            border-radius: 4px;
            height:40px;
            font-size: 11px;
            line-height: 20px;
            background: #F5F5F5;
            border: 1px solid #DDE3EE;
            padding: 8px;
            font-weight: 500;
        }
    }

    .people{
        margin:16px 0 32px 0;
        display: flex;
        gap:16px;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        .person-card{
            background-color: white;
            border-radius:10px;
            width:193px;
            height:312px;
            overflow:hidden;
            flex-grow: 0;
            flex-shrink: 0;
            position: relative;
            .image-container{
                background-color: black;
                height:198px;
            }
            p{
                margin:0 0 0 20px;
                &:first-of-type{
                    margin-top:20px;
                }
            }
            .details{
                display: flex;
                align-items: center;
                gap:16px;
                margin:8px 16px;
                .rating{
                    border-radius: 100px;
                    background: #F3F3F3;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width:54px;
                    color:$defaultText;
                    padding: 4px;
                }
            }
        }
    }

    .step-3-card{
        background-color: #000A31;
        padding:16px;
        border-radius:4px;
        img{
            display: block;
            margin:0 auto;
        }
        p{
            color:white;
            text-align: center;
            margin:0;
            &.title{
                font-family: $primaryFontFamily;
                font-size: 24px;
                font-weight: 700;
            }
        }
    }

    .step-4-card{
        background-color: #000A31;
        padding:16px;
        margin-top:16px;
        display: flex;
        border-radius:4px;
        p{
            font-family: $primaryFontFamily;
            font-size: 19px;
            font-weight: 700;
            margin-left:16px;
            color:white;
        }
    }
`


function Home(){

    const user = useSelector((state: RootState) => state.auth.user)
    const interests = useSelector((state: RootState) => state.interests.selectedInterests)

    return (
        <>
            <HeroBanner>
                    <h1>Welcome back, Rico!</h1>
            </HeroBanner>
            <HomePage>
                <InterestsCard>
                        <PalBadge>
                            <img src={pal}/>
                            <span><span>PAL</span></span>
                        </PalBadge>
                        <h2>I created this course based on your interests</h2>
                        <InterestsList>
                            {
                                interests?.map((interest, index)=>{
                                    return (
                                        <Interest
                                            key={`interest-${index}`} 
                                        >
                                            {interest}
                                        </Interest>
                                    )
                                })
                            }
                        </InterestsList>
                </InterestsCard>
                <Section>
                    <h3>
                        <span>1</span>
                        Self Study
                    </h3>
                    <p>Follow this self-paced, personalized course to reach B2 proficiency.</p>
                    <div className="card self-study-card">
                        <div>
                            <div className="image-container">
                                <img src={selfStudy1}/>
                            </div>
                            <div>
                                <p>Digital human</p>
                                <p>{interests? interests[1] : ''}</p>
                            </div>
                        </div>
                        <span className="tag content">Speaking</span>
                    </div>
                </Section>
                <Section>
                    <h3>
                        <span>2</span>
                        1:1 lessons
                    </h3>
                    <p>Improve your English with the help of a professional tutor</p>
                    <p className="bold">Recommended tutors</p>
                    <div className="people">
                        <div className="person-card">   
                            <div className="image-container">
                                    <img src={tyler}/>
                            </div>
                            <p className="name bold">Tyler Campbell</p>
                            <p className="major">English tutor</p>
                            <div className="details">
                                <div className="rating">
                                    <img src={star}/>
                                    4.7
                                </div>
                                <span>£11.40/hr</span>
                            </div>
                        </div>
                        <div className="person-card">   
                            <div className="image-container">
                                    <img src={florence}/>
                            </div>
                            <p className="name bold">Florence Adams</p>
                            <p className="major">English tutor</p>
                            <div className="details">
                                <div className="rating">
                                    <img src={star}/>
                                    4.7
                                </div>
                                <span>£11.40/hr</span>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    <h3>
                        <span>3</span>
                        Test readiness
                    </h3>
                    <p>Find out if you're ready for the test and what you can do to improve</p>
                    <div className="dark-card step-3-card">
                        <img src={test}/>
                        <p className="title">Take a readiness test</p>
                        <p>for English International Certificate (EIC)</p>
                    </div>
                </Section>
                <Section>
                    <h3>
                        <span>4</span>
                        EIC test
                    </h3>
                    <div className="dark-card step-4-card">
                        <img src={badge}/>
                        <p className="title">Sit the English International Certificate (EIC)</p>
                    </div>
                </Section>
        </HomePage>
    </>
    )
}

export default Home