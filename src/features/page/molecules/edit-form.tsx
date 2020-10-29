/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { Form, Field } from "react-final-form"
import styled from "styled-components"
import { useStore } from "effector-react"
import { setInstrument } from "../model/instrument"
import { $editFormData, editSetFormData } from "../model/edit.form"

const onSubmit = async (values: any) => {
  window.alert(JSON.stringify(values))
}

export const EditForm = () => {
  const editFormData = useStore($editFormData)
  if (!editFormData.open) return null
  return (
    <>
      <Wrapper>
        <H1>Редактировать элемент</H1>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            question: editFormData?.question,
            answer: editFormData?.answer,
            url: editFormData?.url,
          }}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div>Вопрос</div>
                <Field
                  style={{ width: "700px", height: "150px" }}
                  name="question"
                  component="textarea"
                />
              </div>
              <div>
                <div>Ответ</div>
                <Field
                  style={{ width: "700px", height: "150px" }}
                  name="answer"
                  component="textarea"
                />
              </div>
              <div>
                <div>URL</div>
                <Field
                  style={{ width: "700px", height: "25px" }}
                  name="url"
                  component="textarea"
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Отправить
                </button>
              </div>
            </form>
          )}
        />
      </Wrapper>
      <Out
        onClick={() => {
          setInstrument(null)
          editSetFormData({ open: false })
        }}
      />
    </>
  )
}

const Out = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
`

const H1 = styled.h1`
  margin-top: 0;
`

const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  width: 900px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  max-height: 90vh;
  overflow-y: auto;
`
