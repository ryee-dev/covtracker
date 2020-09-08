import React, {useEffect} from 'react'
import {Line} from "react-chartjs-2"
import numeral from "numeral"
const options = {
    legend: {
        display: false,
    },
    elements: {
        points: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data){
                return numeral(tooltipItem.value).format("+0,0");
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat:"ll",
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function(value, index, values){
                        return numeral(value).format("0a")
                    }
                }
            }
        ]
    }
}
const buildChartData =(data, casesType="cases")=>{
        let chartData =[];
        let lastDataPoint;

        for(let date in data.cases) {
            if(lastDataPoint){
                let newDataPoint ={
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
            
        }
        return chartData; 
    }
function LineGraph({casesType = "cases", ...props}) {
    const [data, setData] = React.useState({})
    useEffect(() => {
        const fetchData = async () =>{
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=60")
            .then((response) => {return response.json()})
            .then((data) =>{
            let chartData= buildChartData(data, casesType);
            setData(chartData);
            
        })
        }
        fetchData();
    }, [casesType])
   
    return (
        <div className = {props.className}>
            {data?.length > 0 &&(
                <Line
                data = {{
                    datasets:[
                        {
                            data: data,
                            backgroudnColor: "rgba(204, 16, 52, 0.3)",
                            borderColor: "#cc1034",
                        }
                    ]
                }}
                options = {options}
            />
            )}
            
        </div>
    )
}

export default LineGraph