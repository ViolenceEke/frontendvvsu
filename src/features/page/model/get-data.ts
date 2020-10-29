import {
  createStore,
  createEffect,
  createEvent,
  Store,
  combine,
} from "effector"
import { DataType, activeMainTabType } from "../type"
import { InitData } from "../utils/init-data"
import { $napravlenie } from "./select-napravlenie"

const $Store = createStore<DataType>(InitData)
const mainTabSet = createEvent<activeMainTabType>()
$Store.on(mainTabSet, (state, tab) => ({ ...state, activeMainTab: tab }))

const DataInit = createEffect<void, DataType, any>({
  handler: async () => {
    const req = await fetch(`http://bot/details.php`).then((x) => x.json())
    return { ...req, complete: true }
  },
})
$Store.on(DataInit.doneData, (state, data) => {
  return {
    ...state,
    ...data,
    main_questions: data.main_questions.sort((a, b) =>
      a.questions.length > b.questions.length ? 1 : -1
    ),
  }
})
DataInit()

const $answerNapravlenie = combine({
  store: $Store,
  napravlenie: $napravlenie,
}).map(
  ({ store: { answer_sections, answers }, napravlenie: { napravleniya_id } }) =>
    answer_sections
      .map((x) => ({
        ...x,
        answers: answers.find(
          (q) =>
            q.section_answer_id === x.section_answer_id &&
            q.napravleniya_id === napravleniya_id
        ),
      }))
      .filter((x) => !!x.answers)
)

const $answerGeneralIssues = $Store.map(({ main_answers, main_questions }) =>
  main_answers
    .map((x) => ({
      ...x,
      questions: main_questions.find((q) => q.question_id === x.question_id),
    }))
    .filter((x) => !!x.questions)
)

const $academLevels = $Store.map((x) => x.academ_levels)
export {
  $Store,
  $answerNapravlenie,
  mainTabSet,
  $answerGeneralIssues,
  $academLevels,
}
