import { useState } from 'react';

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
  currentOption = { label: '', value: '' },
  setOption = () => {},
}: ISelectButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-auto w-44 text-black">
      <input
        type="button"
        value={`${currentOption.label} ${open ? '▲' : '▼'}`}
        onClick={() => setOpen(prev => !prev)}
        onBlur={() => setOpen(false)}
        className="h-min w-full cursor-pointer rounded bg-gray-300 px-4 py-1"
      />
      {open ? (
        <ul className="absolute z-1 left-0 top-10 flex w-full  flex-col rounded bg-gray-300 px-1 py-1  ">
          {options.map(option => (
            <li
              onMouseDown={() => {
                setOption(option);
                setOpen(false);
              }}
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
