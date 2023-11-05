import React from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export default function LineChart() {
	const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Chart.js Line Chart",
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Dataset 2",
				data: labels.map(() => faker.number.int({ min: 50, max: 150 })),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return <Line options={options} data={data}></Line>;
}
