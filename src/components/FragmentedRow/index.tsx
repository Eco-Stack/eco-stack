import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

interface IFragmentedData {
  label: React.ReactElement | string;
  value?: string;
  align?: 'left' | 'center' | 'right';
  span?: string;
}

interface IFragmentedRowProps extends ComponentPropsWithoutRef<'div'> {
  datas: IFragmentedData[];
  className?: string;
  underline?: boolean;
}

export default function FragmentedRow({ datas = [], className, underline = false, ...props }: IFragmentedRowProps) {
  const totalSpan = datas.reduce((a, c) => a + Number(c.span ?? 0), 0);
  return (
    <div
      {...props}
      style={{
        gridTemplateColumns: `repeat(${totalSpan}, minmax(0, ${totalSpan}fr))`,
      }}
      className={clsx(['grid w-full group relative', className])}
    >
      {datas.map((data, i) => (
        <div
          key={`${data.label}-${i}`}
          className={clsx([
            'flex items-center justify-start',
            data.align === 'left' && 'justify-start',
            data.align === 'center' && 'justify-center',
            data.align === 'right' && 'justify-end',
          ])}
          style={{
            gridColumn: `span ${data.span} / span ${data.span ?? 0}`,
          }}
        >
          {data.label}
        </div>
      ))}
      {underline && (
        <div className="absolute left-0 -bottom-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></div>
      )}
    </div>
  );
}
