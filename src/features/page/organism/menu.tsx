import React from "react"
import { Nav } from "../molecules/nav"
import { Instrument } from "../molecules/instrument"
import { Tabs } from "../molecules/tabs"
import { DataType } from "../type"

export const Menu: React.FC<DataType> = ({ napravleniya, activeMainTab }) => {
  return (
    <>
      <Nav data={activeMainTab} />
      <Instrument />
      {activeMainTab === "направления" && <Tabs data={napravleniya} />}
    </>
  )
}
