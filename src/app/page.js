"use client";
import { useState } from "react";
import Editor from "@/components/editor/editor";
import AssistantMenu from "@/components/sideMenu/assistantMenu";
import * as Icon from "@phosphor-icons/react";

export default function Home() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  return (
    <main className="flex justify-center content-start w-full min-h-screen bg-rock-100 px-6 gap-8 transition-all">
      <div className="sticky top-0 py-6 flex flex-col items-center justify-between max-h-screen">
        <div className="flex flex-col gap-4 items-center">
          <button className="w-10 h-10 p-2 bg-candy-primary justify-center items-center text-sky-primary rounded-full hover:bg-sky-lighter hover:scale-110 transition-all"></button>
          <button
            className="w-10 h-10 p-2 bg-rock-50 justify-center items-center text-sky-primary rounded-full hover:bg-sky-lighter hover:scale-110 transition-all"
            onClick={() => setIsAssistantOpen(true)}
          >
            <Icon.Sparkle size={24} weight="duotone" />
          </button>
          <button className="w-10 h-10 p-2 bg-rock-50 justify-center items-center text-sky-primary rounded-full hover:bg-sky-lighter hover:scale-110 transition-all">
            <Icon.Target size={24} weight="duotone" />
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <button className="w-10 h-10 p-2 bg-rock-50 justify-center items-center text-rock-500 rounded-full hover:text-sky-light hover:scale-110 transition-all">
            <Icon.SealQuestion size={24} weight="duotone" />
          </button>
          <button className="w-10 h-10 p-2 bg-rock-50 justify-center items-center text-rock-500 rounded-full hover:text-sky-light hover:scale-110 transition-all">
            <Icon.Info size={24} weight="duotone" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-6 max-w-[900px] items-center grow w-full">
        <input
          className="flex w-full p-4 items-center self-stretch bg-rock-50 rounded-xl text-heavy-2xl text-rock-600 focus:outline-none"
          placeholder="Title"
        ></input>
        <Editor />
      </div>
      <AssistantMenu
        isAssistantOpen={isAssistantOpen}
        setIsAssistantOpen={setIsAssistantOpen}
      />
    </main>
  );
}
