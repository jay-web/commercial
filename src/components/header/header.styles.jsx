import styled, {css} from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    width: 95vw;
    margin: 0 auto;
    padding: 5px 2px;
    display: grid;
    grid-template-columns: 1fr .5fr;
`;

export const NavGroupContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-self: end;
`;


export const LinkContainer = styled(Link)`
   ${props => !props.logo && css`
        padding: 10px;
        cursor: pointer
   `}
`



