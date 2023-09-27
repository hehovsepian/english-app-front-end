import { useEffect, useState } from "react"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts';
import styled from 'styled-components';

type ChartDatum = {
    name: string,
    gse: number,
    test: string,
    desc: string
}

const data:ChartDatum[] = [
    {
        name: '17 Feb',
        gse: 20,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '4 Mar',
        gse: 80,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '31 Mar',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '7 Apr',
        gse: 34,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 Apr',
        gse: 30,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '21 Apr',
        gse: 55,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '28 Apr',
        gse: 60,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '1 May',
        gse: 40,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '7 May',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 May',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '21 May',
        gse: 65,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '28 May',
        gse: 70,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '31 May',
        gse: 70,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '17 Jan',
        gse: 20,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '4 Mar',
        gse: 80,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '31 Mar',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '7 Apr',
        gse: 34,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 Apr',
        gse: 30,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '21 Apr',
        gse: 55,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '28 Apr',
        gse: 60,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '1 May',
        gse: 40,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '7 May',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 May',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '21 May',
        gse: 65,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '28 May',
        gse: 70,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '31 May',
        gse: 70,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '1 Jul',
        gse: 27,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 Jul',
        gse: 55,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '1 Aug',
        gse: 30,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '18 Aug',
        gse: 30,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '22 Sep',
        gse: 20,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 Oct',
        gse: 27,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '1 Nov',
        gse: 60,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 Nov',
        gse: 23,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '21 Nov',
        gse: 34,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '1 Dec',
        gse: 40,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '12 Dec',
        gse: 30,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '17 Feb',
        gse: 20,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '4 Mar',
        gse: 80,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '31 Mar',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '7 Apr',
        gse: 34,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 Apr',
        gse: 30,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '21 Apr',
        gse: 55,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '28 Apr',
        gse: 60,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '1 May',
        gse: 40,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '7 May',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '14 May',
        gse: 50,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '21 May',
        gse: 65,
        test: "B1 CEFR",
        desc: "Pearson Level Test"
      },
      {
        name: '28 May',
        gse: 70,
        test: "Pearson Benchmark Test",
        desc: "Pearson Level Test"
      },
      {
        name: '31 May',
        gse: 70,
        test: "C1 CEFR",
        desc: "Pearson Level Test"
      }
    ];


const ChartContainer = styled.div`
   margin: 100px auto;
   width:calc(100% - 100px);

   .active-dot {
        filter:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    }

    .timeline-tooltip {
        background: #212E47;
        border-radius: 6.52572px;
        color:white; 
        padding: 8px 14px;
        display:flex;
        gap:12px;
        max-width:165px;
    
        p, span {
            color:white; 
            margin:0;
        }
        .test-info {
            .label {
                font-size:14px;
                font-weight:700;
            }
            .desc {
                font-size:8px;
            }
        }
        p.test-date {
            display: block;
            color:#9e9e9e;
            font-size:7px;
            line-height:10px;
            margin-top:2em;
            margin-bottom:0;
        }
        .test-badge {
            // display: flex;
            // flex-direction:column;
            // align-items: center;
            // justify-content: center;
            min-height:55px;
            min-width:46px;
            text-align: center;
            background: url("../../images/timeline-bg-1.png") center top no-repeat;
            position:relative;
    
            &:before {
                width:36px;
                height:36px;
                content:'';
                position:absolute;
                left:calc(50% - 18px);
                top:8px;
                background: linear-gradient(148.12deg, #1956A0 4.09%, #3C89F7 59.32%, #0D51B1 90.1%);
                z-index: 0;
                border-radius:50%;
            }
    
            span {
                display:block;
                font-size:12px;
                line-height:15px;
                font-weight:700;
                z-index: 1;
                position:absolute;
                // left:calc(50% - 18px);
                top:14px;
                width:100%;
            }
            .gse {
                font-size:8px;
                top:25px;
            }
        }
    }
`

