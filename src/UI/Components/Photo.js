import React from 'react';
import styled from 'styled-components';

const PhotoWrapper=styled.img`
width:${({w})=>w?w+'px':'12vw'};
height:${({h})=>h?h+'px':'31vh'};
`

const Photo = ({src,...props}) => {
    return (
        <PhotoWrapper src={src}  {...props}/>
    );
};

export default Photo;