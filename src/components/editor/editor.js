"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import CBubbleMenu from "./editorMenu/bubbleMenu";
import Commands from "./suggestions/commands";
import getSuggestionItems from "./suggestions/items";
import renderItems from "./suggestions/renderItems";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2] } }),
      Commands.configure({
        suggestion: {
          items: getSuggestionItems,
          render: renderItems,
        },
      }),
      Link.configure({
        validate: (href) => /^https?:\/\//.test(href),
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: 'Type "/" to see more command or block the text',
      }),
      HorizontalRule,
      renderItems(),
    ],
    editorProps: {
      attributes: {
        class:
          "prose max-w-[900px] min-w-[320px] h-full grow px-4 pt-4 pb-[500px] bg-rock-50 focus:outline-none selection:bg-candy-lighter overflow-auto rounded-lg ",
      },
    },
    /* onFocus: () => {
      const EditorContent = document.querySelector(".ProseMirror");
      EditorContent.scrollIntoView({ behavior: "smooth" });
    }, */
  });

  return (
    <>
      {editor && <CBubbleMenu editor={editor} />}
      <EditorContent
        editor={editor}
        spellCheck="false"
        className="w-full h-full grow"
      />
    </>
  );
}
