import React, { useState } from "react";

type TypeOption = {
  value: string;
  label: string;
};

interface ISelectButtonProps {
  options?: TypeOption[];
  currentOption?: TypeOption;
  setOption?: (option: TypeOption) => void;
}

export default function SelectButton({
  options = [],
  currentOption = { label: "", value: "" },
  setOption = () => {},
}: ISelectButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-44">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="absolute left-0 top-0 h-auto w-full rounded bg-gray-300 px-4 py-1"
      >
        {currentOption.label} {open ? "▲" : "▼"}
      </button>
      {open ? (
        <ul className="absolute left-0 top-10  flex w-full flex-col rounded bg-gray-300  ">
          {options.map((option) => (
            <li
              onClick={() => setOption(option)}
              className="cursor-pointer rounded p-1 hover:bg-gray-400"
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
