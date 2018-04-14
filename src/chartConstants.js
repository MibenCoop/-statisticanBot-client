export  const CHART_DATA = {
    labels: [],
    datasets:[
      {
        label:'Amount of messages',
        data: [],
        backgroundColor:'rgba(255, 99, 132, 0.6)',
        
      }
    ],
    options:{
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Amount of messages',
                    fontSize: 14
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Days',
                    fontSize: 14
                },
            }]
        },
        title:{
          display:true,
          text:'Messages per day in current month',
          fontSize:25
        },
        legend:{
          display:false,
        },
        layout:{
          padding:{
            left:50,
            right:50,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
  }