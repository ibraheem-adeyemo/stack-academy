import React from "react";
// import { CheckIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "@/components/svg-icons/menu-icon";
import { generateClassName } from "lib/utils";

interface DisplayWithCheckProps {
  content: string;
  divClassName?: string;
  spanClassName?: string;
}
const DisplayWithCheck = ({
  content,
  divClassName,
  spanClassName,
}: DisplayWithCheckProps) => {
  return (
    <div className={generateClassName("flex items-center", divClassName)}>
      <CheckIcon className="font-bold w-7 text-active-red-700 mr-2" />
      <span
        className={generateClassName(
          "font-bold md:text-xl capitalize",
          spanClassName,
        )}
      >
        {content}
      </span>
    </div>
  );
};

export default DisplayWithCheck;
