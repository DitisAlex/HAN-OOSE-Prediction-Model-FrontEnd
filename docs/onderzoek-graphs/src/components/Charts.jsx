import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Charts(props) {
    const [labels, setLabels] = useState(["10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"])
    
    const [data, setData] = useState({
        labels: labels,
        datasets: [{
          label: 'Temperature',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [8, 10, 15, 13, 17, 18, 22, 19],
        }]
      })
      
    return (
        <div className="container">
            <h1>Charts.js</h1>
            <Line 
                data={data}
                width={100}
                height={50} />
        </div>
    )
}