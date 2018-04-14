import React from 'react';
import {Bar} from 'react-chartjs-2';
import { getChartMessages}  from '../utils/handlingMessages'


const Chart = (props) => {
    const { chartData, messages } = props;
    const data = getChartMessages(messages, chartData.labels) 
    let liveChartData = Object.assign({}, chartData )
    if ( Object.keys(liveChartData).length !== 0) {
        liveChartData.datasets[0].data = data
    }
    return(
        <section className="Bar">
            <Bar
                data={liveChartData}
                width={100}
                height={30}
                options={liveChartData.options}
            />
        </section>
    );
}

export default Chart;