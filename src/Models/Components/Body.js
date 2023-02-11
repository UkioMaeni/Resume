import React from 'react';
import styled from 'styled-components';
import List from '../../UI/Components/List';
import Text from '../../UI/Components/Text';
import Title from '../../UI/Components/Title';
import Wrapper from '../../UI/Components/Wrapper';
import { EXPERIENCE, IN_FUTURE, PERSONAL_PROJECT, skills } from '../constant/constans';

const BodyWrapper = styled.div`
height:52%;
position:relative;
display:flex;
`
const Line = styled.div`
position:relative;
display:flex;
align-items:center;
padding-bottom:6px;
overflow:hidden;
padding-left:${({ paddingL }) => paddingL || 0}px;
${({ p, e, menu,fs }) => {
        let rLine = e && `
            &:before{
            position:absolute;
            ${p && e ? 'width:33%' : menu ? 'width:13%' : 'width:5%'};
            top:${fs==='24'?'47%':'36%'};
            left:0;
            content:'';
            border:2px solid #111111;
            }`
        let lLine = p && `
                justify-content:center;
                &:after{
                position:absolute;
                width:100%;
                top:47%;
                left:65%;
                content:'';
                border:2px solid  #111111;
                }`
        return rLine + lLine

    }}

`
const Seporator = styled.div`
position:relative;
height:100%;
width:2px;
&:before{
    height:80%;
    position:absolute;
    content:'';
    top:0;
    border:2px solid #111111;
}
&:after{
    height:20%;
    position:absolute;
    content:'';
    bottom:0;
    border-left:4px dotted #111111;
}
`
const TitleOptions = styled.div`
padding:10px 30px;
`


const Body = () => {



    return (
        <BodyWrapper>
            <Wrapper flex='2'>
                <Line p e fs='24'>
                    <Text display='flex' fs='24' ai='center'>Skills</Text>
                </Line>

                {skills.map(el =>
                    <Line e paddingL='20' fs='18'>
                        <Text fs='18'>{el}</Text>
                    </Line>)}
            </Wrapper>
            <Seporator></Seporator>
            <Wrapper flex='5'>
                <Wrapper >
                    <TitleOptions>
                        <Title >
                            <Text color='white'>Work experience</Text>
                        </Title>
                        {EXPERIENCE.map(el=>(
                        <List>
                             <Text>{el}</Text>
                         </List>
                        ))}
                       
                    </TitleOptions>
                    <TitleOptions>
                        <Title >
                            <Text color='white'>Personal projects</Text>
                        </Title>
                        {PERSONAL_PROJECT.map(el=>(
                        <List>
                            <Text>{el}</Text>
                        </List>
                        ))}
                        <Text></Text>
                    </TitleOptions>
                    <TitleOptions>
                        <Title >
                            <Text color='white'>In future</Text>
                        </Title>
                        {IN_FUTURE.map(el=>(
                        <List>
                            <Text>{el}</Text>
                        </List>
                        ))}
                    </TitleOptions>



                </Wrapper>


            </Wrapper>
        </BodyWrapper>
    );
};

export default Body;