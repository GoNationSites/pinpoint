import React from "react"
import styled from "styled-components"
import { theme } from "../../global-styles"

import Input from "../forms/Input"
import TextArea from "../forms/TextArea"
import GrayBox from "../GrayBox"
import Title from "../Title"
import Button from "../button"

const FormsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  padding: ${({ padding }) => (padding ? padding : "")};
`

const FormBlock = () => {
  return (
    <GrayBox>
      <Title margin="0 0 2rem 0" color={theme.pink}>
        Tell us about your project and let’s create remarkable® together.
      </Title>

      <form>
        <FormsContainer>
          <InputContainer>
            <Input label="Contact Reason" type="dropdown" name="reason" />
            <Input label="Name" type="text" name="name" />
            <Input label="Email" type="email" name="email" />
            <Input label="Phone" type="phone" name="phone" />
          </InputContainer>
          <InputContainer padding="0 0 0 4rem">
            <TextArea label="Message" name="phone" />
            <Button
              iconColor={theme.pink}
              variation="fill"
              bg={theme.pink}
              color="white"
              noHover
            >
              Submit
            </Button>
          </InputContainer>
        </FormsContainer>
      </form>
    </GrayBox>
  )
}

export default FormBlock