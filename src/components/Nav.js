import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemIcon } from '@material-ui/core/';
import { CgHome, CgAlignLeft, CgBrowser } from "react-icons/cg";


export default function Nav() {

  const [selected, setSelected] = useState(0)

  return (
    <nav>
    <List className={"pt-4"}>
      <Link to="/app">
        <ListItem 
          classes={{ selected: "selectedSideNav" }}
          selected={selected === 0}
          onClick={() => setSelected(0)}
          button
        >
          <ListItemIcon ><CgHome className={'text-3xl mx-auto my-2 text-gray-200'} /></ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/app/dashboards">
        <ListItem 
          classes={{ selected: "selectedSideNav" }}
          selected={selected === 1}
          onClick={() => setSelected(1)}
          button
        >
          <ListItemIcon><CgAlignLeft className={'text-3xl mx-auto my-2 text-gray-200'} /></ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/app/integrations">
        <ListItem 
          classes={{ selected: "selectedSideNav" }}
          selected={selected === 2}
          onClick={() => setSelected(2)}
          button
        >
          <ListItemIcon><CgBrowser className={'text-3xl mx-auto my-2 text-gray-200'} /></ListItemIcon>
      </ListItem>
      </Link>
    </List>
  </nav>
  )
}
