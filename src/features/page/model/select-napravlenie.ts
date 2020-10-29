import { createStore, createEvent } from "effector"
import { Napravleniya } from "../type"

const $napravlenie = createStore<Napravleniya>({
  napravleniya_id: "false",
  stepen_id: "false",
  napravleniya: "false",
})
const setNapravlenie = createEvent<Napravleniya>()
$napravlenie.on(setNapravlenie, (_, x) => x)

export { $napravlenie, setNapravlenie }
