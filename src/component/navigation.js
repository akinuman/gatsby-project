import React from "react";
import { useGlobalDispatchContext } from "../context/globalContext";
//Context
//Transition
//Styled Components
import { NavWrapper, NavLink } from "./../styles/headerStyles";
//Data
import {
  homeExit,
  homeEnter,
  aboutOtherExit,
  worksOtherExit,
  worksEnter,
} from "./transition/homeEnter";

const Navigation = () => {
  const globalDispath = useGlobalDispatchContext();

  const pageChanger = (str) => {
    globalDispath({
      type: "CURRENT_PAGE",
      payload: str,
    });
  };

  return (
    <NavWrapper>
      <div>
        <button
        //   onMouseEnter={_ => onCursor("pointer")}
        //   onMouseLeave={_ => onCursor()}
        >
          <NavLink
            to="/"
            activeClassName="active"
            className="transition-link"
            exit={{
              trigger: ({ node, e, exit, entry }) => {
                homeExit(node, e, exit, entry);
                pageChanger("home");
              },
              length: 1,
            }}
            entry={{
              delay: 1,
              trigger: ({ node, e, exit, entry }) =>
                homeEnter(node, e, exit, entry),
            }}
          >
            HOME
          </NavLink>
        </button>
        <button
        //   onMouseEnter={_ => onCursor("pointer")}
        //   onMouseLeave={_ => onCursor()}
        >
          <NavLink
            to="/works/"
            activeClassName="active"
            className="transition-link"
            exit={{
              trigger: ({ node, e, exit, entry }) =>
                worksOtherExit(node, e, exit, entry),
              length: 1.45,
            }}
            entry={{
              delay: 1.45,
              trigger: ({ node, e, exit, entry }) =>
                {worksEnter(node, e, exit, entry)
                pageChanger("works")},
            }}
          >
            WORKS
          </NavLink>
        </button>
        <button
        //   onMouseEnter={_ => onCursor("pointer")}
        //   onMouseLeave={_ => onCursor()}
        >
          <NavLink
            to="/aboutMe/"
            activeClassName="active"
            className="transition-link"
            exit={{
              trigger: ({ node, e, exit, entry }) =>
                aboutOtherExit(node, e, exit, entry),
              length: 2,
            }}
            entry={{
              delay: 2,
              // trigger: ({ node, e, exit, entry }) =>
              //   aboutEnter(node, e, exit, entry),
            }}
          >
            ABOUT
          </NavLink>
        </button>
      </div>
    </NavWrapper>
  );
};

export default Navigation;
