import Header from './Header';
import Content from './Content';
import Input from './Input';
import styled from 'styled-components';

const StyledWidget = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    bottom: 0;
    right: 0;
    height: 600px;
    width: 400px;
    z-index: 9999;
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
