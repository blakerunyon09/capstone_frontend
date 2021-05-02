import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs({ tab, setTab }) {

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={"self-end"}>
        <Tabs value={tab} onChange={handleChange} >
          <Tab label="Data Source Connections" {...a11yProps(0)} className={"outline-none"}  />
          <Tab label="Available Integrations" {...a11yProps(1)} className={"outline-none"}  />
        </Tabs>
    </div>
  );
}