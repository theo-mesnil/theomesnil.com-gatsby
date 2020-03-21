import React from "react"
import styled, { css, Box } from "@xstyled/styled-components"
import { Layout } from "../components/layout"
import { Title } from "../components/Title"
import { Link } from "../components/Link"

import profilePicture from "../images/profile.jpg"

function Home() {
  return (
    <Layout title="Hi!">
      <Title>
        <>Hi!</>
        <>I'm Théo :)</>
      </Title>
      <Box maxWidth={500} mt="xxl">
        I'm a front-end developer based in Paris currently at{" "}
        <Link href="https://www.welcometothejungle.com" target="_blank">
          Welcome to the jungle
        </Link>
        , and previously at{" "}
        <Link href="https://www.leboncoin.fr" target="_blank">
          Leboncoin
        </Link>{" "}
        and{" "}
        <Link href="https://www.mycanal.com" target="_blank">
          Canalplus
        </Link>
        . I love to create interfaces and design system.
      </Box>
      <Box width={200} height={200} borderRadius={100} overflow="hidden">
        <img src={profilePicture} />
      </Box>
    </Layout>
  )
}

export default Home
