import React, { useEffect, useState } from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { useAuth } from "../contexts/AuthContext";

import { HiCubeTransparent } from "react-icons/hi";
import { SiOculus } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdSettings } from "react-icons/md";

function Sidebar() {
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const { getUserData } = useAuth();
  const { userName } = useAuth();
  const { pfp } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="p-10 flex flex-col justify-between h-full w-1/5 shadow-lg ">
      <div>
        <div>
          <h1 className="text-3xl font-bold mb-10">minihome</h1>
        </div>
        <TabsListUnstyled className="flex flex-col">
          <TabUnstyled value={0} className="tab-item group">
            <HiCubeTransparent size={28} className="tab-icon" />
            <p className="tab-text">Project</p>
          </TabUnstyled>
          <TabUnstyled value={1} className="tab-item group">
            <SiOculus size={28} className="tab-icon" />
            <p className="tab-text">Devices</p>
          </TabUnstyled>
          <TabUnstyled value={2} className="tab-item group">
            <FaUsers size={28} className="tab-icon" />
            <p className="tab-text">Organizations</p>
          </TabUnstyled>
        </TabsListUnstyled>
      </div>
      <div className="">
        <div className="flex justify-center items-center mb-5">
          <div className="rounded-full w-20 aspect-square bg-amber-200 flex items-center justify-center">
            <p className="font-semibold text-2xl">{pfp}</p>
          </div>
        </div>
        <div className="text-center mb-10">
          <p className="font-semibold text-xl">{userName}</p>
          <p className="font-medium text-gray-400">{currentUser.email}</p>
        </div>
        <div className="flex justify-evenly m-5">
          <MdSettings size={28} />
          <FiLogOut size={28} onClick={logout} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
