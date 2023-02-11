import React from 'react';
import styled from 'styled-components';

const TitleWraper=styled.div`
&:before{
    position:absolute;
    content:'';
    left:-3px;
    top:1px;
    transform:rotate(15deg);
    height:70%;
    width:10px;
    background:#111111;
}
margin-bottom:10px;
position:relative;
padding:0px 20px 7px 20px;
display:inline-block;
background:#111111;
line-height:25px;
`

const Title = ({children,}) => {
    return (
        <TitleWraper >
            {children}
        </TitleWraper>
    );
};





export default Title;