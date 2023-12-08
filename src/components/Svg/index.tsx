import { useState } from 'react';

interface ISvgProps {
  icon: string;
  className?: string;
}

export default function Svg({ icon, className }: ISvgProps) {
  const [component, setComponent] = useState(null);

  const dynamicImportSvg = () => {
    import(`../../assets/${icon}.svg`).then(module => module.default).then(comp => setComponent(comp));
  };

  dynamicImportSvg();

  return component ? <img className={className} src={component}></img> : <div>loading</div>;
}
