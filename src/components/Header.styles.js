import React from "react"
import styled, { Box } from "@xstyled/styled-components"

const SocialStyled = styled(Box)`
  margin-left: xs;
  color: light.900;
  transition: medium;

  &:hover {
    color: primary.500;
  }
`

export function Social(props) {
  return <SocialStyled as="a" rel="noopener" target="_blank" {...props} />
}

export const Logo = styled(Box)`
  color: light.900;
  text-decoration: none;
  font-family: title;
  font-size: 20;
  transition: medium;

  &:hover {
    color: primary.500;
  }
`
