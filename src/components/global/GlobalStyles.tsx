import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Page = styled.div`
    padding: 40px;
`

export const Button = styled.button <{ $primary?: boolean, $disabled?: boolean}>`
    border: ${props => props.$primary ? "none" : "1px solid black"};
    background: ${props => props.$primary ? "linear-gradient(141deg, #0CD6CB 0%, #597FFF 100%)" : "white"};
    color: ${props => props.$primary ? "white" : "black"};
    height:48px;
    border-radius: 48px;
    padding: 16px;
    font-weight: 600;
    font-size:18px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity: ${props => props.$disabled ? "0.5" : "1"};
    .icon-right{
        margin-left:8px;
    }
`

export const InterestsList = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:12px;
`

export const Interest = styled.span <{ $selected?: boolean, $button?: boolean}>`
    height:32px;
    cursor: ${props => props.$button? "pointer" : "auto"};
    white-space: nowrap;
    text-align:center;
    padding: 7px 12px 0px 12px;
    line-height: 18px;
    font-size: 14px;
    font-weight:500;
    border-radius: 4px;
    box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: ${props => props.$selected ? "#003057" : "#FEFEFE"};
    border: ${props => props.$selected ? "1px solid #003057" : "1px solid #DDE3EE"};
    color: ${props => props.$selected ? "#FEFEFE" : "#151515;"}; 
`

export const PalBadge = styled.div`
    width: 100px;
    height: 47.32px;
    background: $medNavy;
    position: absolute;
    left:25px;
    top:-20px;
    padding:12px;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    gap:5px;
    background-clip: padding-box;
    border: solid 4px transparent;
    background: linear-gradient(#122142, #122142) padding-box,
                linear-gradient(146.38deg, #0CD6CB 17.62%, #5682FD 78.89%) border-box;
    border-radius: 8px;
    border: 4px solid transparent;
    span{
        color:white;
        font-size:15px;
        span{
            font-weight: 700;
        }
    }
`

