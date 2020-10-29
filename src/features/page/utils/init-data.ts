import { DataType } from "../type"

export const InitData: DataType = {
  answers: [{ napravleniya_id: "", section_answer_id: "", answer: "" }],
  academ_levels: [{ stepen_id: "", academ_level: "" }],
  answer_sections: [{ section_answer_id: "", section_answer: "" }],
  main_answers: [{ question_id: "", answers: "", url: "" }],
  main_questions: [{ question_id: "", questions: "" }],
  napravleniya: [{ napravleniya_id: "", stepen_id: "", napravleniya: "" }],
  complete: false,
  activeMainTab: "направления",
}
