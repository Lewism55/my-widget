import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
`;

const InputBox = styled.input`
    flex: 1;
    height: 100%;
    padding: 10px;
`;

const SendButton = styled.button`
    height: 100%;
    width: 100px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
`;

const Input: React.FC = () => {
    return (
        <InputContainer>
            <InputBox type="text" placeholder="Type your message..." />
            <SendButton>Send</SendButton>
        </InputContainer>
    );
};

export default Input;
