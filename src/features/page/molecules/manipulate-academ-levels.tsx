import React, { useState } from "react"
import { Row, Container } from "react-grid-system"
import { useStore } from "effector-react"
import { $academLevels } from "../model/get-data"
import { Table, RowItem, TitleTable, WrapperManipulate } from "../common/ui"
import { remove } from "../utils/remove"
import { $instrument } from "../model/instrument"

export const ManipulateAcademLevels = () => {
  const academLevels = useStore($academLevels)
  const [active, setActive] = useState<React.ReactText | null>(null)
  const instrument = useStore($instrument)

  const click = (id: React.ReactText) => {
    if (!instrument) {
      setActive(active === id ? null : id)
    } else {
      if (instrument === "remove") remove()
    }
  }
  return (
    <Container>
      <WrapperManipulate>
        <Table>
          <Row style={{ background: "#E5E5E5" }}>
            <RowItem>
              <TitleTable>Вопросы</TitleTable>
            </RowItem>
            <RowItem>
              <TitleTable>Ответы</TitleTable>
            </RowItem>
          </Row>
          {academLevels.map((x) => (
            <Row onClick={() => click(x.stepen_id)}>
              <RowItem preWrap={active === x.stepen_id}>
                {x?.academ_level}
              </RowItem>
            </Row>
          ))}
        </Table>
      </WrapperManipulate>
    </Container>
  )
}
