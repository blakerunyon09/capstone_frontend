import React from 'react'
import Button from '@material-ui/core/Button';
import { FaPlus } from 'react-icons/fa'
import Tab from './Tab'

export default function Header({ title, button, tab, setTab, tabNames }) {
  return (
    <header className={"bg-gray-200 px-12 flex flex-row items-center justify-between"}>
      <h1 className={"text-2xl text-gray-600 font-light"} >{title}</h1>
      <Tab tab={tab} setTab={setTab} tabNames={tabNames} />
      <Button className={"bg-red-400 h-10 my-2 rounded-lg outline-none shadow-none"} variant="contained" color="primary">
        <FaPlus className={"text-xl pr-2"} />{button}
      </Button>
    </header>
  )
}
