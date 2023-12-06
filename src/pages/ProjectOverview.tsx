import { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import LineChart from '../components/LineChart';
import { faker } from '@faker-js/faker';
import FragmentedRow from '../components/FragmentedRow';
import RoundedBox from '../components/RoundedBox';
import SelectButton from '../components/SelectButton';

export default function ProjectOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateViewOption, setDateViewOption] = useState({
    label: 'WEEK',
    value: '7',
  });
  const [projectViewOption, setProjectViewOption] = useState({
    label: 'PROJECT',
    value: 'project',
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
            <h1 className="text-2xl font-bold text-gray-300">Project Overview</h1>
            <FragmentedRow
              className="mt-3"
              datas={[
                {
                  label: 'Project Name',
                  span: '1',
                },
                {
                  label: 'Project Instances',
                  span: '1',
                },
                {
                  label: 'Project Created',
                  span: '1',
                },
                {
                  label: 'Project Owner',
                  span: '1',
                },
              ]}
            />
            <FragmentedRow
              className="mb-3 text-xl font-semibold text-gray-200"
              datas={[
                {
                  label: 'PROJECT 0001',
                  span: '1',
                },
                {
                  label: '8',
                  span: '1',
                },
                {
                  label: '2023.11.14',
                  span: '1',
                },
                {
                  label: 'Hayden Hong',
                  span: '1',
                },
              ]}
            />

            <div className="my-3 h-[1px] w-full bg-gray-300"></div>

            <div className="flex gap-3">
              <RoundedBox
                children={
                  <>
                    <p>Instance Status</p>
                    <div className="relative flex h-full justify-center gap-3 text-center">
                      <span className="text-[4rem] font-bold">3</span>
                      <span className="absolute right-5 top-[50%] -translate-y-1/2">
                        <span className="font-bold text-red-500">▲</span>
                        <span>2</span>
                      </span>
                    </div>
                  </>
                }
                className="flex h-44 w-44 flex-shrink-0 flex-col font-bold"
              ></RoundedBox>

              <RoundedBox className="flex h-44 w-full flex-col">
                <p className="self-start font-bold">TOP 10 Resource-Intensive Instances</p>
                <div className="flex flex-row text-sm">
                  <div className="flex w-full flex-col">
                    <FragmentedRow
                      className=" font-bold text-black/70"
                      datas={[
                        {
                          label: '',
                          span: '1',
                        },
                        {
                          label: 'CPU',
                          span: '1',
                        },
                        {
                          label: 'Memory',
                          span: '1',
                        },
                        {
                          label: 'Disk',
                          span: '1',
                        },
                        {
                          label: 'Network',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '1. Instance1',
                          span: '1',
                        },
                        {
                          label: '40%',
                          span: '1',
                        },
                        {
                          label: '73%',
                          span: '1',
                        },
                        {
                          label: '456KB',
                          span: '1',
                        },
                        {
                          label: '953KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '2. Instance2',
                          span: '1',
                        },
                        {
                          label: '35%',
                          span: '1',
                        },
                        {
                          label: '72%',
                          span: '1',
                        },
                        {
                          label: '356KB',
                          span: '1',
                        },
                        {
                          label: '873KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '3. Instance3',
                          span: '1',
                        },
                        {
                          label: '33%',
                          span: '1',
                        },
                        {
                          label: '69%',
                          span: '1',
                        },
                        {
                          label: '346KB',
                          span: '1',
                        },
                        {
                          label: '256KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '4. Instance4',
                          span: '1',
                        },
                        {
                          label: '25%',
                          span: '1',
                        },
                        {
                          label: '68%',
                          span: '1',
                        },
                        {
                          label: '123KB',
                          span: '1',
                        },
                        {
                          label: '255KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '5. Instance5',
                          span: '1',
                        },
                        {
                          label: '21%',
                          span: '1',
                        },
                        {
                          label: '55%',
                          span: '1',
                        },
                        {
                          label: '133KB',
                          span: '1',
                        },
                        {
                          label: '268KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                  </div>
                  <div className="flex w-full flex-col ">
                    <FragmentedRow
                      className="font-bold text-black/70"
                      datas={[
                        {
                          label: '',
                          span: '1',
                        },
                        {
                          label: 'CPU',
                          span: '1',
                        },
                        {
                          label: 'Memory',
                          span: '1',
                        },
                        {
                          label: 'Disk',
                          span: '1',
                        },
                        {
                          label: 'Network',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '6. Instance6',
                          span: '1',
                        },
                        {
                          label: '20%',
                          span: '1',
                        },
                        {
                          label: '54%',
                          span: '1',
                        },
                        {
                          label: '133KB',
                          span: '1',
                        },
                        {
                          label: '268KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '7. Instance7',
                          span: '1',
                        },
                        {
                          label: '18%',
                          span: '1',
                        },
                        {
                          label: '53%',
                          span: '1',
                        },
                        {
                          label: '123KB',
                          span: '1',
                        },
                        {
                          label: '255KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '8. Instance8',
                          span: '1',
                        },
                        {
                          label: '15%',
                          span: '1',
                        },
                        {
                          label: '52%',
                          span: '1',
                        },
                        {
                          label: '133KB',
                          span: '1',
                        },
                        {
                          label: '268KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '9. Instance9',
                          span: '1',
                        },
                        {
                          label: '10%',
                          span: '1',
                        },
                        {
                          label: '51%',
                          span: '1',
                        },
                        {
                          label: '123KB',
                          span: '1',
                        },
                        {
                          label: '255KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                    <FragmentedRow
                      className="text-black/70"
                      datas={[
                        {
                          label: '10. Instance10',
                          span: '1',
                        },
                        {
                          label: '5%',
                          span: '1',
                        },
                        {
                          label: '50%',
                          span: '1',
                        },
                        {
                          label: '133KB',
                          span: '1',
                        },
                        {
                          label: '268KB',
                          span: '1',
                        },
                      ]}
                    ></FragmentedRow>
                  </div>
                </div>
              </RoundedBox>
            </div>

            <div className="my-3 h-[1px] w-full bg-gray-300"></div>

            <div className="flex w-full justify-between text-black">
              <SelectButton
                options={[
                  {
                    label: 'Instance1',
                    value: 'instance1',
                  },
                  {
                    label: 'Instance2',
                    value: 'instance2',
                  },
                  {
                    label: 'Instance3',
                    value: 'instance3',
                  },
                ]}
                currentOption={projectViewOption}
                setOption={option => setProjectViewOption(option)}
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

            <div className="grid w-full grid-cols-2 gap-5">
              <div className="col-span-1 flex">
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
              <div className="col-span-1">
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
              <div className="col-span-1">
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
              <div className="col-span-1">
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
