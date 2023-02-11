import React from 'react';
import styled from 'styled-components';
import Photo from '../../UI/Components/Photo';
import Text from '../../UI/Components/Text';
import Wrapper from '../../UI/Components/Wrapper';
import { AUTHOR_NAME, PSEUDONUM, WORK_NAME,INFO } from '../constant/constans';
import photo from '../../assets/img/photo.png'

const HeaderWrapper=styled.div`
display:flex;
border-bottom:5px solid #111111;
background:white;
padding:20px 20px;
position:relative;
height:36%;
`

const Info=styled.div`
display:flex;
flex-direction:column;
`

const MarginX=styled.div`
margin:0 50px;
`
const AbsoluteBottom=styled.div`
position:absolute;
bottom:24px;
`
const Header = () => {

    



    return (
        <HeaderWrapper>
            <Wrapper>
                <Photo src={photo}/>
            </Wrapper>
            <Wrapper>
                <MarginX>
                    <Text fs='35'>{AUTHOR_NAME} <Text fs='35' color='#d6591f' display='inline'>@{PSEUDONUM}</Text></Text>
                    
                <AbsoluteBottom>
                <Info>
                {INFO.map(el=><Text>{Object.keys(el)}: {el[Object.keys(el)]}</Text>)}
                </Info>
                <Text bb>{WORK_NAME}</Text>
                </AbsoluteBottom>
              
                </MarginX>
                
                
            </Wrapper>
        </HeaderWrapper>
    );
};

export default Header;