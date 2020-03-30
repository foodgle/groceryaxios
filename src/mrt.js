import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'LRT',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"magenta",
              backgroundColor:'magenta',
              fill:false
            },
            {
                label: 'MRT',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"blue",
                backgroundColor:'blue',
                fill:false
            },
              {
                label: 'Taxi',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"yellow",
                backgroundColor:'yellow',
                fill:false
              },
              {
                label: 'Bus',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"red",
                backgroundColor:'red',
                fill:false
              }
          ]
          
        },
        options: {
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        
        for(let key in this.results){
            if (this.results[key].type_of_public_transport == 'LRT') {
                this.chartdata.datasets[0].data.push(this.results[key].average_ridership)
                if (!this.chartdata.labels.includes(this.results[key].year))
                    this.chartdata.labels.push(this.results[key].year+'')
            } else if (this.results[key].type_of_public_transport == 'MRT') {
                this.chartdata.datasets[1].data.push(this.results[key].average_ridership)
                if (!this.chartdata.labels.includes(this.results[key].year))
                    this.chartdata.labels.push(this.results[key].year+'')
            } else if (this.results[key].type_of_public_transport == 'Taxi') {
                this.chartdata.datasets[2].data.push(this.results[key].average_ridership)
                if (!this.chartdata.labels.includes(this.results[key].year))
                    this.chartdata.labels.push(this.results[key].year+'')
            } else{
                this.chartdata.datasets[3].data.push(this.results[key].average_ridership)
                if (!this.chartdata.labels.includes(this.results[key].year))    
                    this.chartdata.labels.push(this.results[key].year+'')
            }
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}