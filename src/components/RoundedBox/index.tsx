import React from 'react';
import clsx from 'clsx';

interface IRoundedBoxProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
}

export default function RoundedBox({ children, className, ...props }: IRoundedBoxProps) {
  return (
    <div {...props} className={clsx(['rounded-md bg-gray-300 p-2 text-black', className])}>
      {children}
    </div>
  );
}
