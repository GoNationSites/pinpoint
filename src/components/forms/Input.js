import React from "react"
import styled from "styled-components"
import { device } from "../../global-styles"

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
  @media ${device.mobileL} {
    width: 50%;
  }
`

const Input = ({ label = "", type = "text", name = { name } }) => {
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
