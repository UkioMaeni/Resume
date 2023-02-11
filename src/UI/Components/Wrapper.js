import React from 'react';
import styled from 'styled-components';


const WrapperStyle=styled.div`
display:${({display})=>display||'block'};
${({jc})=>'justify-content:'+jc||''};
${({ai})=>'align-items:'+ai||''};
${({flex})=>flex?'flex:'+flex:''};
`

const Wrapper = ({children,...props}) => {
    return (
        <WrapperStyle {...props}>
            {children}
        </WrapperStyle>
    );
};

export default Wrapper;