import React, { useState } from "react"
import { Row, Container } from "react-grid-system"
import { useStore } from "effector-react"
import { $answerGeneralIssues } from "../model/get-data"
import { Table, RowItem, TitleTable, WrapperManipulate } from "../common/ui"
import { remove } from "../utils/remove"
import { $instrument } from "../model/instrument"

export const ManipulateGeneralIssues = () => {
  const answerGeneralIssues = useStore($answerGeneralIssues)
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
          {answerGeneralIssues.map((x) => (
            <Row onClick={() => click(x.question_id)}>
              <RowItem preWrap={active === x.question_id}>
                {x?.questions?.questions}
              </RowItem>
              <RowItem preWrap={active === x.question_id}>
                {x.answers}{" "}
                {x?.url ? (
                  <a href={x.url} target="__blank">
                    {x.url}
                  </a>
                ) : (
                  ""
                )}
              </RowItem>
            </Row>
          ))}
        </Table>
      </WrapperManipulate>
    </Container>
  )
}
