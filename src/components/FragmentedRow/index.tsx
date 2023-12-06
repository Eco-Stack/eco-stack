import clsx from 'clsx';
import React from 'react';

interface IFragmentedData {
  label: string;
  value?: string;
  align?: 'left' | 'center' | 'right';
  span: string;
}

interface IFragmentedRowProps {
  datas: IFragmentedData[];
  className?: string;
}

export default function FragmentedRow({ datas = [], className }: IFragmentedRowProps) {
  const totalSpan = datas.reduce((a, c) => a + Number(c.span), 0);
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${totalSpan}, minmax(0, ${totalSpan}fr))`,
      }}
      className={clsx(['grid w-full', className])}
    >
      {datas.map(data => (
        <div
          style={{
            gridColumn: `span ${data.span} / span ${data.span}`,
          }}
        >
          {data.label}
        </div>
      ))}
    </div>
  );
}
