import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
    onClick: () => void
    title: string
    children: ReactNode
}

const StyledButton = styled.button`
    /* Add your button styles here */
    border-radius: 5px;
    transition: filter 0.3s;
    padding: 0px;
    height: 30px;
    width: 30px;
    margin: 5px;
    &:hover {
        filter: brightness(110%);
    }
`;

const Button: React.FC<ButtonProps> = ({ onClick, title, children }) => {
    return (
        <StyledButton onClick={onClick} title={title}>
            {children}
        </StyledButton>
    )
}

export default Button
