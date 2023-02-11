import styled from "styled-components";
import Body from "../Models/Components/Body";
import Footer from "../Models/Components/Footer";
import Header from "../Models/Components/Header";

const AppWrapper=styled.div`
width:50vw;
height:100vh;
border-left:3px solid #111111;
border-right:3px solid #111111;
border-top:3px solid #111111;
position:relative;
`

function App() {
  return (
    <AppWrapper>
      <Header/>
      <Body/>
      <Footer/>
    </AppWrapper>
  );
}

export default App;
