"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsArchiveFill, BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";

type Timeline = {
  label: string;
  timelines: {
    title: string;
    href: string;
  }[];
};

const timelineData: Timeline[] = [
  {
    label: "Today",
    timelines: [
      {
        href: "tag-generator",
        title: "Tag generator",
      },
      {
        href: "title-generator",
        title: "Title generator",
      },
      {
        href: "image-editor",
        title: "Image editor",
      },
      {
        href: "video-maker",
        title: "Video maker",
      },
      {
        href: "audio-mixer",
        title: "Audio mixer",
      },
    ],
  },
  {
    label: "Yesterday",
    timelines: [
      {
        href: "article-editor",
        title: "Article editor",
      },
      {
        href: "chart-generator",
        title: "Chart generator",
      },
      {
        href: "diagram-creator",
        title: "Diagram creator",
      },
      {
        href: "calendar-planner",
        title: "Calendar planner",
      },
      {
        href: "task-tracker",
        title: "Task tracker",
      },
    ],
  },
  {
    label: "Last Week",
    timelines: [
      {
        href: "code-editor",
        title: "Code editor",
      },
      {
        href: "presentation-builder",
        title: "Presentation builder",
      },
      {
        href: "music-composer",
        title: "Music composer",
      },
      {
        href: "notebook-app",
        title: "Notebook app",
      },
      {
        href: "game-designer",
        title: "Game designer",
      },
    ],
  },
];

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div
      className={cn(
        "hidden md:flex min-h-screen sm:min-h-screen lg:min-h-screen relative transition-all",
        {
          "-translate-x-full": !isVisible,
          "w-full max-w-[244px]": isVisible,
        }
      )}
    >
      {isVisible && (
        <div className={cn("min-h-screen w-full pl-4 pr-6 pt-20 bg-[#0D0D0D]")}>
          <div className="top-3 left-0 pl-4 pr-6 w-full absolute">
            <Link
              href={"/"}
              className="flex justify-between w-full items-center p-1 hover:bg-slate-800 rounded-lg transition-all "
            >
              <section className="flex items-center gap-2">
                <div className=" h-7 w-7 bg-white rounded-full flex items-center justify-center">
                  <Image src="/logo.png" alt="" width={200} height={200} />
                </div>
                <p className="text-sm">New chat </p>
              </section>
              <FiEdit className="text-white text-sm" />
            </Link>
          </div>

          <div className="w-full flex flex-col gap-5 max-h-[650px] overflow-auto mt-[3]">
            {timelineData.map((d, i) => (
              <Timeline key={i} label={d.label} timelines={d.timelines} />
            ))}
          </div>

          <Link
            href="/"
            className="w-[100%] pl-5 p-2 group ease-in-out duration-300 hover:bg-slate-800 rounded-lg transition-all items-center flex gap-3"
          >
            <Avatar>
              <AvatarFallback className="text-black">IA</AvatarFallback>
            </Avatar>
            <span>Ishank Aggarwal</span>
          </Link>
        </div>
      )}

      <div className="absolute inset-y-0 right-[-30px]  flex items-center justify-center w-[30px]">
        <button
          onClick={() => handleClick()}
          className=" h-[100px] group  text-gray-500 hover:text-white   w-full flex items-center justify-center  transition-all   "
        >
          {isVisible ? (
            <FaChevronLeft className="hidden group-hover:flex text-xl delay-500 duration-500 ease-in-out transition-all" />
          ) : (
            <FaChevronRight className="hidden group-hover:flex text-xl delay-500 duration-500 ease-in-out transition-all" />
          )}
          <TbMinusVertical className="text-3xl group-hover:hidden delay-500 duration-500 ease-in-out  transition-all" />
        </button>
      </div>
    </div>
  );
}

function Timeline(props: Timeline) {
  const pathName = usePathname();
  return (
    <div className="w-full flex flex-col p-2">
      <p className="text-xs text-gray-500 font-bold p-2">{props.label}</p>

      {props.timelines.map((d, i) => (
        <Link
          key={i}
          className={cn(
            "p-2 group ease-in-out duration-300 hover:bg-slate-800 rounded-lg transition-all items-center text-sm w-full flex justify-between  ",
            { "bg-slate-800": `/${d.href}` === pathName }
          )}
          href={d.href}
        >
          <div className="text-ellipsis overflow-hidden w-[80%] whitespace-nowrap">
            {d.title}
          </div>
          <div className="transition-all items-center gap-2 hidden group-hover:flex ease-in-out duration-300 ">
            <BsThreeDots />
            <BsArchiveFill />
          </div>
        </Link>
      ))}
    </div>
  );
}
