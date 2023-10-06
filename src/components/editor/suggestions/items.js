import * as Icon from "@phosphor-icons/react";

const getSuggestionItems = () => {
  return [
    {
      title: "Text",
      icon: <Icon.TextT size={16} weight="bold" />,
      description: "Basic text for your paragraph",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setNode("paragraph").run();
      },
    },
    {
      title: "Subheading",
      icon: <Icon.TextAa size={16} weight="bold" />,
      description: "Space your paragraph with text",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 2 })
          .run();
      },
    },
    {
      title: "Blockquote",
      icon: <Icon.Quotes size={16} weight="bold" />,
      description: "Highlight your words with quotes",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setBlockquote().run();
      },
    },
    {
      title: "Bold",
      icon: <Icon.TextB size={16} weight="bold" />,
      description: "Kalo bald itu ndasmu",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 1 })
          .run();
      },
    },
    {
      title: "Italic",
      icon: <Icon.TextItalic size={16} weight="bold" />,
      description: "Hidup lurus kok text miring",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark("italic").run();
      },
    },
    {
      title: "Divider",
      icon: <Icon.DotsThreeOutline size={16} weight="bold" />,
      description: "Space with a horizontal line",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setHorizontalRule().run();
      },
    },
    {
      title: "Image",
      icon: <Icon.Image size={16} weight="bold" />,
      description: "Tambahkan gambar. Kurangin maksiat.",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark("bold").run();
      },
    },
  ];
};

export default getSuggestionItems;
