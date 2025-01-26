import React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";

import Sidebar from "../Sidebar";

import Dashboard from "./Dashboard";
import Devices from "./Devices";
import Organizations from "./Organizations";

function Main() {
  return (
    <TabsUnstyled defaultValue={0} className="flex h-screen">
      <Sidebar />
      <TabPanelUnstyled value={0} className="w-full">
        <Dashboard />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1} className="w-full">
        <Devices />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={2} className="w-full">
        <Organizations />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
}

export default Main;
