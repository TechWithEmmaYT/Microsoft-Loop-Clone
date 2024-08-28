"use client";

import React, { useState } from "react";
import Logo from "@/components/logo";
import Image from "next/image";
import { Camera, SmilePlus, AlignLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import CoverDialog from "@/components/cover-dialog";
import EmojiPickerDialog from "@/components/emoji-picker";
//import CoverImage from "@/public/images/cover.png";

const NewWorkspace = () => {
  const router = useRouter();
  const [coverImage, setCoverImage] = useState("/images/cover.png");
  const [emoji, setEmoji] = useState("");

  const onCancel = () => {
    router.replace("/dashboard");
  };

  const handleSelect = (coverImg: string) => {
    setCoverImage(coverImg);
  };
  //[#7c3aed]
  return (
    <section className="bg-background">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-14 items-end bg-gradient-to-b to-gray-900 from-[#7c3aed] from-60% lg:col-span-5 lg:h-full xl:col-span-5">
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <Logo />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Create Workspace
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-1 lg:col-span-7 lg:px-1 lg:py-12 xl:col-span-7">
          <div className="w-full px-2">
            <div className="relative -mt-[87px] block lg:hidden">
              <a
                className="inline-flex size-16 text-white items-center justify-center "
                href="#"
              >
                <Logo />
              </a>
            </div>
            {/* {Create Workspace} */}
            <div className="create-workspace p-10 md:px-36 py-10 ">
              <div className="shadow-2xl rounded-xl">
                {/* {Cover Image} */}
                <CoverDialog onSelect={handleSelect}>
                  <div
                    role="button"
                    className="relative group cursor-pointer transition-colors duration-300 ease-in-out"
                  >
                    <div
                      className="hidden absolute p-4 w-full h-full group-hover:flex items-center
    justify-center rounded-t-xl group-hover:bg-black/30 "
                    >
                      <span className="flex items-center gap-2 font-medium z-40 text-white">
                        <Camera />
                        Change Cover
                      </span>
                    </div>
                    <Image
                      src={coverImage}
                      width={400}
                      height={400}
                      alt="Cover Image"
                      className="w-full h-[180px] object-cover rounded-t-xl"
                    />
                  </div>
                </CoverDialog>
                {/* {Form Section} */}
                <form className="flex flex-col gap-5 w-full p-12 pt-8">
                  <div>
                    <h2 className="font-medium text-xl">
                      Create a new workspace
                    </h2>
                    <p className="text-sm mt-2">
                      This is a shared space where you can collabrate with your
                      team.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <EmojiPickerDialog onSelect={(val) => setEmoji(val)}>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="text-[17px]"
                      >
                        {emoji ? emoji : <SmilePlus size="20px" />}
                      </Button>
                    </EmojiPickerDialog>
                    <Input placeholder="Workspace Name" />
                  </div>

                  <div className="flex items-center justify-end gap-6">
                    <Button type="button" variant="outline" onClick={onCancel}>
                      Cancel
                    </Button>
                    <Button disabled={false}>Create</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default NewWorkspace;
