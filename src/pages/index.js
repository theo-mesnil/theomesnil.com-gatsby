import React from "react"
import { Box } from "@xstyled/styled-components"
import { Layout } from "../components/layout"
import { Title } from "../components/Title"
import { Link } from "../components/Link"

// import profilePicture from "../images/profile.jpg"
import { openSourceProjects } from "../data/open-source-project"
import { Project } from "../components/Project"

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
        . I love to create interfaces and design system with React and Styled
        components.
      </Box>
      {/* <Box width={200} height={200} borderRadius={100} overflow="hidden">
        <img src={profilePicture} />
      </Box> */}
      <Box mt={100}>
        <Box as="h3" fontWeight="600" mt="0" mb="xl">
          Open source projects
        </Box>
        <Box row>
          {openSourceProjects.map(
            ({ name, repository, description, stars, color }) => (
              <Project
                title={name}
                col={{ xs: 1, md: 1 / 2, lg: 1 / 3 }}
                href={`https://github.com/${repository}`}
                color={color}
                stars={stars}
              >
                {description}
              </Project>
            )
          )}
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
