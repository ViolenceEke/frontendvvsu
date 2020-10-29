import React from "react"
import { Container } from "react-grid-system"
import styled, { css } from "styled-components"
import { Napravleniya } from "../type"
import { setNapravlenie, $napravlenie } from "../model/select-napravlenie"
import { useStore } from "effector-react"

export const Tabs: React.FC<{ data: Napravleniya[] }> = ({ data }) => {
  const napravlenie = useStore($napravlenie)
  return (
    <Wrapper>
      <Container>
        <Menu>
          {data.map((x) => (
            <Item
              active={napravlenie.napravleniya_id === x.napravleniya_id}
              onClick={() => setNapravlenie(x)}
            >
              <span>{x.napravleniya}</span>
            </Item>
          ))}
        </Menu>
      </Container>
    </Wrapper>
  )
}

const Item = styled.div<{ active?: boolean }>`
  min-width: 100px;
  height: 27px;
  background: #c4c4c4;
  margin-right: 10px;
  padding: 3px 12px;
  border-radius: 0 0 30px 0;
  cursor: pointer;
  & > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ active }) =>
      active &&
      css`
        &:after {
          content: "";
          margin-left: 10px;
          width: 14px;
          height: 14px;
          background-color: #e23636;
          border-radius: 100%;
        }
      `}
  }
`

const Wrapper = styled.div``

const Menu = styled.div`
  display: flex;
`
