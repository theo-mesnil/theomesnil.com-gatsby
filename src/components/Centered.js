import React from "react"
import { Box } from "@xstyled/styled-components"

export function Centered({ children }) {
  return (
    <Box maxWidth={1000} margin="0 auto" px={30}>
      {children}
    </Box>
  )
}
