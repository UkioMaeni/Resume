import React from 'react';
import styled from 'styled-components';
import Link from '../../UI/Components/Link';
import Photo from '../../UI/Components/Photo';
import Text from '../../UI/Components/Text';
import Wrapper from '../../UI/Components/Wrapper';

const FooterWrapper = styled.div`

display:flex;
align-items:center;
justify-content:space-between;
position:absolute;
bottom:0;
background:#111111;
padding: 0 30px;
height:12%;
width:100%;
`

const PhotoOptions = styled.div`
&:hover{
    transform:scale(1.3)
}
cursor:pointer;
margin:0 6px;
`

const MarginX = styled.div`
margin:0 10px;
padding-bottom:10px;
`

const Footer = () => {
    const yyyy = new Date().getFullYear()
    return (
        <FooterWrapper>
            <Wrapper>
                <Text color='white'>Resume {yyyy}</Text>
            </Wrapper>
            <Wrapper display='flex' ai='center' >
                <MarginX>
                    <Text color='white' fs='24'>Link:</Text>
                </MarginX>
                <Wrapper display='flex'>
                    <Link href='https://t.me/teploe_moloco'>
                        <PhotoOptions>
                            <Photo src='https://cdn-icons-png.flaticon.com/512/2111/2111646.png' w='30' h='30' />
                        </PhotoOptions>
                    </Link>
                    <Link href='https://github.com/UkioMaeni'>
                        <PhotoOptions>
                            <Photo src='https://cdn-icons-png.flaticon.com/512/5968/5968866.png' w='30' h='30' />
                        </PhotoOptions>
                    </Link>
                    <Link href='https://vk.com/bindjs'>
                        <PhotoOptions>
                            <Photo src='https://pngicon.ru/file/uploads/vk.png' w='30' h='30' />
                        </PhotoOptions>
                    </Link>
                </Wrapper>
            </Wrapper>
        </FooterWrapper>
    );
};

export default Footer;