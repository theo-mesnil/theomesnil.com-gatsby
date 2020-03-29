import React from "react"
import { Box } from "@xstyled/styled-components"

export function Title({ children: [title, subtitle] }) {
  return (
    <Box fontFamily="title" mt={150}>
      <Box as="h1" fontSize={80} fontWeight="600" lineHeight="1" m={0}>
        {title}
      </Box>
      {subtitle && (
        <Box
          as="h2"
          color="primary.500"
          fontSize={40}
          fontWeight="400"
          lineHeight="1"
          m="0"
        >
          {subtitle}
        </Box>
      )}
    </Box>
  )
}
