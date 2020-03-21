import React from "react"
import styled, { Box } from "@xstyled/styled-components"
import { TwitterIcon, LinkedinIcon, GithubIcon, DribbbleIcon } from "./Icons"
import { Link } from "gatsby"

const iconSize = 27
const iconProps = { width: iconSize, height: iconSize }

const SocialStyled = styled(Box)`
  margin-left: xs;
  color: light.900;
  transition: medium;

  &:hover {
    color: primary.500;
  }
`

function Social(props) {
  return <SocialStyled as="a" target="_blank" rel="noopener" {...props} />
}

const Logo = styled(Box)`
  color: light.900;
  text-decoration: none;
  font-family: title;
  font-size: 20;
  transition: medium;

  &:hover {
    color: primary.500;
  }
`

export function Header() {
  return (
    <Box
      as="header"
      mt="md"
      mb="xxl"
      display="flex"
      justifyContent="space-between"
    >
      <Logo as={Link} to="/">
        {"<Théo />"}
      </Logo>
      <Box display="flex">
        <Social href="https://github.com/theo-mesnil">
          <GithubIcon {...iconProps} />
        </Social>
        <Social href="https://twitter.com/theomesnil">
          <TwitterIcon {...iconProps} />
        </Social>
        <Social href="https://dribbble.com/theomesnil">
          <DribbbleIcon {...iconProps} />
        </Social>
        <Social href="https://www.linkedin.com/in/theomesnil">
          <LinkedinIcon {...iconProps} />
        </Social>
      </Box>
    </Box>
  )
}
