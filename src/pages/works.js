import React, { useEffect, useRef } from "react";
import Layout from "../component/layout";
import { worksEnter } from "../component/transition/homeEnter";
import WallToAbout from "../component/transition/wallToAbout";
import WallToHome from "../component/transition/wallToHome";
import WorkMain from "../component/work/workMain";
import { useGlobalDispatchContext } from "../context/globalContext";
import { WorksProvider } from "../context/worksContext";
import { WorksWrapper, HiddenPage } from "./../styles/worksStyle";

const WorksPage = () => {
  const globalDispath = useGlobalDispatchContext();
  const change = (str) => {
    globalDispath({
      type: "CURRENT_PAGE",
      payload: str,
    });
  };
  const worksPage = useRef(null);
  
  useEffect(() => {
    change("works");
    worksEnter(worksPage.current);
    // eslint-disable-next-line
  }, []);
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
