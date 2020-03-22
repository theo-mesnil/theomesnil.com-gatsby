import React from "react"
import styled, { th, css, Box } from "@xstyled/styled-components"

import { StarIcon } from "./Icons"

const ProjectStyled = styled(Box)(
  ({ colorProject }) => css`
    display: flex;
    flex-direction: column;
    color: light.900;
    text-decoration: none;
    border-radius: lg;
    height: 150;
    font-size: 16;
    padding: md;
    transition: medium;
    background-color: rgba(255, 255, 255, 0.05);

    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
    }
  `
)

export function Project({ color, title, link, children, stars, ...rest }) {
  // alert(color)
  return (
    <ProjectStyled
      as="a"
      href={link}
      target="_blank"
      rel="noopenner"
      colorProject={color}
      {...rest}
    >
      <Box as="h4" mt="0" fontWeight="600" fontSize={20} mb="xs" color={color}>
        {title}
      </Box>
      {children}
      <Box
        display="flex"
        alignItems="center"
        mt="auto"
        justifyContent="flex-end"
        color={color}
      >
        {stars}
        <Box display="flex" pl="xs" opacity="0.4" mt="-2px">
          <StarIcon width={16} height={16} />
        </Box>
      </Box>
    </ProjectStyled>
  )
}
