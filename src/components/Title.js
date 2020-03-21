import React from "react"
import { Box } from "@xstyled/styled-components"

export function Title({ children: [title, subtitle] }) {
  return (
    <Box fontFamily="title" mt={150}>
      <Box fontSize={80} as="h1" fontWeight="600" m={0} lineHeight="1">
        {title}
      </Box>
      {subtitle && (
        <Box
          as="h2"
          fontSize={40}
          m="0"
          fontWeight="400"
          color="primary.500"
          lineHeight="1"
        >
          {subtitle}
        </Box>
      )}
    </Box>
  )
}
