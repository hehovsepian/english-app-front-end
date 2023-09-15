import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

//images
import schoolLogo from "../../images/school-logo.svg"
import notifications from "../../images/icons/notifications.svg"
import email from "../../images/icons/email.svg"
import arrow from "../../images/icons/arrow-down.svg"

const StyledHeader = styled.header`
	height:154px;
	width:100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 72px 80px 32px 80px;
`

const RightActions = styled.div`
	width: 180px;
	display:flex;
	align-items: center;
	justify-content: space-between;
`

const Avatar = styled.button`
	display: flex;
	align-items: center;
	cursor:pointer;
	span{
		display: flex;
		align-items: center;
		justify-content:center;
		width: 36px;
		height: 36px;
		border: 2px solid black;
		border-radius: 58px;
		font-weight: 600;
		font-size: 16px;
		transition:background-color 0.1s ease-in-out;
	}
	.arrow {
		transition:transform 0.3s ease-in-out;
	}

	&[aria-expanded=true] {
		span {
			background-color:black;
			color:white;
		}
		.arrow {
			transform:rotate(180deg)
		}
	}
`

const AvatarMenu = styled.div`
	background-color:white;
	padding:16px;
	position:absolute;
	top: 120px;
	right: 110px;
	width: 110px;
	border-radius:8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	z-index: 111;
	button {
		padding-top:4px;
		padding-bottom:4px;
		cursor:pointer;
		&:hover {
			text-decoration: underline;
		}
	}
`

function Header(){

	const navigate = useNavigate();

	const [showAvatarMenu, setShowAvatarMenu] = useState<boolean>(false)

    const user = {
        firstName: "Hannah",
        lastName: "Test"
    }

    const getInitials = () => {
		if(user){
			let firstInitial = user.firstName.charAt(0);
			let lastInitial = user.lastName.charAt(0);
			return firstInitial + lastInitial
		}else{
			return 'TE'
		}
	}

    return(
		<StyledHeader>
				<img src={schoolLogo}/>
				<RightActions>
					<button>
						<img src={notifications}/>
					</button>
					<button>
						<img src={email}/>
					</button>
					<Avatar
						aria-expanded={showAvatarMenu}
						onClick={()=>{
							setShowAvatarMenu(!showAvatarMenu)
						}} 
					>
						<span>{getInitials()}</span>
						<img className='arrow' src={arrow}/>
					</Avatar>
					{
						showAvatarMenu ? <AvatarMenu>
							<button onClick={()=>{
								navigate('/profile')
							}}>Profile</button>
							<button onClick={()=>{
								navigate('/sign-out')
							}}>Log out</button>
						</AvatarMenu> : null
					}
				</RightActions>
			</StyledHeader>
    )
}

export default Header