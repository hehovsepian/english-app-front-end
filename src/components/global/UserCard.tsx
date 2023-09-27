import { Student} from "../../redux/data/students_data"
import styled from 'styled-components';

//images
import location from "../../images/icons/location-teal.svg"

const Card = styled.div<{ $profile?: boolean}>`
   background: #122142;    
   color:white;
   padding:36px 24px;
   width:300px;
   border-radius:8px;
   text-align:center;
   cursor:${props => props.$profile? "auto" : "pointer"};
   margin:${props => props.$profile? "0 auto" : "unset"};
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
    background: ${props => props.$profile? "#122142" : "#0b1a3b"};
   }
`

interface UserCardProps {
    key?:number | null,
    user: Student,
    profile?: boolean | null
}

function UserCard({ key, user, profile }: UserCardProps){

    return (
        <Card
            key={key}
            $profile={profile ? true : false}
        >
                <img
                    src={user.profilePhoto}
                />
                <p className='name'>{user.name}</p>
                <p className='location'><img src={location}/>{user.location}</p>
                <p className='level'>{user.level}</p>
                <p className='course'>{user.course}</p>
        </Card>
    )
    
}

export default UserCard