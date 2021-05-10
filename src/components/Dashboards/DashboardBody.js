import React from 'react'
import { useDrop } from 'react-dnd'
import DashboardTile from './DashboardTile'

export default function DashboardBody({ dashboard }) {

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div
      className={`${isOver ? "bg-blue-100" : "bg-white"} w-11/12 h-full`}
      ref={drop}
      style={{ backgroundColor: isOver ? "yellow" : "salmon" }}
    >
      {dashboard.map(chart => {
        return <DashboardTile name={chart} />
      })}
    </div>
  )

}

