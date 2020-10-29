import { createStore, createEvent } from "effector"

const $addFormOpen = createStore<boolean>(false)
const setAddFormOpen = createEvent<boolean>()
$addFormOpen.on(setAddFormOpen, (_, x) => x)

export { $addFormOpen, setAddFormOpen }
