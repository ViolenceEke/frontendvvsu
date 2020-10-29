import React from "react"
import { Manipulate } from "./manipulate"
import { Menu } from "./menu"
import { $Store } from "../model/get-data"
import { useStore } from "effector-react"

export const Main = () => {
  const data = useStore($Store)
  return (
    <>
      <Menu {...data} />
      <Manipulate activeMainTab={data.activeMainTab} />
    </>
  )
}
