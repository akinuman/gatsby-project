import styled from "styled-components"
import TransitionLink from "gatsby-plugin-transition-link"

export const HeaderWrap = styled.header`
  font-family: "Poppins";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.headerSize};
  display: flex;
  align-items: center;
  color: "#000";
  justify-content: space-between;
  padding: 2vh 5vh;
  box-sizing: border-box;
  mix-blend-mode: difference;
  z-index: 999;
  transition: padding 1s ease-out;
  @media (max-width: 350px) {
    padding: 0 10px;
  }
`

export const Logo = styled(TransitionLink)`
  font-family: "Poppins";
  position: relative;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  user-select: none;
  text-decoration: none;
  color: "#fff";
  transition: font-size 1s ease-out;
  @media (max-width: 350px) {
    font-size: 2rem;
  }
`

export const NavWrapper = styled.nav`
  div {
    button {
      font-size: 1.4rem;
      display: inline-block;
      padding: 1rem;
      list-style: none;
      margin-right: 3rem;
      background: transparent;
      border: none;
      outline: none;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 450px) {
    div {
      button {
        padding: 1rem 0;
        font-size: 1.2rem;
        margin-right: 1rem;
      }
    }
  }
`

export const NavLink = styled(TransitionLink)`
  text-decoration: none;
  color: #000;
  opacity: 0.6;
  user-select: none;
  transition: all 1s ease;
  text-transform: uppercase;
  &.transition-link {
    font-weight: 500;
  }
  &.active {
    color: #000;
    opacity: 1;
    font-weight: 600;
  }
`
