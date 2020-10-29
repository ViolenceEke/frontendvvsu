import React, { useState } from "react"
import { Row, Container } from "react-grid-system"
import { useStore } from "effector-react"
import { $answerNapravlenie } from "../model/get-data"
import { Table, RowItem, TitleTable, WrapperManipulate } from "../common/ui"
import { $instrument } from "../model/instrument"
import { remove } from "../utils/remove"
import { editSetFormData } from "../model/edit.form"

export const ManipulateNapravlenie = () => {
  const answerNapravlenie = useStore($answerNapravlenie)
  const [active, setActive] = useState<React.ReactText | null>(null)
  const instrument = useStore($instrument)
  const click = ({
    id,
    question,
    answer,
  }: {
    id: React.ReactText
    question?: string
    answer?: string
  }) => {
    if (!instrument) {
      setActive(active === id ? null : id)
    } else {
      if (instrument === "remove") remove()
      if (instrument === "edit")
        editSetFormData({ open: true, question, answer })
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
          {answerNapravlenie.map((x) => (
            <Row
              onClick={() =>
                click({
                  id: x.section_answer_id,
                  question: x.section_answer,
                  answer: x.answers?.answer,
                })
              }
            >
              <RowItem preWrap={active === x.section_answer_id}>
                {x.section_answer}
              </RowItem>
              <RowItem preWrap={active === x.section_answer_id}>
                {x.answers?.answer}
              </RowItem>
            </Row>
          ))}
        </Table>
      </WrapperManipulate>
    </Container>
  )
}
