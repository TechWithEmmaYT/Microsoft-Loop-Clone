import React from "react";
import DarkModetoggle from "@/components/settings/dark-mode";

const Settings = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full max-w-default flex flex-col gap-20 mx-auto pt-10">
          <div>
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p></p>
          </div>
          <div className="w-full flex-1 flex flex-col gap-10">
            {/* <BillingSettings /> */}
            <DarkModetoggle />
            {/* <ChangePassword /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
