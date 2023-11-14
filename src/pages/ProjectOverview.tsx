import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import LineChart from "../components/LineChart";
import { faker } from "@faker-js/faker";
import FragmentedRow from "../components/FragmentedRow";

export default function ProjectOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <h1 className="text-2xl font-bold text-gray-300">
              Project Overview
            </h1>
            <FragmentedRow
              className="mt-3"
              datas={[
                {
                  label: "Project Name",
                  span: "1",
                },
                {
                  label: "Project Instances",
                  span: "1",
                },
                {
                  label: "Project Created",
                  span: "1",
                },
                {
                  label: "Project Owner",
                  span: "1",
                },
              ]}
            />
            <FragmentedRow
              className="mb-3 text-xl font-semibold text-gray-200"
              datas={[
                {
                  label: "PROJECT 0001",
                  span: "1",
                },
                {
                  label: "8",
                  span: "1",
                },
                {
                  label: "2023.11.14",
                  span: "1",
                },
                {
                  label: "Hayden Hong",
                  span: "1",
                },
              ]}
            />

            <div className="my-1 h-[1px] w-full bg-gray-300"></div>

            <div className="grid w-full grid-cols-2 gap-5">
              <div className="col-span-1 flex">
                <LineChart
                  title={"CPU Usage (%)"}
                  labels={[
                    ["2023-11-10", "2023-11-03"],
                    ["2023-11-11", "2023-11-04"],
                    ["2023-11-12", "2023-11-05"],
                    ["2023-11-13", "2023-11-06"],
                    ["2023-11-14", "2023-11-07"],
                    ["2023-11-15", "2023-11-08"],
                    ["2023-11-16", "2023-11-09"],
                  ]}
                  datas={[
                    {
                      label: "CPU Current",
                      data: new Array(7)
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: "CPU Previous",
                      data: new Array(7)
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                  ]}
                />
              </div>
              <div className="col-span-1">
                <LineChart
                  title={"Memory Usage (%)"}
                  labels={[
                    ["2023-11-10", "2023-11-03"],
                    ["2023-11-11", "2023-11-04"],
                    ["2023-11-12", "2023-11-05"],
                    ["2023-11-13", "2023-11-06"],
                    ["2023-11-14", "2023-11-07"],
                    ["2023-11-15", "2023-11-08"],
                    ["2023-11-16", "2023-11-09"],
                  ]}
                  datas={[
                    {
                      label: "Memory Current",
                      data: new Array(7)
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: "Memory Previous",
                      data: new Array(7)
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                  ]}
                />
              </div>
              <div className="col-span-1">
                <LineChart
                  title={"DISK R/W Usage (Bytes)"}
                  labels={[
                    ["2023-11-10", "2023-11-03"],
                    ["2023-11-11", "2023-11-04"],
                    ["2023-11-12", "2023-11-05"],
                    ["2023-11-13", "2023-11-06"],
                    ["2023-11-14", "2023-11-07"],
                    ["2023-11-15", "2023-11-08"],
                    ["2023-11-16", "2023-11-09"],
                  ]}
                  datas={[
                    {
                      label: "Current Read",
                      data: new Array(7)
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 50000 })),
                      color: "rgb(255, 99, 132)",
                      hidden: true,
                    },
                    {
                      label: "Current Write",
                      data: new Array(7)
                        .fill(0)
                        .map(() =>
                          faker.number.int({ min: 50000, max: 300000 }),
                        ),
                      color: "rgb(182, 70, 94)",
                    },
                    {
                      label: "Previous Read",
                      data: new Array(7)
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 50000 })),
                      color: "rgb(53, 162, 235)",
                      hidden: true,
                    },
                    {
                      label: "Previous Write",
                      data: new Array(7)
                        .fill(0)
                        .map(() =>
                          faker.number.int({ min: 50000, max: 300000 }),
                        ),
                      color: "rgb(41, 117, 168)",
                    },
                  ]}
                />
              </div>
              <div className="col-span-1">
                <LineChart
                  title={"Network Usage (bps)"}
                  labels={[
                    ["2023-11-10", "2023-11-03"],
                    ["2023-11-11", "2023-11-04"],
                    ["2023-11-12", "2023-11-05"],
                    ["2023-11-13", "2023-11-06"],
                    ["2023-11-14", "2023-11-07"],
                    ["2023-11-15", "2023-11-08"],
                    ["2023-11-16", "2023-11-09"],
                  ]}
                  datas={[
                    {
                      label: "CPU Current",
                      data: new Array(7)
                        .fill(0)
                        .map(() => faker.number.int({ min: 0, max: 100 })),
                    },
                    {
                      label: "CPU Previous",
                      data: new Array(7)
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
