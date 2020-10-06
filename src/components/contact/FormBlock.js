import React from "react"
import styled from "styled-components"
import { theme, device } from "../../global-styles"

import Input from "../forms/Input"
import TextArea from "../forms/TextArea"
import GrayBox from "../GrayBox"
import Title from "../Title"
import Button from "../button"

const FormsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media ${device.laptopL} {
    flex-direction: row;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      padding-right: 0.75rem;
    }
  }

  /* @media ${device.laptop} {
    width: 50%;
    ${({ textArea }) =>
    textArea ? "padding: 0 0 0 2rem" : ""};
  } */

  @media ${device.laptopL} {
    width: 100%;
    ${({ textArea }) => (textArea ? "padding: 0 " : "")};
  }

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
          <InputContainer textArea>
            <TextArea label="Message" name="phone" />
          </InputContainer>
          <Button
            iconColor={"#fff"}
            variation="fill"
            bg={theme.pink}
            color="white"
            noHover
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            Submit
          </Button>
        </FormsContainer>
      </form>
    </GrayBox>
  )
}

export default FormBlock
