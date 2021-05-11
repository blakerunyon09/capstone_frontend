import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs({ tab, setTab, tabNames }) {

  const history = useHistory()

  const handleChange = (_, newValue) => {
    setTab(newValue);
    if(tabNames[0] === "Current Integrations")
    history.push('/app/integrations')
  };

  return (
    <div className={"self-end"}>
        <Tabs value={tab} onChange={handleChange} >
          <Tab label={tabNames[0]} {...a11yProps(0)} className={"outline-none"}  />
          <Tab label={tabNames[1]} {...a11yProps(1)} className={"outline-none"}  />
        </Tabs>
    </div>
  );
}