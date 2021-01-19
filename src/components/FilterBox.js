import React, { useState } from "react"
import styled from "styled-components"
import { theme, device } from "../global-styles"
import Slide from "react-reveal/Slide"

import Title from "./Title"
import Up from "./icons/Up"

const Box = styled.div`
  max-width: 1600px;
  margin: auto;
  background: #f7f7f7;
  padding: 2rem 1.5rem;
  @media ${device.tablet} {
    padding: 1rem 5rem;
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
  font-weight: 500;
  border: 1px solid ${theme.text};
  padding: 0.25rem 1rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  cursor: pointer;

  ${({ isActive }) =>
    isActive
      ? `
    background: ${theme.alternate};
    color: white;
    border-color: ${theme.alternate};
  `
      : ""}

  @media ${device.tablet} {
    padding: 0.75rem 2rem;
    margin: 1rem 2rem 1rem 0;
  }

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

const FilterBox = ({ setActiveFilters, activeFilters, categories }) => {
  const [showFilter, setShowFilter] = useState(false)

  const handleClick = category => {
    if (activeFilters.includes(category)) {
      // remove it
      setActiveFilters([...activeFilters].filter(f => f !== category))
    } else {
      setActiveFilters([...activeFilters, category])
      //add it
    }
  }

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
          cursor: "pointer",
        }}
        color={theme.text}
      >
        <span
          style={{
            transform: !showFilter ? "" : "rotate(180deg)",
            transition: "all .3s",
          }}
        >
          <Up
            onClick={() => setShowFilter(!showFilter)}
            fill={theme.alternate}
            width={"50px"}
          ></Up>
        </span>

        <span
          onClick={() => setShowFilter(!showFilter)}
          style={{ paddingLeft: ".5rem", display: "inline-block" }}
        >
          Filter By category
        </span>
      </Title>

      <Slide bottom when={showFilter} duration={1000}>
        {showFilter ? (
          <Box>
            <CategoriesContainer>
              {categories.map(category => (
                <CategoryPill
                  isActive={activeFilters.includes(category)}
                  onClick={() => handleClick(category)}
                >
                  {category}
                </CategoryPill>
              ))}
            </CategoriesContainer>

            <div>
              <ClearFiltersPill onClick={() => setActiveFilters([])}>
                Clear Filters
              </ClearFiltersPill>
            </div>
          </Box>
        ) : (
          ""
        )}
      </Slide>
    </Box>
  )
}

export default FilterBox
