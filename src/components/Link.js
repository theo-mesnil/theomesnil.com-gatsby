import React from "react"
import { Link as LinkGatsby } from "gatsby"
import styled from "@xstyled/styled-components"

const LinkStyled = styled.a`
  position: relative;
  display: inline-flex;
  color: light.900;
  text-decoration: none;
  transition: medium;

  &::after {
    position: absolute;
    z-index: -1;
    top: calc(100% - 2px);
    left: 0;
    width: 100%;
    height: 2px;
    background-color: primary.500;
    content: "";
    transition: medium;
  }

  &:hover {
    &::after {
      top: 20%;
      height: 80%;
    }
  }
`

export function Link({ children, href, to, variant, ...props }) {
  return (
    <LinkStyled as={to ? LinkGatsby : undefined} href={href} to={to} {...props}>
      {children}
    </LinkStyled>
  )
}
