import { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import RoundedBox from 'components/RoundedBox';
import FragmentedRow from 'components/FragmentedRow';
import AnimateFadeIn from 'components/AnimateFadeIn';
import LineChart from 'components/LineChart';
import { faker } from '@faker-js/faker/locale/en';
import SelectButton from 'components/SelectButton';
import { ROUTES } from 'router';
import { useNavigate } from 'react-router-dom';

export default function ProjectOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateViewOption, setDateViewOption] = useState({
    label: 'WEEK',
    value: '7',
  });
  const [hypervisorViewOption, setHypervisorViewOption] = useState({
    label: 'Hypervisor1',
    value: 'Hypervisor1',
  });

  const xDataLengthByDateViewOptionMap: any = {
    DAY: 24,
    WEEK: 7,
    MONTH: 30,
  };

  const getDate = (dateViewOption: any) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    new Array(7)
      .fill(0)
      .map((_, i) => [
        new Date(year, month, day - 7 + i).toLocaleDateString(),
        new Date(year, month, day - 14 + i).toLocaleDateString(),
      ]);

    const map: any = {
      DAY: new Array(24).fill(0).map((_, i) => [1 + i < 10 ? `+${24 - i}H` : `+${24 - i}H`, `+${48 - i}H`]),
      WEEK: new Array(7).fill(0).map((_, i) => [`+${7 - i}D`, `+${14 - i}D`]),
      MONTH: new Array(30).fill(0).map((_, i) => [`+${30 - i}D`, `+${60 - i}D`]),
    };

    const label = dateViewOption.label;

    return map[label];
  };

  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="max-w-9xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-300">Admin Overview</h1>
            <div className="my-2 w-full"></div>

            {/* 클라우드 개요 */}
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-gray-300">Cloud Informations</h1>
              <SelectButton
                setOption={() => navigate(ROUTES.projectOverview)}
                currentOption={{ label: 'Project Browse', value: 'Project Browse' }}
                options={new Array(10)
                  .fill(0)
                  .map((_, i) => ({ label: `Project ${i + 1}`, value: `project$${i + 1}` }))}
              />
            </div>
            <div className="my-3"></div>
            <div className="flex flex-col xl:flex-row gap-3">
              {/* TOP 10 인스턴스 갯수 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4">
                <h3 className="font-bold text-lg">TOP 10 인스턴스 갯수</h3>
                <FragmentedRow
                  className="text-black/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '1' },
                    { label: '갯수', span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i}>
                      <FragmentedRow
                        onClick={() => navigate(ROUTES.projectOverview)}
                        underline
                        className=" leading-5  cursor-pointer"
                        datas={[
                          { label: `${i + 1}. Project${i + 1}`, span: '1' },
                          { label: `${12 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 인스턴스 증가 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4">
                <h3 className="font-bold text-lg">
                  TOP 10 인스턴스 <b className="font-bold text-red-600">증가</b>(1day)
                </h3>
                <FragmentedRow
                  className="text-white/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '1' },
                    { label: <span className="text-red-600/50">증가</span>, span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(5).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 3}>
                      <FragmentedRow
                        onClick={() => navigate(ROUTES.projectOverview)}
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. Project${i + 1}`, span: '1' },
                          { label: `${5 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                  {new Array(5).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 3}>
                      <FragmentedRow
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `-`, span: '1' },
                          { label: `-`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 인스턴스 감소 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4">
                <h3 className="font-bold text-lg">
                  TOP 10 인스턴스 <b className="font-bold text-blue-600">감소</b>(1day)
                </h3>
                <FragmentedRow
                  className="text-white/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '1' },
                    { label: <span className="text-blue-800/50">감소</span>, span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 6}>
                      <FragmentedRow
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `-`, span: '1' },
                          { label: `-`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 평균 리소스 할당량 */}
              <RoundedBox className="min-w-60 flex-grow-[4] flex flex-col p-4">
                <h3 className="font-bold text-lg">TOP 10 평균 리소스 할당량</h3>
                <FragmentedRow
                  className="text-white/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '3' },
                    { label: 'CPU', span: '2', align: 'right' },
                    { label: '메모리', span: '2', align: 'right' },
                    { label: '인스턴스', span: '2', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 9}>
                      <FragmentedRow
                        onClick={() => navigate(ROUTES.projectOverview)}
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. Project${i + 1}`, span: '3' },
                          {
                            label: `${40 - i * 2}.${faker.number.int({ min: 0, max: 9 })}%`,
                            span: '2',
                            align: 'right',
                          },
                          {
                            label: `${80 - faker.number.int({ min: 4, max: 30 })}.${faker.number.int({
                              min: 0,
                              max: 9,
                            })}%`,
                            span: '2',
                            align: 'right',
                          },
                          { label: `${12 - i}`, span: '2', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>
            </div>

            {/* divider */}
            <div className="my-6 h-[1px] w-full bg-gray-300"></div>

            {/* 하이퍼바이저 개요 */}
            <h1 className="text-xl font-bold text-gray-300">Hypervisor Informations</h1>

            <div className="my-3"></div>

            {/* Overviews */}
            <div className="flex flex-col xl:flex-row gap-3">
              {/* TOP 10 인스턴스 갯수 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4">
                <h3 className="font-bold text-lg">TOP 10 CPU 사용량</h3>
                <FragmentedRow
                  className="text-white/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '하이퍼바이저', span: '1' },
                    { label: '사용량(%)', span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i}>
                      <FragmentedRow
                        onClick={() =>
                          setHypervisorViewOption({
                            label: `Hypervisor${i + 1}`,
                            value: `Hypervisor${i + 1}`,
                          })
                        }
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. Hypervisor${i + 1}`, span: '2' },
                          {
                            label: `${50 - i * 2}.${faker.number.int({ min: 0, max: 9 })}%`,
                            span: '1',
                            align: 'right',
                          },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 메모리 사용량 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4">
                <h3 className="font-bold text-lg">TOP 10 메모리 사용량</h3>
                <FragmentedRow
                  className="text-white/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '하이퍼바이저', span: '1' },
                    { label: '사용량(%)', span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 3}>
                      <FragmentedRow
                        onClick={() =>
                          setHypervisorViewOption({
                            label: `Hypervisor${i + 1}`,
                            value: `Hypervisor${i + 1}`,
                          })
                        }
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. Hypervisor${i + 1}`, span: '2' },
                          {
                            label: `${99 - i * 7}.${faker.number.int({ min: 0, max: 9 })}%`,
                            span: '1',
                            align: 'right',
                          },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 DISK Usage */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4">
                <h3 className="font-bold text-lg">TOP 10 DISK 사용량</h3>
                <FragmentedRow
                  className="text-white/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '하이퍼바이저', span: '1' },
                    { label: '사용량(%)', span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 6}>
                      <FragmentedRow
                        onClick={() =>
                          setHypervisorViewOption({
                            label: `Hypervisor${i + 1}`,
                            value: `Hypervisor${i + 1}`,
                          })
                        }
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. Hypervisor${i + 1}`, span: '2' },
                          {
                            label: `${30 - i * 2}.${faker.number.int({ min: 0, max: 9 })}%`,
                            span: '1',
                            align: 'right',
                          },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 Network Usage */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4">
                <h3 className="font-bold text-lg">TOP 10 Network 사용량</h3>
                <FragmentedRow
                  className="text-white/40 dark:text-white/40 font-bold pt-2"
                  datas={[
                    { label: '하이퍼바이저', span: '1' },
                    { label: '사용량(%)', span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 9}>
                      <FragmentedRow
                        onClick={() =>
                          setHypervisorViewOption({
                            label: `Hypervisor${i + 1}`,
                            value: `Hypervisor${i + 1}`,
                          })
                        }
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. Hypervisor${i + 1}`, span: '2' },
                          {
                            label: `${11 - i}.${faker.number.int({ min: 0, max: 9 })}%`,
                            span: '1',
                            align: 'right',
                          },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>
            </div>

            <div className="my-3"></div>

            {/* Select Buttons */}
            <div className="flex w-full justify-between text-black">
              <SelectButton
                options={new Array(10).fill(0).map((_, i) => ({
                  label: `Hypervisor${i + 1}`,
                  value: `Hypervisor${i + 1}`,
                }))}
                currentOption={hypervisorViewOption}
                setOption={option => setHypervisorViewOption(option)}
              />
              <SelectButton
                options={[
                  {
                    label: 'DAY',
                    value: '1',
                  },
                  {
                    label: 'WEEK',
                    value: '7',
                  },
                  {
                    label: 'MONTH',
                    value: '30',
                  },
                ]}
                currentOption={dateViewOption}
                setOption={option => setDateViewOption(option)}
              />
            </div>

            {/* Charts */}
            <div className="grid w-full  lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'CPU Usage (%)'}
                  labels={getDate(dateViewOption)}
                  datas={[
                    {
                      label: 'CPU Current',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: 'CPU Previous',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                  ]}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'Memory Usage (%)'}
                  labels={getDate(dateViewOption)}
                  datas={[
                    {
                      label: 'Memory Current',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: 'Memory Previous',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                  ]}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'DISK R/W Usage (Bytes)'}
                  labels={getDate(dateViewOption)}
                  datas={[
                    {
                      label: 'Current Read',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 50000 })),
                      color: 'rgb(255, 99, 132)',
                      hidden: true,
                    },
                    {
                      label: 'Current Write',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 50000, max: 300000 })),
                      color: 'rgb(182, 70, 94)',
                    },
                    {
                      label: 'Previous Read',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 50000 })),
                      color: 'rgb(53, 162, 235)',
                      hidden: true,
                    },
                    {
                      label: 'Previous Write',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 50000, max: 300000 })),
                      color: 'rgb(41, 117, 168)',
                    },
                  ]}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'Network Usage (%)'}
                  labels={getDate(dateViewOption)}
                  datas={[
                    {
                      label: 'Network Current',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: 'Network Previous',
                      data: new Array(xDataLengthByDateViewOptionMap[dateViewOption.label])
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
