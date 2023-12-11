// Layout.js
import React from "react";
import Sidebar1 from "../Sidebar/Sidebar";
import TopicBpard from "../TopicBoard/TopicBpard";

function Layout() {
  return (
    <div className="layout border border-success">
      <div className="d-flex  p-2 border border-warning h-100">
        <Sidebar1 />
        <TopicBpard />
      </div>
    </div>
  );
}

export default Layout;
