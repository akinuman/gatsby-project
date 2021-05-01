import React from "react";
import styled from "styled-components";
import Layout from "../component/layout";
import WallToAbout from "../component/transition/wallToAbout";
import WallToHome from "../component/transition/wallToHome";

const WorksPage = () => {
//   const worksPage = useRef(null);
//   useEffect(() => {
//     worksEnter(worksPage.current);
//   }, []);
  return (
    <>
      <Layout>
        <WallToAbout />
        <WallToHome />
        <WorksContainer>
          <AboutMain />
        </WorksContainer>
      </Layout>
    </>
  );
};

export default WorksPage;

const WorksContainer = styled.div`
  height: 100vh;
  widht: 100vw;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutMain = styled.div`
  height: 200px;
  width: 250px;
  background: yellow;
`;
