import React from "react"
import { Link } from "gatsby"
import { Box } from "@xstyled/styled-components"

const iconSize = 27
const iconProps = { width: iconSize, height: iconSize }

import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons"
import * as S from "./Header.styles"

export function Header() {
  return (
    <Box
      alignItems="center"
      as="header"
      backgroundColor="dark.900"
      display="flex"
      justifyContent="space-between"
      pb="md"
      position="sticky"
      pt="lg"
      top="0"
      zIndex="1"
    >
      <S.Logo as={Link} to="/">
        {"<Théo />"}
      </S.Logo>
      <Box display="flex">
        <S.Social href="https://github.com/theo-mesnil">
          <GithubIcon {...iconProps} />
        </S.Social>
        <S.Social href="https://twitter.com/theomesnil">
          <TwitterIcon {...iconProps} />
        </S.Social>
        <S.Social href="https://dribbble.com/theomesnil">
          <DribbbleIcon {...iconProps} />
        </S.Social>
        <S.Social href="https://www.linkedin.com/in/theomesnil">
          <LinkedinIcon {...iconProps} />
        </S.Social>
      </Box>
    </Box>
  )
}
