import { createStore, createEvent } from "effector"

const $editFormData = createStore<{
  open: boolean
  answer?: string
  question?: string
  url?: string
}>({ open: false })

const editSetFormData = createEvent<{
  open: boolean
  answer?: string
  question?: string
  url?: string
}>()

$editFormData.on(editSetFormData, (_, x) => x)

export { $editFormData, editSetFormData }
