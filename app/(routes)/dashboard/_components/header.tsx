"use client";

import React from "react";
import Logo from "@/components/logo";
import { OrganizationSwitcher, UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="shadow-sm w-full px-4 lg:p-0">
      <div className="w-full flex items-center justify-between max-w-default mx-auto  py-4">
        <div className=" flex-1 flex items-center gap-2">
          <Logo />
          <span className="text-gray-300">/</span>
          <h2 className="text-base !text-black/80 dark:!text-white/80 font-bold">
            All Workspace
          </h2>
        </div>
        <div className="flex-1 pt-1">
          <OrganizationSwitcher
            afterLeaveOrganizationUrl={"/dashboard"}
            afterCreateOrganizationUrl={"/dashboard"}
          />
        </div>
        <div className="flex items-center gap-2">
          <UserButton />
          <h2 className="text-base !text-black/80 dark:!text-white/80 font-bold">
            {user?.fullName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
