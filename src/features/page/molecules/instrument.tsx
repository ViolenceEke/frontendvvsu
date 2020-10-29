import React from "react"
import { Container } from "react-grid-system"
import styled, { css } from "styled-components"
import Add from "../../statick/img/add.svg"
import Edit from "../../statick/img/edit.svg"
import Remove from "../../statick/img/remove.svg"
import { useStore } from "effector-react"
import { $instrument, setInstrument } from "../model/instrument"
import { setAddFormOpen } from "../model/add-form"

export const Instrument = () => {
  const instrument = useStore($instrument)
  return (
    <Wrapper>
      <Container>
        <Menu>
          <Img
            src={Add}
            alt={"добавить"}
            active={instrument === "add"}
            onClick={() => {
              setInstrument(instrument === "add" ? null : "add")
              setAddFormOpen(true)
            }}
          />
          <Img
            src={Edit}
            alt={"изменить"}
            active={instrument === "edit"}
            onClick={() => setInstrument(instrument === "edit" ? null : "edit")}
          />
          <Img
            src={Remove}
            alt={"удалить"}
            active={instrument === "remove"}
            onClick={() =>
              setInstrument(instrument === "remove" ? null : "remove")
            }
          />
        </Menu>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #716868;
`

const Img = styled.img<{ active?: boolean }>`
  padding: 15px;
  background: #716868;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      opacity: 0.5;
    `}
`

const Menu = styled.div`
  display: flex;
`
