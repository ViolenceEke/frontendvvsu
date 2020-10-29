export interface DataType {
  answers: Answer[]
  academ_levels: AcademLevel[]
  answer_sections: AnswerSection[]
  main_answers: MainAnswer[]
  main_questions: MainQuestion[]
  napravleniya: Napravleniya[]
  complete: boolean
  activeMainTab: activeMainTabType
}

export type instrumentType = "add" | "remove" | "edit" | null

export type activeMainTabType =
  | "направления"
  | "все вопросы"
  | "академическая степень"

export interface SearhType {
  answer?: string
  question?: string
}

export interface Answer {
  napravleniya_id: string
  section_answer_id: string
  answer: string
}

export interface AcademLevel {
  stepen_id: string
  academ_level: string
}

export interface AnswerSection {
  section_answer_id: string
  section_answer: string
}

export interface MainAnswer {
  question_id: string
  answers: string
  url: string
}

export interface MainQuestion {
  question_id: string
  questions: string
}

export interface Napravleniya {
  napravleniya_id: string
  stepen_id: string
  napravleniya: string
}
