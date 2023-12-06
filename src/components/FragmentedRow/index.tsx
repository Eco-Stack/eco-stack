import clsx from 'clsx';

interface IFragmentedData {
  label: React.ReactElement | string;
  value?: string;
  align?: 'left' | 'center' | 'right';
  span?: string;
}

interface IFragmentedRowProps {
  datas: IFragmentedData[];
  className?: string;
}

export default function FragmentedRow({ datas = [], className }: IFragmentedRowProps) {
  const totalSpan = datas.reduce((a, c) => a + Number(c.span ?? 0), 0);
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${totalSpan}, minmax(0, ${totalSpan}fr))`,
      }}
      className={clsx(['grid w-full', className])}
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
    </div>
  );
}
