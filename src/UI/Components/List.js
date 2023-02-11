import React from 'react';
import styled from 'styled-components';

const ListWrapper=styled.div`
&:before{
    position:absolute;
    content:'';
    top:50%;
    left:0px;
    width:8px;
    height:8px;
    border-radius:50%;
    background:#111111;
}
position:relative;
display:flex;
padding-left:15px;
`

const List = ({children,color}) => {
    return (
        <ListWrapper color={color}>
            {children}
        </ListWrapper>
    );
};

export default List;