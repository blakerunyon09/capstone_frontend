import React from 'react'
import { useDrag } from 'react-dnd'
import { BsGraphUp } from 'react-icons/bs'

export default function Card({ name, setDashboard, dashboard }) {

  const [{ isDragging }, dragRef] = useDrag({
    type: "card",
    item: {name: name},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item) => {
      setDashboard([
        ...dashboard,
        item.name
      ])
    }
  })

  return (
    <div
      className={"flex flex-row items-center p-4 bg-gray-500 text-white font-bold border-b border-gray-400 hover:bg-gray-800"}
      ref={dragRef}
      style={{
        backgroundColor: isDragging ? "purple" : "grey",
      }}
    >
      <BsGraphUp className={"text-xl mr-2"} />
      <div>{name}</div>
    </div>
  )
}
