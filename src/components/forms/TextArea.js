import React from "react"
import styled from "styled-components"

const Label = styled.label`
  color: #5c666f;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;

  > div {
    margin-top: 1rem;
  }
`

const StyledInput = styled.textarea`
  height: 275px;
  width: 100%;
  border: 1px solid #d0d2d3;
  border-radius: 15px;
  background: white;
  font-size: 25px;
  padding: 0 1rem;
`

const InputWrapper = styled.div`
  padding: 1.5rem 0;
  width: 100%;
`

const TextArea = ({ label = "", name }) => {
  return (
    <InputWrapper>
      <Label>
        {label}
        <div>
          <StyledInput
            name={name}
            // value={value}
            // onChange={onChange}
          />
        </div>
      </Label>
    </InputWrapper>
  )
}

export default TextArea
