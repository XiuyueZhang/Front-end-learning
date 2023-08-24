// 封装echarts组件
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

function Bar(props){
    const { title, xData, yData, style } = props;
    const domRef = useRef()

    const chartInit = () => {
        var myChart = echarts.init(domRef.current);

        // Draw the chart
        myChart.setOption({
        title: {
            text: title
        },
        tooltip: {},
        xAxis: {
            data: xData
        },
        yAxis: {},
        series: [
            {
            name: 'sales',
            type: 'bar',
            data: yData
            }
        ]
        });
    }

    // 执行上面的初始化函数
    useEffect(()=>{
        chartInit()
    },[])

    return (
        <div>
            <div ref={domRef} style={style}></div>
        </div>
    )
}

export default Bar