import React from "react";
import cn from "@/utils/cn";

const variants = {
  type: {
    filled: "bg-sky-primary hover:bg-sky-dark text-rock-50",
    outline: "border border-sky-primary hover:bg-sky-lighter text-sky-primary",
    ghost: "hover:bg-sky-lighter text-sky-primary",
    avoided: "text-chili-primary hover:bg-chili-lighter",
    disabled: " hover:bg-rock-200 text-rock-600",
  },
  size: {
    small: "text-heavy-s",
    regular: "text-heavy-m",
    giant: "text-heavy-xl",
  },
  iconPosition: {
    left: "flex-row",
    right: "flex-row-reverse",
  },
};

function Button({ type, size, iconPosition, children, ...props }) {
  const generalClasses = cn(
    "flex px-4 py-2 rounded-xl transition-colors items-center justify-center gap-2",
    variants.type[type],
    variants.size[size],
    variants.iconPosition[iconPosition]
  );

  return (
    <button className={generalClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
