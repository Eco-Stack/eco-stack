import { useEffect, useMemo, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import RoundedBox from 'components/RoundedBox';
import FragmentedRow from 'components/FragmentedRow';
import AnimateFadeIn from 'components/AnimateFadeIn';
import LineChart from 'components/LineChart';
import SelectButton from 'components/SelectButton';
import { useHypervisorMetricQuery, useHypervisorOverviewQuery } from 'apis/hypervisor';
import { lengthedArray, parseFloat } from '../utils/Utils';
import { useCloudProjectOverviewQuery } from 'apis/cloudProject';
import { ROUTES } from 'router';
import { useNavigate } from 'react-router-dom';

export default function CloudOverview() {
  const navigate = useNavigate();

  const { data: cloudProjectOverviewData } = useCloudProjectOverviewQuery();
  const { data: hypervisorOverviewData, isFetched } = useHypervisorOverviewQuery();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateViewOption, setDateViewOption] = useState({
    label: 'DAY',
    value: '1',
  });

  const hypervisorOptions = useMemo(() => {
    return (
      hypervisorOverviewData?.cpuUsageAverageMetrics
        .map(metric => ({
          label: metric?.hypervisorName,
          value: metric?.id,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)) ?? []
    );
  }, [hypervisorOverviewData]);
  const [hypervisorViewOption, setHypervisorViewOption] = useState(hypervisorOptions[0]);
  const { data: hypervisorMetricData } = useHypervisorMetricQuery(
    { hypervisorId: hypervisorViewOption?.value ?? '-', days: (+dateViewOption.value * 2).toString() },
    !!hypervisorViewOption && isFetched,
  );

  useEffect(() => setHypervisorViewOption(hypervisorOptions[0]), [hypervisorOptions]);

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
              {/* <SelectButton
                currentOption={{ label: 'Project Browse', value: 'Project Browse' }}
                options={[
                  { label: 'Project1', value: 'project1' },
                  { label: 'Project2', value: 'project2' },
                  { label: 'Project3', value: 'project3' },
                ]}
              /> */}
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
                  {lengthedArray(cloudProjectOverviewData?.mostInstanceCntProject).map((project, i) => (
                    <AnimateFadeIn delay={i}>
                      <FragmentedRow
                        underline
                        onClick={() => navigate(ROUTES.projectOverview + `?id=${project?.id}`)}
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. ${project?.name ?? '-'}`, span: '9' },
                          { label: `${project?.value ?? '-'}`, span: '1', align: 'right' },
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
                  {lengthedArray(cloudProjectOverviewData?.mostInstanceIncreaseProject).map((project, i) => (
                    <AnimateFadeIn delay={i}>
                      <FragmentedRow
                        underline
                        onClick={() => navigate(ROUTES.projectOverview + `?id=${project?.id}`)}
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. ${project?.name ?? '-'}`, span: '9' },
                          { label: `${project?.value ?? '-'}`, span: '1', align: 'right' },
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
                  {lengthedArray(cloudProjectOverviewData?.mostInstanceDecreaseProject).map((project, i) => (
                    <AnimateFadeIn delay={i}>
                      <FragmentedRow
                        underline
                        onClick={() => navigate(ROUTES.projectOverview + `?id=${project?.id}`)}
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. ${project?.name ?? '-'}`, span: '9' },
                          { label: `${project?.value ?? '-'}`, span: '1', align: 'right' },
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
                    { label: '프로젝트명', span: '4' },
                    { label: 'CPU', span: '2', align: 'right' },
                    { label: '메모리', span: '2', align: 'right' },
                    { label: '인스턴스', span: '2', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {lengthedArray(cloudProjectOverviewData?.mostResourceUsingProject).map((project, i) => (
                    <AnimateFadeIn delay={i}>
                      <FragmentedRow
                        underline
                        onClick={() => navigate(ROUTES.projectOverview + `?id=${project?.id}`)}
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. ${project?.name ?? '-'}`, span: '4' },
                          { label: `${parseFloat(project?.cpuUtilization, 2) ?? '-'}`, span: '2', align: 'right' },
                          { label: `${parseFloat(project?.memoryUtilization, 2) ?? '-'}`, span: '2', align: 'right' },
                          { label: `${project?.cloudInstanceCnt ?? '-'}`, span: '2', align: 'right' },
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
                  {lengthedArray(hypervisorOverviewData?.cpuUsageAverageMetrics).map((metric, i) => (
                    <AnimateFadeIn key={`cpu-${i}`} delay={i}>
                      <FragmentedRow
                        onClick={() =>
                          setHypervisorViewOption({ label: metric?.hypervisorName ?? '-', value: metric?.id ?? '-' })
                        }
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. ${metric?.hypervisorName ?? '-'}`, span: '2' },
                          { label: `${parseFloat(metric?.metric ?? '-', 4)}`, span: '1', align: 'right' },
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
                  {lengthedArray(hypervisorOverviewData?.memoryUsageAverageMetrics).map((metric, i) => (
                    <AnimateFadeIn key={`memory-${i}`} delay={i} initialDelay={0.05 * 3}>
                      <FragmentedRow
                        onClick={() =>
                          setHypervisorViewOption({ label: metric?.hypervisorName ?? '-', value: metric?.id ?? '-' })
                        }
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. ${metric?.hypervisorName ?? '-'}`, span: '2' },
                          { label: `${parseFloat(metric?.metric ?? '-', 4)}`, span: '1', align: 'right' },
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
                  {lengthedArray(hypervisorOverviewData?.diskUsageAverageMetrics).map((metric, i) => (
                    <AnimateFadeIn key={`disk-${i}`} delay={i} initialDelay={0.05 * 6}>
                      <FragmentedRow
                        onClick={() =>
                          setHypervisorViewOption({ label: metric?.hypervisorName ?? '-', value: metric?.id ?? '-' })
                        }
                        underline
                        className=" leading-5 cursor-pointer"
                        datas={[
                          { label: `${i + 1}. ${metric?.hypervisorName ?? '-'}`, span: '2' },
                          { label: `${parseFloat(metric?.metric ?? '-', 4)}`, span: '1', align: 'right' },
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
                options={hypervisorOptions}
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
              {/* CPU Chart */}
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'CPU Usage (%)'}
                  labels={[...new Array(24).fill(0).map((e, i) => [i + 1, i + 25])]}
                  datas={[
                    {
                      label: 'CPU Current',
                      data:
                        hypervisorMetricData?.cpuUtilizationMetricValues
                          .toReversed()
                          .slice(0, Number(dateViewOption.value))
                          .map(e => e.metricValuesDto)
                          .flat()
                          .map(e => e.value) ?? [],
                    },
                    {
                      label: 'CPU Previous',
                      data:
                        hypervisorMetricData?.cpuUtilizationMetricValues
                          .toReversed()
                          .slice(Number(dateViewOption.value))
                          .map(e => e.metricValuesDto)
                          .flat()
                          .map(e => e.value) ?? [],
                    },
                  ]}
                />
              </div>

              {/* Memory Chart */}
              <div className="col-span-1 flex justify-center">
                <LineChart
                  title={'Memory Usage (%)'}
                  labels={[...new Array(24).fill(0).map((e, i) => [(i + 1).toString(), (i + 25).toString()])]}
                  datas={[
                    {
                      label: 'CPU Current',
                      data:
                        hypervisorMetricData?.memoryUtilizationMetricValues
                          .toReversed()
                          .slice(0, Number(dateViewOption.value))
                          .map(e => e.metricValuesDto)
                          .flat()
                          .map(e => e.value) ?? [],
                    },
                    {
                      label: 'CPU Previous',
                      data:
                        hypervisorMetricData?.memoryUtilizationMetricValues
                          .toReversed()
                          .slice(Number(dateViewOption.value))
                          .map(e => e.metricValuesDto)
                          .flat()
                          .map(e => e.value) ?? [],
                    },
                  ]}
                />
              </div>

              {/* Disk Chart */}
              {/* <div className="col-span-1 flex justify-center">
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
              </div> */}

              {/* Network Chart */}
              {/* <div className="col-span-1 flex justify-center">
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
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
