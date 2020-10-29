import React from "react"
import { Container } from "react-grid-system"
import styled, { css } from "styled-components"
import { activeMainTabType } from "../type"
import { mainTabSet } from "../model/get-data"

export const Nav: React.FC<{ data: activeMainTabType }> = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Menu>
          <MenuItem
            active={data === "направления"}
            onClick={() => mainTabSet("направления")}
          >
            ВОПРОСЫ-ОТВЕТЫ ПО НАПРАВЛЕНИЯМ
          </MenuItem>
          <MenuItem
            active={data === "все вопросы"}
            onClick={() => mainTabSet("все вопросы")}
          >
            ОБЩИЕ ВОПРОСЫ- ОБЩИЕ ОТВЕТЫ
          </MenuItem>
          <MenuItem
            active={data === "академическая степень"}
            onClick={() => mainTabSet("академическая степень")}
          >
            АКАДЕМ.СТЕПЕНЬ- НАПРАВЛЕНИЯ
          </MenuItem>
        </Menu>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #8e9277;
`

const Menu = styled.div`
  padding: 12px;
  display: flex;
`

const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  text-transform: uppercase;
  margin-right: 10px;
  border-right: 1px solid black;
  padding-right: 10px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      opacity: 0.5;
    `}
  &:last-child {
    margin-right: 0;
    border-right: none;
    padding-right: 0;
  }
`
