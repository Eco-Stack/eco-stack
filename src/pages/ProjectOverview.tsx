import { useMemo, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import LineChart from '../components/LineChart';
import { faker } from '@faker-js/faker';
import FragmentedRow from '../components/FragmentedRow';
import RoundedBox from '../components/RoundedBox';
import SelectButton from '../components/SelectButton';
import { useSearchParams } from 'react-router-dom';
import { useProjectDetailQuery, useProjectOverviewQuery } from 'apis/cloudProject';
import clsx from 'clsx';
import { lengthedArray, parseFloat } from 'utils/Utils';

export default function ProjectOverview() {
  const [searchParams] = useSearchParams();
  const projectId = useMemo(() => searchParams.get('id') ?? '-1', [searchParams]);

  const { data: projectOverview } = useProjectOverviewQuery({ projectId });
  const { data: projectDetail } = useProjectDetailQuery({ projectId });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateViewOption, setDateViewOption] = useState({
    label: 'WEEK',
    value: '7',
  });
  const [projectViewOption, setProjectViewOption] = useState({
    label: 'Instance1',
    value: 'instance1',
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
              className="mt-3 "
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
                  label: projectDetail?.id ?? '-',
                  span: '1',
                },
                {
                  label: projectDetail?.instanceCnt.toString() ?? '-',
                  span: '1',
                },
                {
                  label: projectDetail?.createdDate ?? '-',
                  span: '1',
                },
                {
                  label: projectDetail?.owner ?? '-',
                  span: '1',
                },
              ]}
            />

            <div className="my-3 h-[1px] w-full "></div>

            <div className="flex gap-3">
              <RoundedBox
                className="flex relative h-44 w-44 flex-shrink-0 flex-col font-bold"
                children={
                  <>
                    <p>Instance Status</p>
                    <div className="flex h-full justify-center gap-3 text-center">
                      <span className="text-[4rem] font-bold">{projectOverview?.instanceCnt ?? 0}</span>
                      <span className="absolute right-5 top-[50%]">
                        <span
                          className={clsx([
                            'font-bold',
                            (projectOverview?.instanceDiff ?? 0) >= 0 ? 'text-red-500' : 'text-blue-400',
                          ])}
                        >
                          {(projectOverview?.instanceDiff ?? 0) >= 0 ? '▲' : '▼'}
                        </span>
                        <span>{projectOverview?.instanceDiff ?? 0}</span>
                      </span>
                    </div>
                  </>
                }
              ></RoundedBox>

              <RoundedBox className="flex min-h-44 w-full flex-col h-full">
                <p className="self-start font-bold">TOP 10 Resource-Intensive Instances</p>
                <div className="flex flex-col text-sm xl:flex-row h-full">
                  <div className="flex w-full flex-col text-gray-300">
                    <FragmentedRow
                      className=" font-bold text-gray-400"
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
                      ]}
                    ></FragmentedRow>
                    {lengthedArray(projectOverview?.resourceIntensiveCloudInstances.slice(0, 5), 5).map(
                      (instance, i) => (
                        <FragmentedRow
                          className=""
                          datas={[
                            {
                              label: `${i + 1}. ${instance?.id ?? '-'}`,
                              span: '1',
                            },
                            {
                              label: parseFloat(instance?.cpuUsage) ?? '-',
                              span: '1',
                            },
                            {
                              label: parseFloat(instance?.memoryUsageInBytes) ?? '-',
                              span: '1',
                            },
                            {
                              label: parseFloat(instance?.diskUsage) ?? '-',
                              span: '1',
                            },
                          ]}
                        ></FragmentedRow>
                      ),
                    )}
                  </div>
                  <div className="flex w-full flex-col text-gray-300">
                    <FragmentedRow
                      className=" font-bold text-gray-400"
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
                      ]}
                    ></FragmentedRow>
                    {lengthedArray(projectOverview?.resourceIntensiveCloudInstances.slice(5), 5).map((instance, i) => (
                      <FragmentedRow
                        className=""
                        datas={[
                          {
                            label: `${i + 1 + 5}. ${instance?.id ?? '-'}`,
                            span: '1',
                          },
                          {
                            label: instance?.cpuUsage.toString() ?? '-',
                            span: '1',
                          },
                          {
                            label: instance?.memoryUsageInBytes.toString() ?? '-',
                            span: '1',
                          },
                          {
                            label: instance?.diskUsage.toString() ?? '-',
                            span: '1',
                          },
                        ]}
                      ></FragmentedRow>
                    ))}
                  </div>
                </div>
              </RoundedBox>
            </div>

            <div className="my-3 h-[1px] w-full "></div>

            <div className="flex w-full justify-between text-black">
              <SelectButton
                currentOption={projectViewOption}
                setOption={option => setProjectViewOption(option)}
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

          <div className="max-w-9xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="my-3 h-[1px] w-full bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-300">Instance Process Overview</h1>
            <div>Please Select Instance You Want To Checkout</div>
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
        </main>
      </div>
    </div>
  );
}
