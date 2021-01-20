import React from "react"
import styled from "styled-components"
import Dropdown from "react-dropdown"
import { device } from "../../global-styles"
import "react-dropdown/style.css"

const Label = styled.label`
  color: #5c666f;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;

  > div {
    margin-top: 1rem;
  }
`

const StyledInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #d0d2d3;
  border-radius: 15px;
  background: white;
  font-size: 25px;
  padding: 0 1rem;
  @media ${device.laptopL} {
    height: 63px;
  }
`

const InputWrapper = styled.div`
  padding: 1.5rem 0;
  .Dropdown-control {
    height: 45px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    @media ${device.laptopL} {
      height: 63px;
    }
  }
  .Dropdown-arrow {
    top: 19px;
    @media ${device.laptopL} {
      top: 26px;
    }
  }

  /* .myClassName {
    height: 45px;
    width: 100%;
    border: 1px solid #d0d2d3;
    border-radius: 15px;
    background: white;
    font-size: 25px;
    padding: 0 1rem;
    @media ${device.laptopL} {
      height: 63px;
    }
  } */
  @media ${device.mobileL} {
    width: 50%;
  }
`

const Input = ({ label = "", type = "text", name = { name } }) => {
  const formOptions = [
    "Contact Reason 1",
    "Contact Reason 2",
    "Contact Reason 3",
    "Other",
  ]
  const defaultOption = formOptions[0]
  if (type === "dropdown") {
    return (
      <InputWrapper>
        <Label>
          {label}
          <div>
            <Dropdown
              className="myClassName"
              options={formOptions}
              value={defaultOption}
            ></Dropdown>
          </div>
        </Label>
      </InputWrapper>
    )
  }
  return (
    <InputWrapper>
      <Label>
        {label}
        <div>
          <StyledInput type={type} name={name} />
        </div>
      </Label>
    </InputWrapper>
  )
}

export default Input
