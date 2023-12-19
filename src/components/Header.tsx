import React from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title>My Header</Title>
            <ButtonContainer>
                <Button>a</Button>
                <Button>b</Button>
                <Button>c</Button>
            </ButtonContainer>
        </HeaderContainer>
    );
};

export default Header;
