import React from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider, createGlobalStyle } from "@xstyled/styled-components"

import { theme } from "../theme"
import { Header } from "./Header"
import { Centered } from "./Centered"
import { Footer } from "./Footer"
import { Seo } from "./Seo"

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: primary.500;
    color: light.900;
  }

  body {
    background-color: dark.900;
    color: light.900;
    font-family: title;
    font-size: 18;
    line-height: 1.4;
  }

  img {
    max-width: 100%;
  }
`

export function Layout({ children, title }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Centered>
          <Seo title={title} />
          <Header />
          {children}
          <Footer />
        </Centered>
      </ThemeProvider>
    </>
  )
}
