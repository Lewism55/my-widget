import React from 'react'
import styled from 'styled-components'
import Button from './Reusables/Button'
import Cross from '../assets/IconCross'

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 100px;
    background-color: #f2f2f2;
`;

const Title = styled.h1`
    font-size: 20px;
    margin: 0;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title>My Header</Title>
            <ButtonContainer>
                <Button onClick={()=>{}} title='a button' children={<Cross />}/>
                <Button onClick={()=>{}} title='a button' children={<Cross />}/>
                <Button onClick={()=>{}} title='a button' children={<Cross />}/>
            </ButtonContainer>
        </HeaderContainer>
    );
};

export default Header;
