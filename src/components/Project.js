import React from "react"
import styled, { Box } from "@xstyled/styled-components"

import { StarIcon } from "./Icons"

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: md;
  color: light.900;
  text-decoration: none;
  border-radius: lg;
  font-size: 16;
  background-color: rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  transition: medium;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`

export function Project({ children, color, link, stars, title, ...rest }) {
  return (
    <Wrapper as="a" href={link} rel="noopenner" target="_blank" {...rest}>
      <Box
        as="h4"
        color={color}
        fontFamily="title"
        fontSize={20}
        fontWeight="600"
        mb="xs"
        mt="0"
      >
        {title}
      </Box>
      {children}
      {stars !== undefined && (
        <Box
          alignItems="center"
          color={color}
          display="flex"
          justifyContent="flex-end"
          mt="auto"
          pt="sm"
        >
          {stars}
          <Box display="flex" mt="-2px" opacity="0.4" pl="xs">
            <StarIcon height={16} width={16} />
          </Box>
        </Box>
      )}
    </Wrapper>
  )
}
