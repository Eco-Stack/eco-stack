import clsx from 'clsx';
import { ComponentProps } from 'react';

interface IInputProps extends ComponentProps<'input'> {
  className?: string;
}

export default function Input({ className, ...props }: IInputProps) {
  return (
    <input
      {...props}
      autoComplete="off"
      className={clsx([
        className,
        'min-w-[320px] rounded w-[60%] border-white/40 bg-transparent mt-1 mb-4 text-white focus:ring-green-400 focus:border-green-400',
      ])}
    ></input>
  );
}
