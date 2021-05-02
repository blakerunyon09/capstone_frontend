import React from 'react';
import Nav from './Nav'

function ResponsiveDrawer() {

  return (
        <aside className={"h-screen hidden md:block bg-gray-500"} style={{maxWidth: "90px"}}>
          <Nav />
        </aside>
  );
}

export default ResponsiveDrawer;
