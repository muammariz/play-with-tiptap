"use client";
import ChatTab from "./chatTab";
import * as Icon from "@phosphor-icons/react";

export default function AssistantMenu({ isAssistantOpen, setIsAssistantOpen }) {
  return (
    <main
      className={
        " fixed flex justify-start items-center backdrop-blur-[1px] w-screen h-screen p-6 overflow-hidden transform ease-in-out " +
        (isAssistantOpen
          ? " transition-all translate-x-0 "
          : " transition-all delay-[400ms] translate-x-[-100%] ")
      }
    >
      <div
        className={
          " flex flex-col max-w-[600px] justify-center content-start h-full rounded-xl bg-rock-50 border border-rock-100 p-4 gap-8 transform transition-all duration-[400ms] ease-in-out shadow-xl " +
          (isAssistantOpen ? " translate-x-0 " : " translate-x-[-100%]  ")
        }
      >
        <button
          className="flex items-center w-10 h-10 p-2 absolute right-[-3%] top-[5%] bg-rock-50 border border-rock-100 shadow-md text-rock-500 rounded-full hover:bg-sky-lighter transition-all"
          onClick={() => setIsAssistantOpen(false)}
        >
          <Icon.CaretCircleDoubleLeft size={24} weight="duotone" />
        </button>
        <ChatTab />
      </div>
    </main>
  );
}
