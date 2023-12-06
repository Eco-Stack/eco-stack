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
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col">
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
                        { label: `${i + 1}. 인스턴스${i + 1}`, span: '1' },
                        { label: `${30 - i}`, span: '1', align: 'right' },
                      ]}
                    />
                  ))}
                </div>
              </RoundedBox>
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col">
                <h3 className="font-bold text-lg">
                  TOP 10 인스턴스 <b className="font-bold text-red-600">증가</b>(1day)
                </h3>
              </RoundedBox>
              <RoundedBox className="min-w-60 flex-grow-[1] flex flex-col">
                <h3 className="font-bold text-lg">
                  TOP 10 인스턴스 <b className="font-bold text-blue-600">감소</b>(1day)
                </h3>
              </RoundedBox>
              <RoundedBox className="min-w-60 flex-grow-[4] flex flex-col">
                <h3 className="font-bold text-lg">TOP 10 평균 리소스 할당량</h3>
              </RoundedBox>
            </div>
            <div className="my-3 h-[1px] w-full bg-gray-300"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
