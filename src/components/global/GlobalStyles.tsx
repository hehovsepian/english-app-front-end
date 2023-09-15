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

