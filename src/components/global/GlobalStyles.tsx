import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const PrimaryButton = styled.button <{ $primary?: boolean; }>`
    background: ${props => props.$primary ? "linear-gradient(141deg, #0CD6CB 0%, #597FFF 100%)" : "black"};
    color: ${props => props.$primary ? "white" : "white"};
    height:48px;
    width:100%;
    border-radius: 48px;
    padding: 8px;
    border:none;
    font-weight: 600;
    font-size:18px;
`

