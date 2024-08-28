"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AlignLeft, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/public/assets/plus-icon.svg";
import EmptyWorkspaceImg from "@/public/images/workspace.png";
import Link from "next/link";

const Workspaces = () => {
  const [workspaceList, setWorkspace] = useState([]);
  return (
    <div className="my-5 p-10 md:px-20 lg:px-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Workspace</h2>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <LayoutGrid size="20px" />
          </Button>
          <Button variant="outline" size="icon">
            <AlignLeft size="20px" />
          </Button>
          <Link href={"/new-workspace"}>
            <Button
              variant="default"
              className="!text-white font-medium !border-primary"
              size="icon"
            >
              <PlusIcon />
              <span className="sr-only">New Workspace</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="workspace-container w-full mt-20">
        {workspaceList?.length === 0 ? (
          <div className="workspace-empty flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={EmptyWorkspaceImg}
                width={250}
                height={250}
                alt="Empty Workspace"
                className="flex self-center -mr-2"
              />
              <div className="flex flex-col items-center justify-center  -mt-5">
                <h2 className="font-medium text-black/80">
                  Create a new workspace
                </h2>
                <Link href={"/new-workspace"}>
                  <Button
                    variant="default"
                    className="w-40 my-3 h-auto flex items-center gap-1"
                  >
                    <PlusIcon />
                    <span>New Workspace</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="workspace-list"></div>
        )}
      </div>
    </div>
  );
};

export default Workspaces;
