import React from 'react';
import styled from 'styled-components';

const TextWrapper=styled.div`
color:${({color})=>color||'#111111'};
display:${({display})=>display||'block'};
font-size:${({fs})=>fs||25}px;
border-bottom:${({bb})=>bb&&'3px solid #111111'}
`

const Text = ({children,...props}) => {
    return (
        <TextWrapper {...props}>
            {children}
        </TextWrapper>
    );
};

export default Text;