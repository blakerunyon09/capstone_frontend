import React from 'react';
import { Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { CgHome, CgAlignLeft, CgBrowser } from "react-icons/cg";

export default function LabelBottomNavigation() {

  return (
      <div className={"fixed w-screen block md:hidden"} style={{bottom: "0"}}>
      <BottomNavigation className={"bg-red-400"}>
          <BottomNavigationAction 
            value="recents" 
            icon={<CgHome selected />} 
            className={"text-3xl text-red-200"} 
            component={Link}
            to="/app"
          />
          <BottomNavigationAction 
            value="favorites" 
            icon={<CgAlignLeft />} 
            className={"text-3xl text-red-200"} 
            component={Link}
            to="/app/dashboards"
          />
          <BottomNavigationAction 
            value="nearby" 
            icon={<CgBrowser />} 
            className={"text-3xl text-red-200"} 
            component={Link}
            to="/app/integrations"
          />
      </BottomNavigation>
      </div>
  );
}
