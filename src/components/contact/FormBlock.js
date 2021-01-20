import React, { useState } from "react"
import styled from "styled-components"
import Dropdown from "react-dropdown"

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

  textarea {
    max-height: 200px;
  }

  label {
    font-size: 18px;
  }

  @media ${device.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      padding-right: 0.75rem;
    }
  }

  @media ${device.laptopL} {
    width: 100%;
    ${({ textArea }) => (textArea ? "padding: 0 " : "")};
  }

  padding: ${({ padding }) => (padding ? padding : "")};
`

const FormBlock = () => {
  const formOptions = [
    "Contact Reason 1",
    "Contact Reason 2",
    "Contact Reason 3",
    "Other",
  ]
  const defaultOption = formOptions[0]
  return (
    <GrayBox noMargin>
      <Title margin="0 0 2rem 0" color={theme.pink}>
        Tell us about your project and let’s create remarkable<sup>®</sup>{" "}
        together.
      </Title>

      <form
        name="Pinpoint Contact Form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Pinpoint Contact Form" />
        <FormsContainer>
          <InputContainer>
            <Input
              label="Contact Reason"
              type="dropdown"
              name="reason"
              id="reason"
            />
            {/* <Dropdown options= ></Dropdown> */}
            <Input label="Name" type="text" name="name" id="name" />
            <Input label="Email" type="email" name="email" id="email" />
            <Input label="Phone" type="phone" name="phone" id="phone" />
          </InputContainer>
          <InputContainer textArea>
            <TextArea label="Message" name="message" id="message" />
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
