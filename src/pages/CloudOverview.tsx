import { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import RoundedBox from 'components/RoundedBox';
import FragmentedRow from 'components/FragmentedRow';

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
            <h1 className="text-2xl font-bold text-gray-300">Admin Overview</h1>
            <h1 className="text-xl font-bold text-gray-300">클라우드 개요</h1>
            <div className="my-3"></div>
            <div className="flex flex-col lg:flex-row gap-3">
              {/* TOP 10 인스턴스 갯수 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
                <h3 className="font-bold text-lg">TOP 10 인스턴스 갯수</h3>
                <FragmentedRow
                  className="text-black/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '1' },
                    { label: '갯수', span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <FragmentedRow
                      className=" leading-5"
                      datas={[
                        { label: `${i + 1}. 프로젝트${i + 1}`, span: '1' },
                        { label: `${30 - i}`, span: '1', align: 'right' },
                      ]}
                    />
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 인스턴스 증가 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
                <h3 className="font-bold text-lg">
                  TOP 10 인스턴스 <b className="font-bold text-red-600">증가</b>(1day)
                </h3>
                <FragmentedRow
                  className="text-black/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '1' },
                    { label: <span className="text-red-600/50">증가</span>, span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <FragmentedRow
                      className=" leading-5"
                      datas={[
                        { label: `${i + 1}. 프로젝트${i + 1}`, span: '1' },
                        { label: `${30 - i}`, span: '1', align: 'right' },
                      ]}
                    />
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 인스턴스 감소 */}
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col p-4 hover:brightness-95">
                <h3 className="font-bold text-lg">
                  TOP 10 인스턴스 <b className="font-bold text-blue-600">감소</b>(1day)
                </h3>
                <FragmentedRow
                  className="text-black/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '1' },
                    { label: <span className="text-blue-800/50">감소</span>, span: '1', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <FragmentedRow
                      className=" leading-5"
                      datas={[
                        { label: `${i + 1}. 프로젝트${i + 1}`, span: '1' },
                        { label: `${30 - i}`, span: '1', align: 'right' },
                      ]}
                    />
                  ))}
                </div>
              </RoundedBox>

              {/* TOP 10 평균 리소스 할당량 */}
              <RoundedBox className="min-w-60 flex-grow-[4] flex flex-col p-4 hover:brightness-95">
                <h3 className="font-bold text-lg">TOP 10 평균 리소스 할당량</h3>
                <FragmentedRow
                  className="text-black/40 font-bold pt-2"
                  datas={[
                    { label: '프로젝트명', span: '3' },
                    { label: 'CPU', span: '2', align: 'right' },
                    { label: '메모리', span: '2', align: 'right' },
                    { label: '인스턴스', span: '2', align: 'right' },
                  ]}
                />
                <div className="flex flex-col">
                  {new Array(10).fill(0).map((_, i) => (
                    <FragmentedRow
                      className=" leading-5"
                      datas={[
                        { label: `${i + 1}. 프로젝트${i + 1}`, span: '3' },
                        { label: `${30 - i}`, span: '2', align: 'right' },
                        { label: `${30 - i}`, span: '2', align: 'right' },
                        { label: `${30 - i}`, span: '2', align: 'right' },
                      ]}
                    />
                  ))}
                </div>
              </RoundedBox>
            </div>
            <div className="my-3 h-[1px] w-full bg-gray-300"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
