import React from "react"
import { Box } from "@xstyled/styled-components"

export function Centered({ children }) {
  return (
    <Box margin="0 auto" maxWidth={900} px={30}>
      {children}
    </Box>
  )
}
