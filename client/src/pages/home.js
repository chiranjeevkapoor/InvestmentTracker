import React from "react"
// import Axios from "axios"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import {faker} from '@faker-js/faker';


export default function Home(props){
    

    const[stockName, setstockName] = React.useState()
    const[amount, setAmount] = React.useState('')
    const[timePeriod, setTimePeriod] = React.useState()
    const[roi, setroi] = React.useState()
    const[click, setclick] = React.useState(false)

    React.useEffect(() => {
        const timeout = setTimeout(() => {
          setAmount(amount);
        }, 600);
        return () => {
          clearTimeout(timeout);
        };
      }, [amount]);

      
      
    
        async function compon() {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stockName}&apikey=HO5KPYZF6BFR5PKK`
        const response = await fetch(url);
        const data =  await response.json()
        console.log((data['Meta Data']['3. Last Refreshed']))
    
        const present =   (data['Meta Data']['3. Last Refreshed'])
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()
        if(timePeriod === 2){
            year = year - 2;
        }
        else if(timePeriod === 5){
            year = year - 5;
        }
        else{
            year = year - 10;
        }
        let tpdate = new Date(year, month+1, 1);
        const perf = tpdate.toISOString().split('T')[0];

        console.log(data['Monthly Time Series'][present]['4. close'])
        console.log(data['Monthly Time Series'][perf]['4. close'])
        const a = data['Monthly Time Series'][present]['4. close']
        const b = data['Monthly Time Series'][perf]['4. close']
        
        const cem = (amount/a);
        console.log(cem)
        const prof = cem * b; 
        console.log(amount);
        console.log(prof-amount);
        setroi(prof-amount)

    }
    compon()
 
    // })

    // this is a dummy chart.

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
       const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

      function handleclick(){
        setclick(true);
      }
    
     





    return (
        <div className="home"><h1>Welcome {props.loginStatus} !</h1>
        <h2></h2>
        <h2>Please Insert The Stock Market Name of The Company</h2>

        <div className="input-group">

            <input 
            type="search" 
            id="form1" 
            className="form-control" 
            placeholder="Company Name" 
            onChange={(e) => {
                setstockName(e.target.value)
            }}
            />

        </div>
        <input 
        type="search" 
        id="form1" 
        className="form-control" 
        placeholder="Enter your Amount $"
        onChange={(e) => {
            setAmount(e.target.value)
        }}
         />
        
        <select name="Investment Period" id="time-period">
           <option 
           value=""
           onChange={(e) => {
            setTimePeriod(e.target.value)
        }} 
           >
            Investment Period
            </option>
           <option value="2">2 Years</option>
           <option value="5">5 Years</option>
           <option value="10">10 Years</option>
           
        </select>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={handleclick}
            >
            Search  
            </button>

       <div><Line className="graph" options={options} data={data} /></div>
       {click ? <h1>Profits are : ${roi}</h1> : <h1>nothing</h1> }
       
        </div>
        
    )
}