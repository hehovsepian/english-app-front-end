import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, useSearchParams} from "react-router-dom"
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from "react-redux";
import { saveInterests } from '../../redux/interestsSlice'
import { Navigate } from "react-router-dom";
import styled from 'styled-components';
import { Button, InterestsList, Interest } from "../global/GlobalStyles"


//images
import arrowLeft from "../../images/icons/arrow-left-blue.svg";
import chevronDownBlue from "../../images/icons/chevron-down-blue.svg"
import certificateBadge from "../../images/certificate-badge.svg"

const OnboardingPage = styled.div`
    width:100%;
    color:white;
    background: linear-gradient(180deg, #05112A 0%, #1C0D40 100%);
    padding:16px;
    height:100vh;
    overflow:hidden;

    p.teal{
        color: blue;
    }
    
    .icon-button{
        margin:50px 0 16px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor:pointer;
        span{
            margin-left: 8px;
        }
    }

    h2{
        margin-bottom:24px;
        margin-bottom: 0;
        font-size: 42px;
        font-weight:500;
    }

    form{
        margin-top:24px;
    }

    input {
        width: 100%;
        background: #fefefe;
        background: white;
        border: 1px solid #dde3ee;
        border: 1px solid rgb(221, 227, 238);
        border-radius: 4px;
        color: #60646d;
        display: block;
        font-size: 14px;
        height: 36px;
        margin: 4px 0;
        max-width: 100%;
        padding: 0 12px;
        width: 100%;
        margin-bottom:24px;
    }

    label{
        display: block;
       margin-bottom: 8px;
       font-family:"TT Commons";
       font-size:18px;
    }

    .skip{
        display:block;
        width:100%;
        text-align: center;
    }

    textarea{
        width:100%;
        border-radius:8px;
        resize: none;
        height:100px;
        padding:8px;
        font-family: var(--primary-font-family), sans-serif;
    }

    .suggestions{
        display: flex;
        align-items: center;
        .large-emoji{
            font-size:32px;
            margin:0;
            display:inline;
            margin-right:8px;
        }
        .chip-highlight.outline{
            border:1px solid white;
            color:white;
            margin-right:8px;
            cursor: pointer;
            padding: 6px 12px;
            display: inline-block;
            background-color: transparent;
            border-radius: 20px;
            font-size: 16px;
            line-height: 1.5;
            font-weight: 600;
            letter-spacing: 0.24px;
            white-space: nowrap;
        }
    }

    .goal-date{
        margin-top:32px;
        .input-group{
            display:flex;
            width:100%;
            gap:8px;
            .gr-form-element{
                flex:2;
            }
            .gr-select-container {
                position: relative;
            }
            .gr-select {
                appearance: none;
                display: block;
                margin: 4px 0;
                padding: 0 12px;
                padding-right: 42px;
                height: 36px;
                color: #60646D;
                border: 1px solid #DDE3EE;
                background: #FEFEFE;
                border-radius: 8px;
                font-size: 14px;
                width: 100%;
                max-width: 100%;
            }
            input, select{
                border-radius: 8px;
            }
            input{
                flex:1;
                padding: 8px;
            }
            .gr-select-container img{
                position: absolute;
                right: 12px;
                top: calc(50% - 4px);
            }
        }
    }

    .confirm{
        display: flex;
        // align-items: center;
        // justify-content: space-between;
        .confirm-headers{
            margin-right:30px;
        }
        strong, p{
            display:block;
            line-height: 100%;
            margin: 16px 0;
        }
    }

    .badge{
        width:100%;
        height:100px;
        background-color: #122142;
        border-radius:8px;
        display: flex;
        align-items: center;
        padding:16px;
        img{
            margin-right:30px;
        }
    }
`

const PrimaryButton = styled(Button)`
    width:100%;
    margin:24px 0;
`

