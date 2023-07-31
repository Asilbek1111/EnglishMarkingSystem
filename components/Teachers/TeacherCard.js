import react from 'react'
import Link from 'next/link'
const TeacherCard =(props)=>{
    return(
        <Link href={props.url}>
        <div className="w-96 h-80 ml-2 mt-20 transition delay-50 ease-in-out border-lovelyBlue border-8 hover:border-yellow-500 text-lovelyBlue hover:text-yellow-500 cursor-pointer ">
            <img src={`/img/${props.img}.jpg`} className="h-full" />
            <p className="mt-6 text-xl text-center font-niramit">{props.name}({props.role})</p>
        </div>
        </Link>
    )
}

export default TeacherCard