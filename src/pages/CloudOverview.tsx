import { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import RoundedBox from 'components/RoundedBox';
import FragmentedRow from 'components/FragmentedRow';
import AnimateFadeIn from 'components/AnimateFadeIn';
import LineChart from 'components/LineChart';
import { faker } from '@faker-js/faker/locale/en';
import SelectButton from 'components/SelectButton';

export default function ProjectOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateViewOption, setDateViewOption] = useState({
    label: 'WEEK',
    value: '7',
  });
  const [hypervisorViewOption, setHypervisorViewOption] = useState({
    label: 'Hypervisor1',
    value: 'hypervisor1',
  });

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
                currentOption={{ label: 'Project Browse', value: 'Project Browse' }}
                options={[
                  { label: 'Project1', value: 'project1' },
                  { label: 'Project2', value: 'project2' },
                  { label: 'Project3', value: 'project3' },
                ]}
              />
            </div>
            <div className="my-3"></div>
            <div className="flex flex-col xl:flex-row gap-3">
              {/* TOP 10 인스턴스 갯수 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
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
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 프로젝트${i + 1}`, span: '1' },
                          { label: `${30 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 인스턴스 증가 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
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
                  {new Array(10).fill(0).map((_, i) => (
                    <AnimateFadeIn delay={i} initialDelay={0.05 * 3}>
                      <FragmentedRow
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 프로젝트${i + 1}`, span: '1' },
                          { label: `${30 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 인스턴스 감소 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
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
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 프로젝트${i + 1}`, span: '1' },
                          { label: `${30 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 평균 리소스 할당량 */}
              <RoundedBox className="min-w-60 flex-grow-[4] flex flex-col p-4 hover:brightness-95">
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
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 프로젝트${i + 1}`, span: '3' },
                          { label: `${30 - i}`, span: '2', align: 'right' },
                          { label: `${30 - i}`, span: '2', align: 'right' },
                          { label: `${30 - i}`, span: '2', align: 'right' },
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
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
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
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 하이퍼바이저${i + 1}`, span: '2' },
                          { label: `${30 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 메모리 사용량 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
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
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 하이퍼바이저${i + 1}`, span: '2' },
                          { label: `${30 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 DISK Usage */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
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
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 하이퍼바이저${i + 1}`, span: '2' },
                          { label: `${30 - i}`, span: '1', align: 'right' },
                        ]}
                      />
                    </AnimateFadeIn>
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 Network Usage */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
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
                        className=" leading-5"
                        datas={[
                          { label: `${i + 1}. 하이퍼바이저${i + 1}`, span: '2' },
                          { label: `${30 - i}`, span: '1', align: 'right' },
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
                options={[
                  {
                    label: 'Hypervisor1',
                    value: 'hypervisor1',
                  },
                  {
                    label: 'Hypervisor2',
                    value: 'hypervisor2',
                  },
                  {
                    label: 'Hypervisor3',
                    value: 'hypervisor3',
                  },
                ]}
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
                  labels={[
                    ['2023-11-10', '2023-11-03'],
                    ['2023-11-11', '2023-11-04'],
                    ['2023-11-12', '2023-11-05'],
                    ['2023-11-13', '2023-11-06'],
                    ['2023-11-14', '2023-11-07'],
                    ['2023-11-15', '2023-11-08'],
                    ['2023-11-16', '2023-11-09'],
                  ]}
                  datas={[
                    {
                      label: 'CPU Current',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: 'CPU Previous',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                  ]}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'Memory Usage (%)'}
                  labels={[
                    ['2023-11-10', '2023-11-03'],
                    ['2023-11-11', '2023-11-04'],
                    ['2023-11-12', '2023-11-05'],
                    ['2023-11-13', '2023-11-06'],
                    ['2023-11-14', '2023-11-07'],
                    ['2023-11-15', '2023-11-08'],
                    ['2023-11-16', '2023-11-09'],
                  ]}
                  datas={[
                    {
                      label: 'Memory Current',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: 'Memory Previous',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                  ]}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'DISK R/W Usage (Bytes)'}
                  labels={[
                    ['2023-11-10', '2023-11-03'],
                    ['2023-11-11', '2023-11-04'],
                    ['2023-11-12', '2023-11-05'],
                    ['2023-11-13', '2023-11-06'],
                    ['2023-11-14', '2023-11-07'],
                    ['2023-11-15', '2023-11-08'],
                    ['2023-11-16', '2023-11-09'],
                  ]}
                  datas={[
                    {
                      label: 'Current Read',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 50000 })),
                      color: 'rgb(255, 99, 132)',
                      hidden: true,
                    },
                    {
                      label: 'Current Write',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 50000, max: 300000 })),
                      color: 'rgb(182, 70, 94)',
                    },
                    {
                      label: 'Previous Read',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 50000 })),
                      color: 'rgb(53, 162, 235)',
                      hidden: true,
                    },
                    {
                      label: 'Previous Write',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 50000, max: 300000 })),
                      color: 'rgb(41, 117, 168)',
                    },
                  ]}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'Network Usage (bps)'}
                  labels={[
                    ['2023-11-10', '2023-11-03'],
                    ['2023-11-11', '2023-11-04'],
                    ['2023-11-12', '2023-11-05'],
                    ['2023-11-13', '2023-11-06'],
                    ['2023-11-14', '2023-11-07'],
                    ['2023-11-15', '2023-11-08'],
                    ['2023-11-16', '2023-11-09'],
                  ]}
                  datas={[
                    {
                      label: 'CPU Current',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: 'CPU Previous',
                      data: new Array(7).fill(0).map(() => faker.number.int({ min: 0, max: 100 })),
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
