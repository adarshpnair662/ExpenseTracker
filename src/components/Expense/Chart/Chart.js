import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart (props) {

    const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMax = Math.max(...dataPointsValues);


    return(
        <div className='chart'>
            {props.dataPoints.map(
                dataPoints => {
                    return(
                    <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue = {totalMax}
                    label = {dataPoints.label}
                    />
                    )
                }
            )}
        </div>
    )
};

export default Chart;