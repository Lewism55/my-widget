import Header from './Header';
import Content from './Content';
import Input from './Input';
import styled from 'styled-components';

const StyledWidget = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    bottom: 5px;
    right: 5px;
    height: 600px;
    width: 400px;
    z-index: 9999;
    border: 1px solid black;
`;

const Widget = () => {
    return (
        <StyledWidget>
            <Header />
            <Content />
            <Input />
        </StyledWidget>
    );
};

export default Widget;
