import { BubbleMenu } from "@tiptap/react";
import { useState } from "react";
import * as Icon from "@phosphor-icons/react";
import cn from "@/utils/cn";

export default function CBubbleMenu({ editor }) {
  const [linkInputVisible, setLinkInputVisible] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  const toggleLinkInput = () => {
    setLinkInputVisible(!linkInputVisible);
  };

  const handleLinkInput = (e) => {
    setLinkInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && linkInput) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkInput })
        .run();
      setLinkInput("");
      setLinkInputVisible(false);
    }
  };

  const variants = {
    isActive: "flex p-1 items-center rounded bg-rock-500 text-rock-100",
    default:
      "flex p-1 items-center rounded bg-rock-900 hover:bg-rock-500 text-rock-100",
  };

  return (
    <BubbleMenu
      className={cn(
        "flex items-start gap-2 p-2",
        "bg-rock-900",
        "rounded-lg",
        "shadow-lg"
      )}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold") ? variants.isActive : variants.default
        }
      >
        <Icon.TextB size={16} weight="bold" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? variants.isActive : variants.default
        }
      >
        <Icon.TextItalic size={16} weight="bold" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote") ? variants.isActive : variants.default
        }
      >
        <Icon.Quotes size={16} weight="bold" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading") ? variants.isActive : variants.default
        }
      >
        <Icon.TextAa size={16} weight="bold" />
      </button>
      <button
        onClick={toggleLinkInput}
        className={
          editor.isActive("link") ? variants.isActive : variants.default
        }
      >
        <Icon.LinkSimpleHorizontal size={16} weight="bold" />
      </button>
      {linkInputVisible && (
        <div
          className="flex px-2 py-1 items-center absolute right-0 top-[-28px] bg-rock-800 rounded text-regular-xs"
          value={linkInput}
        >
          <input
            type="text"
            placeholder="Input link then press enter"
            className=" bg-rock-800 outline-none"
            onChange={handleLinkInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </BubbleMenu>
  );
}
