import React from "react";
import styled from "styled-components";
import Layout from "../component/layout";
import WallToHome from "../component/transition/wallToHome";
import WallToWorks from "../component/transition/wallToWorks";

const AboutMe = () => {
  return (
    <>
      <Layout>
        <WallToWorks />
        <WallToHome />
            <AboutMeContainer>
                <AboutMain />
            </AboutMeContainer>
      </Layout>
    </>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  height: 100vh;
  widht: 100vw;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutMain = styled.div`
    height: 200px;
    width: 250px;
    background: yellow;    
`
