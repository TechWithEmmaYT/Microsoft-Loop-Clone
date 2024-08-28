"use client";

import React, { useState } from "react";
import EmojiPicker, { EmojiStyle, Theme } from "emoji-picker-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const EmojiPickerDialog = (props: {
  children: React.ReactNode;
  onSelect: (emoji: string) => void;
}) => {
  const { children, onSelect } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (emoji: string) => {
    onSelect(emoji);
    setIsOpen(false);
  };
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div>{children}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="!p-0">
        <div className="relative">
          <div>
            <EmojiPicker
              emojiStyle={EmojiStyle.FACEBOOK}
              theme={Theme.LIGHT}
              width="260px"
              height="350px"
              onEmojiClick={(e) => handleSelect(e.emoji)}
            />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EmojiPickerDialog;
