import Simple from './Simple'
import react, {useState, useEffect} from 'react'
import axios from '../axios'
const Zayavka = ()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('/telegram')
        .then((res)=>{setData(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    console.log(data)
    return(
        <Simple>
            <h1 className="text-gray-900 hover:text-DarkBlue text-2xl font-bold text-center mb-4"> Zayavka</h1>
            <div className="flex justify-center flex-col">
                {data.map((el)=>{
                    const fulldata = el.date.slice(0,10)
                    const time =el.date.slice(11, 20)
                    return(
                        <div className="flex justify-center">
                    <div className="shadow-lg py-6 w-full md:w-2/5 border-DarkBlue border-2 bg-lightBlue  mt-2 ">
                        <h1 className="text-center font-bold">Name: {el.name}</h1>
                        <h1 className="text-center font-bold">Phone: {el.number}</h1>
                        <h1 className="text-center">Time: {fulldata}</h1>
                        <h1 className="text-center">Clock: {time}</h1>
                        </div>
                    </div>
                )})}
            </div>
        </Simple>
    )
}
export default Zayavka