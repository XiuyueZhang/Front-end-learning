// echarts加入项目
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
// 在react中获取dom节点 -> 使用useRef
// 使用时机：useEffect



function Home(){
    const domRef = useRef()

    const chartInit = () => {
        var myChart = echarts.init(domRef.current);

        // Draw the chart
        myChart.setOption({
        title: {
            text: 'ECharts Getting Started Example'
        },
        tooltip: {},
        xAxis: {
            data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
        },
        yAxis: {},
        series: [
            {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
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
            <div ref={domRef} style={{width:'500px', height:'400px'}}></div>
            Home
        </div>
    )
}

export default Home