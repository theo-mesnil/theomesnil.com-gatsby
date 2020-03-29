import React from "react"
import { Box } from "@xstyled/styled-components"

import { Layout } from "../components/layout"
import { Title } from "../components/Title"
import { Link } from "../components/Link"
import { openSourceProjects } from "../data/open-source-project"
import { ressources } from "../data/ressources"
import { Project } from "../components/Project"

function Home() {
  return (
    <Layout title="Hi!">
      <Title>
        <>Hi!</>
        <>I‘m Théo :)</>
      </Title>
      <Box maxWidth={500} mt="xxl">
        I‘m a front-end developer based in Paris currently at{" "}
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
      <Box mt={100}>
        <Box as="h3" fontWeight="600" mb="xl" mt="0">
          Open source projects
        </Box>
        <Box row>
          {openSourceProjects.map(
            ({ color, description, name, repository, stars }) => (
              <Box
                col={{ xs: 1, md: 1 / 2, lg: 1 / 3 }}
                key={repository}
                pb="md"
                pr="md"
              >
                <Project
                  color={color}
                  href={`https://github.com/${repository}`}
                  stars={stars}
                  title={name}
                >
                  {description}
                </Project>
              </Box>
            )
          )}
        </Box>
        <Box mt="xxl">
          <Box as="h3" fontWeight="600" mb="xl" mt="0">
            Ressources
          </Box>
          <Box alignItems="stretch" row>
            {ressources.map(({ color, description, name, repository }) => (
              <Box col={{ xs: 1, lg: 2 / 3 }} key={repository} pb="md" pr="md">
                <Project
                  color={color}
                  href={`https://theomesnil.com/demo/${repository}`}
                  title={name}
                >
                  {description}
                </Project>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
