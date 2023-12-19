import React from 'react';
import styled from 'styled-components';

const ContentBox = styled.div`
    height: 400px;
    overflow-y: auto;
    /* Add any other styles you want for the content box */
`;

const Content: React.FC = () => {
    return (
        <ContentBox>
            {/* Add your content here */}
        </ContentBox>
    );
};

export default Content;
