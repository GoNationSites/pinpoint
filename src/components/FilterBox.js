import React from "react"
import styled from "styled-components"
import { theme, device } from "../global-styles"

import Title from "./Title"
import Up from "./icons/Up"

const Box = styled.div`
  max-width: 1600px;
  margin: auto;
  background: #f7f7f7;
  padding: 2rem 1.5rem;
  @media ${device.tablet} {
    padding: 4rem 5rem;
  }
`

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
`

const CategoryPill = styled.span`
  display: inline-block;
  color: ${theme.text};
  border-radius: 24px;
  font-weight: 300;
  border: 1px solid ${theme.text};
  padding: 0.75rem 2rem;
  margin: 1rem 2rem 1rem 0;
  cursor: pointer;

  &:hover {
    background: ${theme.alternate};
    color: white;
    border-color: ${theme.alternate};
    transition: all 0.3s;
  }
`

const ClearFiltersPill = styled.span`
  display: inline-block;
  color: white;
  border-radius: 24px;
  font-weight: 300;
  padding: 0.75rem 2rem;
  background: ${theme.alternate};
  cursor: pointer;
`

const FilterBox = () => {
  const categories = [
    "Branding + Experiential",
    "Creative Services",
    "Fabrication",
    "Signs & Vinyl Graphics",
    "Promotional Products + apparel",
    "Print Collateral + Direct Mail",
  ]
  return (
    <Box>
      <Title
        style={{
          fontFamily: "Raleway",
          fontSize: "30px",
          fontWeight: "bold",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
        }}
        color={theme.text}
      >
        <Up fill={theme.alternate} width={"50px"}></Up>
        <span style={{ paddingLeft: ".5rem", display: "inline-block" }}>
          Filter By category
        </span>
      </Title>
      <CategoriesContainer>
        {categories.map(category => (
          <CategoryPill>{category}</CategoryPill>
        ))}
      </CategoriesContainer>
      <div>
        <ClearFiltersPill>Clear Filters</ClearFiltersPill>
      </div>
    </Box>
  )
}

export default FilterBox
