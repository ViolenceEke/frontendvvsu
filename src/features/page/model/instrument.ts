import { createStore, createEvent } from "effector"
import { Napravleniya, instrumentType } from "../type"

const $instrument = createStore<instrumentType>(null)
const setInstrument = createEvent<instrumentType>()
$instrument.on(setInstrument, (_, x) => x)

export { $instrument, setInstrument }
