import React, { useState } from 'react';
import Chart from "react-apexcharts";

export default function ApexChart(props) {
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"]
        }
    })

    const [series, setSeries] = useState([{
        name: "Temperature",
        data: [8, 10, 15, 13, 17, 18, 22, 19]
    }])

    return (
        <div className="container">
            <h1>ApexCharts</h1>
            <div className="mixed-chart">
                <Chart options={options} series={series} type="line" width="500"/>
            </div>
        </div>
    )
}