const ChartControls = styled.div`
fieldset {
    border:0;
    margin:0;
    padding:0;
    position: relative;

    legend {
        position: absolute;
        visibility: hidden;
        width:1px;
        height:0;
        overflow: hidden;
    }
}

.radio-row {
    display:flex;

    .timeframe {
        position: relative;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        cursor:pointer;
        color:black;
        margin-right:16px;

        span {
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
        }

        input {
            position: absolute;
            left:0;
            top:0;

            &:checked {

                + span {
                    color:$defaultText;
                    font-weight:700;
                }
            }
        }
    }

    input {opacity:0;}
`

function LearningTimeline(){

    const [timeFrame, setTimeFrame] = useState(1);
    const [chartData, setChartData] = useState(data.slice(-6));

    const formatData = (time:number) => {
        let originaData = [...data];
        let filteredData;
        switch(time) {
            case 1:
                filteredData = originaData.slice(-6);
                break;
            case 6:
                filteredData = originaData.slice(-16);
                break;
            case 12:
                filteredData = originaData.slice(-25);
                break;
            case 24:
                filteredData = originaData;
                break;
            default:
                filteredData = originaData;
        }
        setTimeFrame(time)
        setChartData(filteredData) 
    }

    type ToolTipProps = {
        active?:boolean,
        payload?: any,
        label?: string
    }

    const CustomTooltip = ({ active, payload, label }: ToolTipProps) => {
        if (active && payload && payload.length) {
        return (
            <div className="timeline-tooltip">
                <div className='test-info'>
                     <p className="label">{`${payload[0].payload.test}`}</p>
                    {payload[0].payload.desc ? <p className="desc">{`${payload[0].payload.desc}`}</p> : <></>}
                    <p className='test-date'>{label}</p>
                </div>
                <div className='test-badge'>
                    <p className="value">
                        <span>{`${payload[0].value}`}</span>
                        <span className='gse'>GSE</span>
                    </p>
                </div>
            </div>
        );
        }
    
        return null;
    };

    return (
        <ChartContainer>
            <div>
                <p>Learning Timeline</p>
                <ChartControls>
                        <fieldset>
                            <legend style={{visibility:"hidden"}}>Timeframe</legend>
                            <div className='radio-row'>
                                <label className='timeframe'><input type="radio" name="chartId" defaultChecked={timeFrame === 1} onChange={() => formatData(1)}/><span>1M</span></label>
                                <label className='timeframe'><input type="radio" name="chartId" defaultChecked={timeFrame === 6} onChange={() => formatData(6)}/><span>6M</span></label>
                                <label className='timeframe'><input type="radio" name="chartId" defaultChecked={timeFrame === 12} onChange={() => formatData(12)}/><span>1Y</span></label>
                                <label className='timeframe'><input type="radio" name="chartId" defaultChecked={timeFrame === 24} onChange={() => formatData(24)}/><span>2Y</span></label>
                            </div>
                        </fieldset>
                </ChartControls>
             </div>
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#010676" stopOpacity={0.5}/>
                        <stop  offset="100%" stopColor="#014576" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="paint0_linear_1609_20075" x1="0" y1="0" x2="1" y2="1">
                        <stop stop-color="#0CD6CB"/>
                        <stop offset="1" stop-color="#597FFF"/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name"  interval="preserveStartEnd"  tickLine={false} axisLine={false} overflow={"allow"} dy={5}/>
                    <YAxis  dataKey="gse" hide={true} domain={[0,100]} /> 
                    <Tooltip  cursor={false}  content={<CustomTooltip/>}/>
                    <Area type="monotone" dataKey="gse" strokeWidth={4} strokeLinecap="round" stroke="#212E47" fill="url(#colorUv)"
                        activeDot={{ className:'active-dot',fill: 'url(#paint0_linear_1609_20075)', stroke:'none', fillOpacity:1, r: 8 }} 
                        dot={{ fill: '#212E47', stroke:'none', fillOpacity:1, r: 8 }}
                        
                        />
                </AreaChart>
            </ResponsiveContainer>
        </ChartContainer>
    )

}

export default LearningTimeline