const Onboarding = () => {

    const signedin = useSelector((state: RootState) => state.auth.signedin)
    const interests = useSelector((state: RootState) => state.interests.interests)

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    let totalSteps = 3

    const [step, setStep] = useState<number>(1)
    const [goal, setGoal] = useState<string>('')
    const [day, setDay] = useState<string>('day')
    const [month, setMonth] = useState<string>('month')
    const [year, setYear] = useState<string>('year')
    const [selectedInterests, setSelectedInterests] = useState<string[]>([])

    const days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const years = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']
    //const interests = ['🧗‍♀️ Outdoor activities', '⚽️ Sports', '🫀 Health', '🎸 Music', '🎭 Performing arts', '🎨 Creative arts', '📸 Photography', '🍿 Film & cinema', '📚 Reading', '🔬Science', '🌿 Nature', '🏰 History', '🤲 Volunteering', '✍️ Writing', '🔭 Astronomy', '💡 Personal development', '🧘‍♂️ Wellbeing', '🏎 Cars & racing', '✈️ Travel', '🧑‍🍳 Cooking', '🌮 Food', '🏡 Interior design', '👗 Fashion']

    useEffect(()=>{
        setStep(Number(searchParams.get("step")))
    },[location])

    const handleSelectInterest = (newInterest:string) => {
        setSelectedInterests(prevState=>{
            let newArray = [...prevState]
            if(prevState.includes(newInterest)){
                //remove from newArray
                prevState.splice(prevState.indexOf(newInterest), 1);
            }else{
                //add to array
                newArray.push(newInterest)
            }
            return newArray
        })
    }

    const handleNext = () => {
        if(step === totalSteps){
            dispatch(saveInterests(selectedInterests))
            navigate("/home")
        }else{
            navigate(`/onboarding?step=${step+1}`)
        }
    }

    const handlePrevious = () => {
        navigate(`/onboarding?step=${step-1}`)
    }

    const handleSetGoal = (e:React.MouseEvent<HTMLElement>) => {
        let goal = e.target as HTMLElement;
        setGoal(goal.innerText)
    }

    if(signedin === true){
    if(step === 1){
        return (
            <OnboardingPage>
                <h2>Welcome back!</h2>
                <p>We see you have studied English with us before. <span className="bold">Do you have a new goal?</span></p>
                <form>
                    <textarea
                        placeholder="Let us know how we can help you"
                        value={goal}
                        onChange={(e)=>{
                            setGoal(e.target.value)
                        }}
                    />
                    <div className="suggestions">
                        <p className="large-emoji">💡</p>
                        <span className="chip-highlight outline" onClick={handleSetGoal}>Admission to university</span>
                        <span className="chip-highlight outline" onClick={handleSetGoal}>Job interview</span>
                        <span className="chip-highlight outline" onClick={handleSetGoal}>Moving country</span>
                    </div>
                    <div className="goal-date">
                        <p>When do you need to be ready?</p>
                        <div className="input-group">
                        <div className="gr-form-element">
                                <div className="gr-select-container">
                                    <select 
                                        className="gr-select"
                                        value={day}
                                        onChange={(e)=>{
                                            setDay(e.target.value)
                                        }}
                                    >
                                        <option value="day" disabled>Day</option>
                                        {
                                            days.map((day, index)=>{
                                                return <option key={index} value={day}>{day}</option>
                                            })
                                        }
                                    </select>
                                    <img src={chevronDownBlue}/>
                                </div>
                            </div>
                            <div className="gr-form-element">
                                <div className="gr-select-container">
                                    <select 
                                        className="gr-select"
                                        value={month}
                                        onChange={(e)=>{
                                            setMonth(e.target.value)
                                        }}
                                    >
                                        <option value="month" disabled>Month</option>
                                        {
                                            months.map((month, index)=>{
                                                return <option key={index} value={month}>{month}</option>
                                            })
                                        }
                                    </select>
                                    <img src={chevronDownBlue}/>
                                </div>
                            </div>
                            <div className="gr-form-element">
                                <div className="gr-select-container">
                                    <select 
                                        className="gr-select"
                                        value={year}
                                        onChange={(e)=>{
                                            setYear(e.target.value)
                                        }}
                                    >
                                        <option value="year" disabled>Year</option>
                                        {
                                            years.map((year, index)=>{
                                                return <option key={index} value={year}>{year}</option>
                                            })
                                        }
                                    </select>
                                    <img src={chevronDownBlue}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PrimaryButton
                        onClick={handleNext}
                        type="button"
                        $primary
                        $disabled={goal && day != 'day' && month != 'month' && year != 'year' ? false : true}
                    >
                        Set my goal
                    </PrimaryButton>
                    <a className="skip" onClick={()=>{navigate("/onboarding?step=3")}}>I don’t want to set a goal</a>
                </form>
            </OnboardingPage>
        )
    }else if(step === 2){
        return(
            <OnboardingPage>
                <button className="icon-button icon-left teal" onClick={handlePrevious}>
                    <img src={arrowLeft}/>
                    <span className="gradient-text">Back to edit goal</span>
                </button>
                <h2>Confirm your goal</h2>
                <p>Please review the details below</p>
                <div className="confirm">
                    <div className="confirm-headers">
                        <strong>Goal</strong>
                        <strong>Language</strong>
                        <strong>Deadline</strong>
            
                    </div>
                    <div className="confirm-items">
                        <p>{goal ? goal : 'No goal'}</p>
                        <p>English</p>
                        <p>{day && month && year ? `${day} ${month} ${year}` : 'No date'}</p>
                    </div>
                </div>
                
                {
                    goal ? (
                        <>
                            <p>We recommend:</p>
                            <div className="badge">
                                <img src={certificateBadge}/>
                                <strong>English <br/> International Certificate</strong>
                            </div>
                        </>
                    ) : null
                }
               
                <form>
                    <PrimaryButton
                        onClick={handleNext}
                        type="button"
                        $primary
                        disabled={goal ? false : true}
                    >
                        Confirm my goal
                    </PrimaryButton>
                    <a className="skip" onClick={()=>{navigate("/onboarding?step=3")}}>Skip</a>
                </form>
            </OnboardingPage>
        )  
    }
    else if(step === 3){
        return(
            <OnboardingPage>
                <button className="icon-button icon-left" onClick={handlePrevious}>
                    <img src={arrowLeft}/>
                    <span className="gradient-text">Back to confirm goal</span>
                </button>
                <h2>Your interests</h2>
                <p>For personalized content (that we think you'll love!), let us know what you're interested in</p>
                {/* <form> */}
                    <InterestsList>
                        {
                            interests.map((interest, index)=>{
                                return (
                                    <Interest 
                                        key={`interest-${index}`} 
                                        $button
                                        $selected={selectedInterests.includes(interest) ? true : false}
                                        onClick={()=>{handleSelectInterest(interest)}}
                                    >
                                            {interest}
                                    </Interest>
                                )
                            })
                        }
                    </InterestsList>
                    <PrimaryButton
                        onClick={handleNext}
                        type="button"
                        $primary
                        disabled={selectedInterests.length > 0 ? false : true}
                    >
                        Continue
                    </PrimaryButton>
                    <a className="skip" onClick={()=>{navigate("/home")}}>Skip</a>
                {/* </form> */}
            </OnboardingPage>
        ) 
    }
    else{
        return(
            <>
                {
                    navigate('/home')
                }
            </>
        )
   }
}else{
    return (
        <Navigate to="/signin" />
    )
}
    
}

export default Onboarding
