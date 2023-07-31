import react from 'react'
import { Doughnut } from 'react-chartjs-2'
const DoughnutChart =()=>{
    const data = {
        labels: [
          'Ingliz tili',
          'Matematika',
          'boshqa kurslar'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [350, 150, 100],
          backgroundColor: [
            '#ff94c2',
            '#4db6ac',
            '#aab6fe'
          ],
          hoverOffset: 4
        }]
      };
    return(
        <div className="w-96 h-96">
        <Doughnut
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
    />
        </div>
    )
}
export default DoughnutChart