import clsx from 'clsx';
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
    <div className="relative h-auto w-44 text-gray-300 font-bold">
      <input
        type="button"
        value={`${currentOption.label} ${open ? '▲' : '▼'}`}
        onClick={() => setOpen(prev => !prev)}
        onBlur={() => setOpen(false)}
        className="h-min w-full cursor-pointer rounded bg-gray-700 px-4 py-1"
      />
      {open ? (
        <ul className="absolute z-1 left-0 top-10 flex w-full  flex-col rounded bg-gray-700 px-1 py-1 shadow-2xl ">
          {options.map(option => (
            <li
              className={clsx(
                'cursor-pointer rounded p-1 hover:bg-gray-800',
                option.value === currentOption.value && 'bg-gray-800',
              )}
              onMouseDown={() => {
                setOption(option);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
