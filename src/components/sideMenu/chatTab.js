import React from "react";
import cn from "@/utils/cn";
import * as Icon from "@phosphor-icons/react";

export default function ChatTab() {
  return (
    <div
      className={cn(
        "flex flex-col py-4 gap-4 grow bg-rock-50",
        "justify-end items-end self-stretch"
      )}
    >
      <SentMessage />
      <GeneratedMessage />
      <Message />
    </div>
  );
}

function Message() {
  return (
    <form
      className={cn(
        "flex content-end gap-2 bg-rock-50 px-3 py-2",
        "self-stretch",
        "border-rock-200 border rounded-lg"
      )}
    >
      <input
        type="text"
        placeholder="Ask something..."
        className={cn(
          "flex flex-col bg-rock-50 grow",
          "text-regular-l",
          "focus:outline-none"
        )}
      ></input>
      <button
        className={cn(
          "flex bg-sky-primary",
          "p-2",
          "rounded-full",
          "text-rock-50",
          "hover:bg-sky-darker hover:shadow transition-all"
        )}
      >
        <Icon.PaperPlaneTilt size={16} weight="duotone" />
      </button>
    </form>
  );
}

function SentMessage() {
  return (
    <div
      className={cn(
        "flex bg-sky-light",
        "p-3",
        "justify-start self-stretch",
        "border border-sky-primary rounded-l-2xl rounded-tr-2xl",
        "text-sky-lighter text-regular-l"
      )}
    >
      This is Sent Message This is Sent Message This is Sent Message This is
      Sent Message
    </div>
  );
}

function GeneratedMessage() {
  return (
    <div className={cn("flex items-end gap-2 self-stretch ")}>
      <div
        className={cn(" flex p-1 rounded-full bg-candy-primary text-rock-50")}
      >
        <Icon.Alien size={16} weight="fill" />
      </div>
      <div
        className={cn(
          "flex bg-rock-50",
          "p-3",
          "justify-start self-stretch",
          "border border-rock-200 rounded-r-2xl rounded-tl-2xl",
          "shadow-sm",
          "text-rock-900 text-regular-l",
          "selection:bg-candy-lighter"
        )}
      >
        This is Generated Message Brooo.... So just fcking did it right now!
        Yada yada yada! This is Generated Message Brooo.... So just fcking did
        it right now! Yada yada yada!
      </div>
    </div>
  );
}
