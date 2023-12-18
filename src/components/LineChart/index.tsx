import { applyOpacity } from './utils';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  title: string;
  labels: (string | [string, string])[];
  datas: { label: string; data: number[]; color?: string; hidden?: boolean }[];
  options?: object;
}

export default function LineChart({ title, labels, datas, options = {} }: LineChartProps) {
  if (labels.length !== datas[0].data.length) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-5">
        <p className="text-center font-bold">Unable to render chart '{title}'</p>
        <p className="text-center">Data length and label length are not equal.</p>
      </div>
    );
  }

  const baseOptions = {
    ...options,
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    tooltip: {
      crosshair: true,
    },
    plugins: {
      title: {
        display: title ? true : false,
        text: title,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      // y1: {
      //   type: "linear" as const,
      //   display: true,
      //   position: "right" as const,
      //   grid: {
      //     drawOnChartArea: false,
      //   },
      // },
    },
  };

  const baseData = {
    labels: labels,
    datasets: datas.map((data, i) => {
      return {
        label: data.label,
        data: data.data,
        hidden: data.hidden,
        borderColor: data.color ? data.color : i % 2 === 0 ? 'rgb(255, 99, 132)' : 'rgb(53, 162, 235)',
        backgroundColor: data.color
          ? applyOpacity(data.color, 0.5)
          : i % 2 === 0
          ? 'rgba(255, 99, 132, 0.5)'
          : 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      };
    }),
  };

  return <Line options={baseOptions} data={baseData} />;
}
