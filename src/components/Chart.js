import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { getChartMessages}  from '../utils/handlingMessages'


const Chart = (props) => {
    const { chartData, messages } = props;
    const data = getChartMessages(messages, chartData.labels) 
    let fullChartData = Object.assign({}, chartData )
    if ( Object.keys(fullChartData).length !== 0) {
        fullChartData.datasets[0].data = data
    }
    return(
        <section className="Bar">
            <Bar
                data={fullChartData}
                width={100}
                height={30}
                options={{
                }}
            />
        </section>
    );
}

export default Chart;