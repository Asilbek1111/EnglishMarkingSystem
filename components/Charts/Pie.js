import react from 'react'
import { Pie } from 'react-chartjs-2'
const PieChart =()=>{
    const data = {
        labels: [
          '6-18',
          '18-24',
          '24+'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [350, 150, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    return(
        <div className="w-96 h-96">
        <Pie
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
    />
        </div>
    )
}
export default PieChart