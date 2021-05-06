import React, {useEffect, useRef} from "react";
import Layout from "../component/layout";
import { worksEnter } from "../component/transition/homeEnter";
import WallToAbout from "../component/transition/wallToAbout";
import WallToHome from "../component/transition/wallToHome";
import WorkMain from "../component/work/workMain";
import { WorksProvider } from "../context/worksContext";
import { WorksWrapper, HiddenPage } from "./../styles/worksStyle"

const WorksPage = () => {

  const worksPage = useRef(null)
  useEffect(() => {
    worksEnter(worksPage.current)
  }, [])

  return (
    <>
      <Layout>
        <WallToAbout />
        <WallToHome />
        <WorksProvider>
          <WorksWrapper className="globalContainer" ref={worksPage}>
            <WorkMain />
            <HiddenPage className="hidden-page" />  
          </WorksWrapper>
        </WorksProvider>
      </Layout>
    </>
  );
};

export default WorksPage;


