"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { COVER_IMAGEURL } from "@/lib/constant";
import { Button } from "../ui/button";
import clsx from "clsx";

const CoverDialog = (props: {
  children: React.ReactNode;
  onSelect: (coverImg: string) => void;
}) => {
  const { children, onSelect } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCover, setSelectedCover] = useState<string>("");

  const handleClose = () => {
    onSelect(selectedCover);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Cover</DialogTitle>
          <DialogDescription>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
              {COVER_IMAGEURL?.map((coverimg, index) => (
                <div
                  role="button"
                  key={index}
                  className={clsx(
                    "p-1 rounded-md transition-colors ease-in-out",
                    {
                      "border-primary border-2":
                        selectedCover === coverimg?.imageUrl,
                    }
                  )}
                  onClick={() => setSelectedCover(coverimg?.imageUrl)}
                >
                  <Image
                    src={coverimg.imageUrl}
                    alt={coverimg?.alt ?? ""}
                    width={200}
                    height={150}
                    className="!w-full !h-[70px] rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-2 sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleClose}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CoverDialog;
