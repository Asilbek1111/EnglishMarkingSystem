import react, {useState, useEffect} from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import router from 'next/router'
const SignIn = ()=>{
    const [login, setLogin]= useState('')
    const [success, setSuccess]= useState(false)
    const [fail, setFail]= useState(false)
    const [password, setPassword]= useState('')
    const Submit = ()=>{
        if(login === 'AdminTour' && password === '8866'){
            localStorage.setItem('www', 'qwerty')
            setSuccess(true)
            router.reload()
        }else{
            null
            setFail(true)
        }
    }
    const onConfirm = ()=>{
setSuccess(false)
setFail(false)
    }
    return(
        <div className="bg-normalBlue h-screen">
            <SweetAlert
            success
            show={success}
            title="SuccessFully done"
            onConfirm={onConfirm}
            confirmBtnCssClass="bg-green-600 text-white text-2xl py-1 px-2 rounded"
            />
            <SweetAlert
            warning
            show={fail}
            title="Error"
            onConfirm={onConfirm}
            onCancel={onConfirm}
            confirmBtnCssClass="bg-red-600 text-white text-2xl py-1 px-2 rounded"
            />
            <div className="flex justify-center pt-20">
            <div className=" w-11/12 md:w-2/5 bg-white rounded-md shadow-lg">
                <div className="flex justify-center">
                <img src="/zm.jpg" className="w-3/5 h-auto" />
                </div>
                <div className="flex justify-center">
                <input onChange={(e)=>setLogin(e.target.value)} className="border-DarkBlue border-2 text-center rounded-md md:w-96 focus:outline-none pl-2 py-1" placeholder="Login" />
                </div>
                <div className="flex justify-center">
                <input onChange={(e)=>setPassword(e.target.value)} className="border-DarkBlue mt-4 md:w-96 border-2 text-center rounded-md focus:outline-none pl-2 py-1" placeholder="Parol" />
                </div>
                <div className="flex justify-center">
                    <button className="rounded-md my-4 bg-DarkBlue text-white text-center p-2" onClick={Submit}>Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default SignIn