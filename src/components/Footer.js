import React from "react"
import styled, { Box } from "@xstyled/styled-components"

import profilePicture from "../images/profile.jpg"

import { TwitterIcon } from "./Icons"
import { Social } from "./Header.styles"

const Face = styled.div`
  width: 30;
  height: 30;
  overflow: hidden;
  border-radius: 15;
  margin-left: sm;
  position: relative;
`

const MyFace = styled.img`
  width: 40;
  height: 40;
  position: relative;
  transform: translate3d(-5px, 0, 0);
  transition: medium;
  cursor: none;

  &:hover {
    transform: translate3d(-5px, -10px, 0);
  }
`

export function Footer() {
  return (
    <Box
      display="flex"
      fontSize={14}
      justifyContent="space-between"
      my="xxl"
      pt="xxl"
    >
      <Social
        alignItems="center"
        display="inline-flex"
        href="https://twitter.com/theomesnil"
      >
        <TwitterIcon height={20} width={20} />
        <Box as="span" ml="xs">
          Follow me on twitter
        </Box>
      </Social>
      <Box alignItems="center" display="flex">
        Théo Mesnil
        <Face>
          <MyFace alt="My face" src={profilePicture} />
        </Face>
      </Box>
    </Box>
  )
}
